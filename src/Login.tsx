import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./Login.css";
import img from "@/assets/Group1.png";
import logo from "@/assets/logo.png";

const Login = () => {

  const [success, setSuccess] = useState(false);

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSuccess(true);
};

  return (
    <div className="container-fluid vh-100">
      {success && (
        <div className="alert alert-success text-center m-0">
          Login Successfully 
        </div>
      )}

      <div className="row h-100">

        <div className="col-md-6 d-flex justify-content-center align-items-center bg-light">
          <div className="bg-white p-4 rounded-4 text-center shadow login-card">

            <div className="mb-3">
              <img src={logo} alt="logo" className="logo-img" />
            </div>

            <h4 className="mb-2">Welcome Back</h4>
            <p className="text-muted small mb-3">
              Please enter your details
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-floating mb-3 position-relative">

                <i className="fa fa-envelope position-absolute top-50 start-0 ms-3 text-muted"></i>

                <input
                  type="email"
                  className="form-control ps-5 pe-5 rounded-3"
                  id="email"
                  placeholder="Email Address"
                  defaultValue="cclemployee@zohomail.com"
                />

                <label htmlFor="email" className="ps-5">
                  Email Address
                </label>

                <i className="fa fa-check-circle text-success position-absolute top-50 end-0 translate-middle-y me-3"></i>
              </div>

              <div className="mb-3 text-start">
                <label className="mb-2">Password</label>

                <div className="position-relative">
                  <input
                    type="password"
                    className="form-control rounded-3 pe-5"
                    defaultValue="password"
                  />
                  <i className="fa fa-eye position-absolute top-50 end-0 translate-middle-y me-3 text-muted"></i>
                </div>
              </div>

              <button className="btn btn-primary w-100 rounded-3">
                Continue
              </button>
            </form>

          </div>
        </div>

        <div className="col-md-6 d-none d-md-flex justify-content-center align-items-center">
          <img
            src={img}
            alt="login"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Login;