import React, { useState } from "react";
import AuthCard from "./AuthCard";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Login.css";

import logo from "@/assets/logo.png";
import img from "@/assets/reset-password.png"; 

const ResetPassword = () => {
  const [password, setPassword] = useState("password");
  const [confirmPassword, setConfirmPassword] = useState("password");
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log("Password reset:", password);
  };
  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        <AuthCard
          title="Reset Password"
          subtitle="Enter your new password"
          logo={logo}
        >
          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label className="mb-2">New Password</label>
              <input
                type="password"
                className="form-control rounded-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3 text-start">
              <label className="mb-2">Confirm Password</label>
              <input
                type="password"
                className="form-control rounded-3"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button className="btn btn-primary w-100 rounded-3 py-2 mt-2">
              Submit
            </button>
            <p className="text-center mt-3 mb-0">
              <Link to="/" className="text-muted text-decoration-none">
                ← Back to Sign In
              </Link>
            </p>
          </form>
        </AuthCard>
        <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
          <img
            src={img}
            alt="reset-password"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default ResetPassword;