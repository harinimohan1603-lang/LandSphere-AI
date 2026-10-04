import { Link } from "react-router-dom";
import "./Home.css";
function App() {
  return (
    <div className="home-page">

      {/* NAVBAR */}
      <nav className="home-navbar">
        <div className="home-logo">
          <div className="home-logo-icon">L</div>

          <div>
            <h2>LandSphere</h2>
            <span>AI LAND GOVERNANCE</span>
          </div>
        </div>

        <div className="home-nav-links">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#about">About</a>
        </div>

        <Link to="/login" className="home-login">
          Sign In →
        </Link>
      </nav>

      {/* HERO */}
      <section className="home-hero" id="home">

        <div className="hero-content">

          <div className="hero-badge">
            ✦ AI-POWERED LAND INTELLIGENCE
          </div>

          <h1>
            Smarter Land Governance.
            <br />
            <span>Better Decisions.</span>
          </h1>

          <p>
            LandSphere brings land data, research, GIS insights and
            AI-powered analysis together in one intelligent platform.
          </p>

          <div className="hero-buttons">
            <Link to="/login" className="hero-primary">
              Explore LandSphere →
            </Link>

            <a href="#features" className="hero-secondary">
              Discover Features
            </a>
          </div>

          <div className="hero-trust">
            <span>✓ AI Analysis</span>
            <span>✓ GIS Intelligence</span>
            <span>✓ Evidence-Based Insights</span>
          </div>

        </div>

        {/* HERO VISUAL */}
        <div className="hero-visual">

          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="hero-glow"></div>

          <div className="land-card">

            <div className="land-card-top">
              <span>LIVE LAND INTELLIGENCE</span>
              <b>●</b>
            </div>

            <div className="land-map-preview">

              <div className="map-line line-one"></div>
              <div className="map-line line-two"></div>
              <div className="map-line line-three"></div>

              <div className="land-pin pin-one">!</div>
              <div className="land-pin pin-two">!</div>
              <div className="land-pin pin-three">!</div>

              <div className="map-center-icon">⌖</div>

            </div>

            <div className="land-card-bottom">
              <div>
                <small>LAND ISSUES</small>
                <strong>1,248</strong>
              </div>

              <div>
                <small>AI ANALYSED</small>
                <strong>892</strong>
              </div>

              <div>
                <small>INSIGHTS</small>
                <strong>326</strong>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="features-section" id="features">

        <div className="section-heading">
          <p>POWERFUL CAPABILITIES</p>
          <h2>Everything you need for<br />smarter land governance.</h2>
        </div>

        <div className="feature-grid">

          <div className="feature-card">
            <div className="feature-icon">⌖</div>
            <h3>GIS Land Intelligence</h3>
            <p>
              Explore land-related information through interactive
              maps and location-based insights.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">✦</div>
            <h3>AI-Powered Analysis</h3>
            <p>
              Use AI to identify patterns, analyse reports and
              generate meaningful land insights.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">▤</div>
            <h3>Research & Data</h3>
            <p>
              Connect research, datasets and policy information
              in one centralized platform.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">◉</div>
            <h3>Evidence-Based Decisions</h3>
            <p>
              Transform complex land information into useful
              evidence for better decision-making.
            </p>
          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="about-section" id="about">

        <div>
          <p className="about-label">ABOUT LANDSPHERE</p>

          <h2>
            Turning land data into
            <span> meaningful intelligence.</span>
          </h2>
        </div>

        <p>
          LandSphere is an AI-powered digital platform designed to
          bring land governance research, policies, datasets and
          geospatial information together. It helps users discover
          information, identify patterns and generate evidence-based
          insights.
        </p>

      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div>
          <strong>LandSphere</strong>
          <span>AI LAND GOVERNANCE</span>
        </div>

        <p>Intelligent technology for better land governance.</p>

        <small>© 2026 LandSphere AI</small>
      </footer>

    </div>
  );
}

export default App;