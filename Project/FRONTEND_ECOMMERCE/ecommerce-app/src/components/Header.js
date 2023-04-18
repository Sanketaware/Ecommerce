import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";

//import { IMPORT ICON SEARCH } from "react-icons";
const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-white mb-0">
                Free Shipping For Orders Over 1000.Rs{" "}
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mb-0">
                Register :
                <Link className="text-white" to="/register-seller">
                  Become a Seller
                </Link>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-2">
              <h2>
                <Link className="text-white">Fashionova</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search product Here"
                  aria-label="Search product Here"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text" id="basic-addon2">
                  @AddIcon
                </span>
              </div>
            </div>
            <div className="col-5">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                <div>
                  <Link
                    to="login"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/person-circle.svg" alt="Profile"></img>
                    <div class="dropdown">
                      <button className="d-down button">Profile</button>
                      <div class="dropdown-content">
                        <Link to="/admin-login">Admin</Link>
                        <Link to="/seller-login">Seller</Link>
                        <Link to="/login">Customer</Link>
                      </div>
                    </div>
                  </Link>
                </div>
                <div>
                  <Link
                    to="wishlist"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/heart-fill.svg" alt="wishlist"></img>
                    <p className="mb-0">Wishlist</p>
                  </Link>
                </div>
                <div>
                  <Link
                    to="/cart"
                    className="d-flex align-items-center gap-10 text-white"
                  >
                    <img src="images/cart3.svg" alt="Cart"></img>
                    <p className="mb-0">Cart</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex  align-items-center gap-15">
                <div class="dropdown">
                  <button className="d-down button">Categories</button>
                  <div class="dropdown-content">
                    <NavLink to="/men">Men</NavLink>
                    <NavLink to="/women">Women</NavLink>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/our-store">Our Store</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    {/* <NavLink to="/">Something</NavLink> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
