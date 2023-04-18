import React from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import uservalidation from "../uservalidation";
//import { Link } from "react-router-dom";
const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    mobile_No: "",
    userRole: "",
  });

  const [errors, setErrors] = useState({});
  const history = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(uservalidation(user));
    if (!user.gender) {
      errors.gender = "Gender is required";
    }
    setSubmitted(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && submitted) {
      console.log(user);
      user.userRole = "CUSTOMER";
      axios
        .post("http://localhost:8080/ecomm/users/signup", user)
        .then((resp) => {
          console.log(resp);
          alert("Customer registered successfully");
          history.push("/login");
        });
      //.catch((error) => alert("Email already exists!!!"));
    }
  }, [errors]);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sign-Up</title>
      </Helmet>{" "}
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Create Your Account</h3>
                <form
                  onSubmit={handleSubmit}
                  action=""
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <input
                      value={user.firstName}
                      onChange={handleInput}
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="form-control"
                    ></input>
                    {errors.firstName && (
                      <small className="text-danger float-right">
                        {errors.firstName}
                      </small>
                    )}
                  </div>
                  <div>
                    <input
                      value={user.lastName}
                      onChange={handleInput}
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="form-control"
                    ></input>
                    {errors.lastName && (
                      <small className="text-danger float-right">
                        {errors.lastName}
                      </small>
                    )}
                  </div>
                  <div className="mt-1">
                    <input
                      value={user.email}
                      onChange={handleInput}
                      type="email"
                      name="email"
                      placeholder="Email"
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
                      value={user.password}
                      onChange={handleInput}
                      type="password"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                    ></input>{" "}
                    {errors.password && (
                      <small className="text-danger float-right">
                        {errors.password}
                      </small>
                    )}
                  </div>
                  <div className="mt-1">
                    <input
                      value={user.moble_no}
                      onChange={handleInput}
                      type="text"
                      maxLength="10"
                      name="mobile_No"
                      placeholder="Mobile No"
                      className="form-control"
                    ></input>
                    {errors.mobile_No && (
                      <small className="text-danger float-right">
                        {errors.mobile_No}
                      </small>
                    )}
                  </div>

                  <div className="text-center">
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Sign Up</button>
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

export default Signup;
