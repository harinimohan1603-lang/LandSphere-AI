from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psycopg

app = FastAPI(title="LandSphere AI API")


# PostgreSQL connection
conn = psycopg.connect(
    "dbname=LandSphere user=postgres password=Harini@@123 host=localhost port=5432"
)

print("PostgreSQL connected successfully!")


app.add_middleware(
    CORSMiddleware,
   allow_origins=[
    "http://localhost:5173",
    "http://localhost:5174",
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "LandSphere AI Backend is running!"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/reports")
def create_report(report: dict):
    with conn.cursor() as cursor:
        cursor.execute(
            """
            INSERT INTO reports (title, location, issue_type, description)
            VALUES (%s, %s, %s, %s)
            """,
            (
                report["title"],
                report["location"],
                report["issueType"],
                report["description"],
            ),
        )

        conn.commit()

    return {
        "message": "Report saved successfully!",
        "report": report
    }
@app.get("/reports")
def get_reports():
    with conn.cursor() as cursor:
        cursor.execute(
            """
            SELECT id, title, location, issue_type, description, created_at
            FROM reports
            ORDER BY created_at DESC
            """
        )

        rows = cursor.fetchall()

    reports = []

    for row in rows:
        reports.append({
            "id": row[0],
            "title": row[1],
            "location": row[2],
            "issueType": row[3],
            "description": row[4],
            "createdAt": row[5].isoformat() if row[5] else None,
        })

    return reports
