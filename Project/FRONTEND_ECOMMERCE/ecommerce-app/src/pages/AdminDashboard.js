import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
const AdminDashboard = () => {
  return (
    <>
      <Meta title={"Admin Dashboard"} />
      <BreadCrumb title="Admin Dashboard"></BreadCrumb>
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Dashboard</h3>
                <div>
                  <ul className="ps-0">
                    <li>
                      <Link to="/all-sellers">View Sellers</Link>
                    </li>
                    <li>
                      <Link to="/all-customers">View Customers</Link>
                    </li>
                    <li>
                      <Link to="/all-products">View Orders</Link>
                    </li>
                    <li>Reviews</li>
                  </ul>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">IF NEEDED MORE</h3>
              </div>
            </div>
            <div className="col-9"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
