import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">

      <div className="login-card">

        {/* BRAND */}
        <div className="login-brand">
          <div className="login-logo">L</div>

          <div>
            <h2>LandSphere</h2>
            <span>AI LAND GOVERNANCE</span>
          </div>
        </div>

        {/* HEADING */}
        <div className="login-heading">
          <p className="login-eyebrow">WELCOME BACK</p>

          <h1>Sign in to LandSphere</h1>

          <p>
            Access your land intelligence workspace and explore
            AI-powered insights.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/dashboard");
          }}
        >

          <div className="login-input-group">
            <label>Email address</label>

            <input
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="login-input-group">

            <div className="password-row">
              <label>Password</label>

              <a href="#forgot">
                Forgot password?
              </a>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              required
            />

          </div>

          <button
            type="submit"
            className="login-submit"
          >
            Sign In
            <span>→</span>
          </button>

        </form>

        {/* DIVIDER */}
        <div className="login-divider">
          <span>OR</span>
        </div>

        {/* DEMO */}
        <button
          type="button"
          className="demo-login"
          onClick={() => navigate("/dashboard")}
        >
          <span>✦</span>
          Continue with Demo Account
        </button>

        {/* SIGN UP */}
        <p className="signup-text">
          Don't have an account?
          <span> Create one</span>
        </p>

        {/* BACK */}
        <Link to="/" className="back-home">
          ← Back to LandSphere
        </Link>

      </div>

    </div>
  );
}

export default Login;