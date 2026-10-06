const API_URL = "http://127.0.0.1:8000";

export async function checkBackend() {
  const response = await fetch(`${API_URL}/health`);

  if (!response.ok) {
    throw new Error("Backend connection failed");
  }

  return response.json();
}

export async function submitReport(report) {
  const response = await fetch(`${API_URL}/reports`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(report),
  });

  if (!response.ok) {
    throw new Error("Report submission failed");
  }

  return response.json();
}
export async function getReports() {
  const response = await fetch("http://127.0.0.1:8000/reports");

  if (!response.ok) {
    throw new Error("Failed to fetch reports");
  }

  return await response.json();
}
