import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { submitReport, getReports } from "../api";
import "./Dashboard.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Dashboard() {
  const [showReportForm, setShowReportForm] = useState(false);
  const [reports, setReports] = useState([]);
  const [showInsight, setShowInsight] = useState(false);
  const [selectedExpert, setSelectedExpert] = useState(null);
  const [showAllReports, setShowAllReports] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
useEffect(() => {
  const loadReports = async () => {
    try {
      const data = await getReports();
      setReports(data);
    } catch (error) {
      console.error("Failed to load reports:", error);
    }
  };

  loadReports();
}, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const report = {
      title: formData.get("title"),
      location: formData.get("location"),
      issueType: formData.get("issueType"),
      description: formData.get("description"),
    };

    try {
      const result = await submitReport(report);

      alert(result.message);
      setShowReportForm(false);
    } catch (error) {
      alert("Failed to submit report.");
      console.error(error);
    }
  };
{showAllReports && (
  <div className="report-modal-overlay">
    <div className="report-modal">

      <div className="report-modal-header">
        <div>
          <p className="ls-eyebrow">REPORT HISTORY</p>
          <h2>All My Reports</h2>
        </div>

        <button
          className="report-modal-close"
          onClick={() => setShowAllReports(false)}
        >
          ×
        </button>
      </div>

      <div className="report-modal-body">

        {reports.length === 0 ? (
          <p className="no-reports">
            No reports submitted yet.
          </p>
        ) : (
          reports.map((report) => (
            <div className="history-report" key={report.id}>

              <div className="history-icon">
                ▤
              </div>

              <div className="history-info">
                <strong>{report.title}</strong>

                <span>
                  📍 {report.location}
                </span>

                <small>
                  {report.issueType}
                </small>
              </div>

              <span className="history-status">
                Submitted
              </span>

            </div>
          ))
        )}

      </div>

    </div>
  </div>
)}
  return (
    <div className="ls-dashboard">

      {/* SIDEBAR */}
      <aside className="ls-sidebar">

        <div className="ls-brand">
          <div className="ls-brand-icon">L</div>

          <div>
            <h2>LandSphere</h2>
            <span>AI LAND GOVERNANCE</span>
          </div>
        </div>

        <nav className="ls-nav">

          <a href="#overview" className="active">
            <span>▦</span> Overview
          </a>

          <a href="#map">
            <span>⌖</span> Land Map
          </a>

          <a href="#reports">
            <span>▤</span> My Reports
          </a>

          <a href="#insights">
            <span>✦</span> AI Insights
          </a>

          <a href="#experts">
            <span>♙</span> Experts
          </a>

        </nav>

        <div className="ls-sidebar-bottom">

<button 
  className="sidebar-settings" 
  onClick={() => setShowSettings(true)} 
>
  ⚙ Settings
</button>

          <Link to="/">
            ← Back to Home
          </Link>

          <Link to="/login" className="ls-logout">
            ↪ Logout
          </Link>

        </div>

      </aside>


      {/* MAIN */}
      <main className="ls-main">

        {/* TOP BAR */}
        <header className="ls-header">

          <div>
            <p className="ls-eyebrow">
              LAND INTELLIGENCE WORKSPACE
            </p>

            <h1>Good morning, Harini 👋</h1>

            <p className="ls-subtitle">
              Monitor land issues, explore insights and manage your reports.
            </p>
          </div>

          <div className="ls-user">

            <div className="ls-avatar">
              H
            </div>

            <div>
              <strong>Harini</strong>
              <span>Citizen</span>
            </div>

          </div>

        </header>


        {/* STATS */}
        <section className="ls-stats">

          <div className="ls-stat">

            <div className="ls-stat-icon">
              ▤
            </div>

            <div>
              <span>My Reports</span>
              <strong>{reports.length}</strong>
              <small>+3 this month</small>
            </div>

          </div>


          <div className="ls-stat">

            <div className="ls-stat-icon">
              ◉
            </div>

            <div>
              <span>Active Issues</span>
              <strong>05</strong>
              <small>2 need attention</small>
            </div>

          </div>


          <div className="ls-stat">

            <div className="ls-stat-icon">
              ✦
            </div>

            <div>
              <span>AI Analysed</span>
              <strong>08</strong>
              <small>Insights generated</small>
            </div>

          </div>


          <div className="ls-stat">

            <div className="ls-stat-icon">
              ✓
            </div>

            <div>
              <span>Resolved</span>
              <strong>07</strong>
              <small>Successfully resolved</small>
            </div>

          </div>

        </section>


        {/* MAIN GRID */}
        <section className="ls-grid">

          {/* MAP */}
          <div className="ls-card ls-map-card" id="map">

            <div className="ls-card-header">

              <div>
                <p className="ls-eyebrow">
                  GIS LAND MAP
                </p>

                <h2>Land Issue Overview</h2>
              </div>

              <button className="ls-filter">
                Chennai ▾
              </button>

            </div>


            <div className="ls-map">

              <MapContainer
                center={[13.0827, 80.2707]}
                zoom={11}
                style={{
                  height: "100%",
                  width: "100%"
                }}
              >

                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />


                <Marker position={[13.0827, 80.2707]}>

                  <Popup>

                    <strong>
                      Chennai Land Issue
                    </strong>

                    <br />

                    Land governance issue reported in this area.

                  </Popup>

                </Marker>


                <Marker position={[13.1667, 80.2600]}>

                  <Popup>

                    <strong>
                      Manali
                    </strong>

                    <br />

                    Land issue detected in this region.

                  </Popup>

                </Marker>


                <Marker position={[13.1143, 80.1548]}>

                  <Popup>

                    <strong>
                      Ambattur
                    </strong>

                    <br />

                    Reported land-related issue.

                  </Popup>

                </Marker>

              </MapContainer>

            </div>

          </div>


          {/* AI INSIGHTS */}
          <div className="ls-card" id="insights">

            <div className="ls-card-header">

              <div>

                <p className="ls-eyebrow">
                  AI ANALYSIS
                </p>

                <h2>Smart Insights</h2>

              </div>

              <span className="ls-ai">
                AI
              </span>

            </div>

<div
  className="ls-insight insight-clickable"
  onClick={() => setShowInsight(true)}
>
  <div className="insight-icon">
    ⚠
  </div>

  <div>
    <strong>
      {reports.length >= 3
        ? "Land Issue Cluster Detected"
        : "Land Issue Monitoring"}
    </strong>

    <p>
      {reports.length >= 3
        ? "Multiple reports have been submitted. AI can identify similar land issues."
        : "Submit more reports to generate stronger AI-based land insights."}
    </p>

    <small>
      {reports.length >= 3
        ? "High priority →"
        : "Collecting data →"}
    </small>
  </div>
</div>


            <div className="ls-insight">

              <div className="insight-icon">
                ⌖
              </div>

              <div>

                <strong>
                  Location Pattern
                </strong>

                <p>
                  Repeated complaints found in the same region.
                </p>

                <small>
                  Pattern detected
                </small>

              </div>

            </div>


            <div className="ls-insight">

              <div className="insight-icon">
                ✦
              </div>

              <div>

                <strong>
                  Research Opportunity
                </strong>

                <p>
                  3 related research topics may help.
                </p>

                <small>
                  Recommended
                </small>

              </div>

            </div>

          </div>

        </section>


        {/* EXPERTS */}
        <section
          className="ls-card ls-experts"
          id="experts"
        >

          <div className="ls-card-header">

            <div>

              <p className="ls-eyebrow">
                EXPERT NETWORK
              </p>

              <h2>
                Recommended Experts
              </h2>

            </div>

            <span className="ls-ai">
              AI
            </span>

          </div>


          <div className="expert-list">

            {/* EXPERT 1 */}
            <div className="expert-item">

              <div className="expert-avatar">
                DR
              </div>

              <div className="expert-info">

                <strong>
                  Dr. Ravi Kumar
                </strong>

                <span>
                  Land Governance Researcher
                </span>

              </div>

              <button
                onClick={() =>
                  setSelectedExpert({
                    name: "Dr. Ravi Kumar",
                    role: "Land Governance Researcher",
                  })
                }
              >
                Connect →
              </button>

            </div>


            {/* EXPERT 2 */}
            <div className="expert-item">

              <div className="expert-avatar">
                AS
              </div>

              <div className="expert-info">

                <strong>
                  Anitha Sharma
                </strong>

                <span>
                  GIS & Land Policy Expert
                </span>

              </div>

              <button
                onClick={() =>
                  setSelectedExpert({
                    name: "Anitha Sharma",
                    role: "GIS & Land Policy Expert",
                  })
                }
              >
                Connect →
              </button>

            </div>


            {/* EXPERT 3 */}
            <div className="expert-item">

              <div className="expert-avatar">
                VK
              </div>

              <div className="expert-info">

                <strong>
                  Vikram Kumar
                </strong>

                <span>
                  Urban Planning Specialist
                </span>

              </div>

              <button
                onClick={() =>
                  setSelectedExpert({
                    name: "Vikram Kumar",
                    role: "Urban Planning Specialist",
                  })
                }
              >
                Connect →
              </button>

            </div>

          </div>

        </section>

        
        {/* REPORTS */}

<section
  className="ls-card ls-reports"
  id="reports"
>

  <div className="ls-card-header">

    <div>

      <p className="ls-eyebrow">
        ACTIVITY
      </p>

      <h2>
        Recent Reports
      </h2>

    </div>

    <button
      className="ls-view"
      onClick={() => setShowAllReports(true)}
    >
      View all →
    </button>

  </div>

  {reports.length === 0 ? (
    <p style={{ padding: "20px", color: "#777" }}>
      No reports submitted yet.
    </p>
  ) : (
    reports.slice(0, 3).map((report) => (
      <div className="ls-report-row" key={report.id}>

        <div className="report-dot pending"></div>

        <div className="report-info">
          <strong>{report.title}</strong>

          <span>
            {report.location}
          </span>
        </div>

        <span className="report-status">
          Submitted
        </span>

      </div>
    ))
  )}

</section>
        {/* CTA */}
        <section className="ls-cta">

          <div>

            <p>
              HAVE A LAND ISSUE?
            </p>

            <h2>
              Help improve land governance.
            </h2>

            <span>
              Report a land-related problem and let AI analyse it.
            </span>

          </div>


          <button
            onClick={() => setShowReportForm(true)}
          >
            + Report a Land Issue
          </button>

        </section>

      </main>


      {/* SETTINGS MODAL */}
      {showSettings && (

        <div className="ls-modal-overlay">

          <div className="ls-modal">

            <button
              className="ls-modal-close"
              onClick={() => setShowSettings(false)}
            >
              ×
            </button>

            <p className="ls-eyebrow">
              ACCOUNT SETTINGS
            </p>

            <h2>
              Settings
            </h2>

            <p>
              Manage your LandSphere workspace preferences.
            </p>


            <div className="settings-option">

              <div>

                <strong>
                  AI Insights
                </strong>

                <span>
                  Receive AI-generated land analysis
                </span>

              </div>

              <input
                type="checkbox"
                defaultChecked
              />

            </div>


            <div className="settings-option">

              <div>

                <strong>
                  Report Notifications
                </strong>

                <span>
                  Get updates about your reports
                </span>

              </div>

              <input
                type="checkbox"
                defaultChecked
              />

            </div>


            <button
              type="button"
              onClick={() => setShowSettings(false)}
              style={{
                marginTop: "20px",
                width: "100%",
                padding: "13px",
                border: "none",
                borderRadius: "9px",
                background: "#173d2d",
                color: "white",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              Save Settings
            </button>

          </div>

        </div>

      )}


      {/* ALL REPORTS MODAL */}
      {showAllReports && (

        <div className="ls-modal-overlay">

          <div className="ls-modal">

            <button
              className="ls-modal-close"
              onClick={() => setShowAllReports(false)}
            >
              ×
            </button>

            <p className="ls-eyebrow">
              REPORT HISTORY
            </p>

            <h2>
              My Reports
            </h2>

            <p>
              View the status of your submitted land-related reports.
            </p>


            <div className="ls-report-row">

              <div className="report-dot pending"></div>

              <div className="report-info">

                <strong>
                  Unauthorized Land Development
                </strong>

                <span>
                  Chennai · 2 hours ago
                </span>

              </div>

              <span className="report-status">
                Under Review
              </span>

            </div>


            <div className="ls-report-row">

              <div className="report-dot active"></div>

              <div className="report-info">

                <strong>
                  Boundary Dispute
                </strong>

                <span>
                  Manali · Yesterday
                </span>

              </div>

              <span className="report-status blue">
                AI Analysed
              </span>

            </div>


            <div className="ls-report-row">

              <div className="report-dot resolved"></div>

              <div className="report-info">

                <strong>
                  Illegal Land Encroachment
                </strong>

                <span>
                  Ambattur · 3 days ago
                </span>

              </div>

              <span className="report-status green">
                Resolved
              </span>

            </div>

          </div>

        </div>

      )}


      {/* EXPERT MODAL */}
      {selectedExpert && (

        <div className="ls-modal-overlay">

          <div className="ls-modal">

            <button
              className="ls-modal-close"
              onClick={() => setSelectedExpert(null)}
            >
              ×
            </button>

            <p className="ls-eyebrow">
              EXPERT CONNECTION
            </p>

            <h2>
              {selectedExpert.name}
            </h2>

            <p>
              {selectedExpert.role}
            </p>


            <div className="ls-insight">

              <div className="insight-icon">
                ♙
              </div>

              <div>

                <strong>
                  Expert Available
                </strong>

                <p>
                  This expert can help with land governance,
                  policy and research-related issues.
                </p>

              </div>

            </div>


            <button
              type="button"
              onClick={() => {
                alert(
                  `Connection request sent to ${selectedExpert.name}!`
                );

                setSelectedExpert(null);
              }}
              style={{
                marginTop: "18px",
                width: "100%",
                padding: "13px",
                border: "none",
                borderRadius: "9px",
                background: "#173d2d",
                color: "white",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              Send Connection Request →
            </button>

          </div>

        </div>

      )}



{/* AI INSIGHT MODAL */}
{showInsight && (

  <div className="ls-modal-overlay">

    <div className="ls-modal">

      <button
        className="ls-modal-close"
        onClick={() => setShowInsight(false)}
      >
        ×
      </button>

      <p className="ls-eyebrow">
        AI ANALYSIS
      </p>

      <h2>
        {reports.length >= 3
          ? "Land Issue Cluster Detected"
          : "Land Issue Monitoring"}
      </h2>

      <p>
        {reports.length >= 3
          ? `AI has identified ${reports.length} submitted land-related reports that can be analysed for similar patterns.`
          : "AI is currently collecting land issue data. Submit more reports to generate stronger insights."}
      </p>

      <div className="ls-insight">

        <div className="insight-icon">
          ⚠
        </div>

        <div>

          <strong>
            {reports.length >= 3
              ? "High Priority Issue"
              : "Data Collection"}
          </strong>

          <p>
            {reports.length >= 3
              ? "Multiple complaints may indicate a recurring land governance pattern that needs further analysis."
              : "More reports will help LandSphere identify location patterns and recurring land issues."}
          </p>

        </div>

      </div>

      <button
        type="button"
        onClick={() => setShowInsight(false)}
        style={{
          marginTop: "18px",
          width: "100%",
          padding: "13px",
          border: "none",
          borderRadius: "9px",
          background: "#173d2d",
          color: "white",
          cursor: "pointer",
          fontWeight: "700",
        }}
      >
        Close Analysis
      </button>

    </div>

  </div>

)}


      {/* REPORT FORM MODAL */}
      {showReportForm && (

        <div className="ls-modal-overlay">

          <div className="ls-modal">

            <button
              className="ls-modal-close"
              onClick={() => setShowReportForm(false)}
            >
              ×
            </button>

            <p className="ls-eyebrow">
              LAND ISSUE REPORT
            </p>

            <h2>
              Report a Land Issue
            </h2>

            <p>
              Provide details about the issue for AI analysis.
            </p>


            <form onSubmit={handleSubmit}>

              {/* TITLE */}
              <label>
                Issue Title
              </label>

              <input
                type="text"
                name="title"
                placeholder="Example: Land encroachment"
                required
              />


              {/* LOCATION */}
              <label>
                Location
              </label>

              <input
                type="text"
                name="location"
                placeholder="Example: Manali, Chennai"
                required
              />


              {/* ISSUE TYPE */}
              <label>
                Issue Type
              </label>

              <select
                name="issueType"
                required
              >

                <option value="">
                  Select issue type
                </option>

                <option value="Land Encroachment">
                  Land Encroachment
                </option>

                <option value="Boundary Dispute">
                  Boundary Dispute
                </option>

                <option value="Illegal Development">
                  Illegal Development
                </option>

                <option value="Land Ownership">
                  Land Ownership
                </option>

                <option value="Other">
                  Other
                </option>

              </select>


              {/* DESCRIPTION */}
              <label>
                Description
              </label>

              <textarea
                name="description"
                rows="4"
                placeholder="Describe the land issue..."
                required
              ></textarea>


              <button type="submit">
                Submit Report →
              </button>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Dashboard;
