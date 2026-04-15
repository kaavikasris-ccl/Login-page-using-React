import { useState } from "react";
import AuthCard from "./AuthCard";
import { Link } from "react-router-dom"; 
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Login.css";
import { useNavigate } from "react-router-dom";

import logo from "@/assets/logo.png";
import img from "@/assets/Frame.png";

const ForgotPassword = () => {
  const [email, setEmail] = useState("cclemployee@zohomail.com");
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  navigate("/reset-password");
};
const navigate = useNavigate();
  return (
    <div className="container-fluid vh-100">

      {success && (
        <div className="alert alert-success text-center m-0">
          Reset link sent successfully
        </div>
      )}

      <div className="row h-100">

        <AuthCard
          title="Forgot Password"
          subtitle="Enter your email to reset password"
          logo={logo}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-floating mb-3 position-relative">

              <i className="fa fa-envelope position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>

              <input
                type="email"
                className="form-control ps-5 pe-5 rounded-3"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />

              <label className="ps-5">Email Address</label>

              <i className="fa fa-check-circle text-success position-absolute top-50 end-0 translate-middle-y me-3"></i>
            </div>
            <button className="btn btn-primary w-100 rounded-3 mb-3">
            Send Reset Link
            </button>
            <p className="text-center mb-0">
              <Link to="/" className="text-decoration-none">
                ← Back to Sign In
              </Link>
            </p>

          </form>
        </AuthCard>
        <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
          <img
            src={img}
            alt="forgot-password"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default ForgotPassword;