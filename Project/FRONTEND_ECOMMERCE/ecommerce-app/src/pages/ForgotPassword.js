import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const ForgotPassword = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Reset Password</title>
      </Helmet>
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Reset Your Password</h3>
                <p className="text-center mt-2 mb-3">
                  We Will Send You An email to reset your password
                </p>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Registerd email"
                      className="form-control"
                    ></input>
                  </div>

                  <div className="text-center">
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center flex-column">
                      <button type="submit" className="button border-0">
                        Submit
                      </button>

                      <Link to="/login">Cancel</Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
