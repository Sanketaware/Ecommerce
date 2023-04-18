import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import loginvalidation from "../loginvalidation";
const SellerLogin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  let navigate = useNavigate();

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(loginvalidation(user));
    setSubmitted(true);
  };
  const routeChange = () => {
    let path = `/seller-dashboard`;
    navigate(path);
  };

  useEffect(() => {
    console.log(errors);
    debugger;
    if (Object.keys(errors).length === 0 && submitted) {
      console.log(user);
      //   axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
      axios
        .post("http://localhost:8080/ecomm/users/login", user)
        .then((resp) => {
          let result = resp.data;
          let uRole = result.userRole;
          debugger;
          if (uRole == "SELLER") {
            console.log(resp.data);
            sessionStorage.setItem("email", result.email);
            sessionStorage.setItem("uname", result.firstname);
            sessionStorage.setItem("role", "seller");
            sessionStorage.setItem("id", result.userId);
            sessionStorage.setItem("IsLoggedIn", true);

            routeChange();
            //   navigate.push("/seller-dashboard");
          }
        })
        .catch((error) => {
          //console.log("Error", error);
          alert("Invalid username or password");
        });
    }
  }, [errors]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Seller Login</title>
      </Helmet>
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Seller Login</h3>
                <form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="email"
                      className="form-control"
                    ></input>
                    {errors.email && (
                      <small className="text-danger float-right">
                        {errors.email}
                      </small>
                    )}
                  </div>
                  <div className="mt-1">
                    <input
                      type="password"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                      className="form-control"
                    ></input>
                    {errors.password && (
                      <small className="text-danger float-right">
                        {errors.password}
                      </small>
                    )}
                  </div>
                  <div className="text-center">
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Login</button>
                      <Link to="/register-seller" className="button border-0">
                        Signup
                      </Link>
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
export default SellerLogin;
