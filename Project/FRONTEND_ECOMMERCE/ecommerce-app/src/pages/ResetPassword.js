import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
const ResetPassword = () => {
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
                <h3 className="text-center mb-3">Reset Password</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      placeholder="Confirm password"
                      className="form-control"
                    ></input>
                  </div>
                  <div className="text-center">
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Ok</button>
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

export default ResetPassword;
