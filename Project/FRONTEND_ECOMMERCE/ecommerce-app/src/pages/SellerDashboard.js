import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
const SellerDashboard = () => {
  return (
    <>
      <Meta title={"Seller Dashboard"} />
      <BreadCrumb title="Seller Dashboard"></BreadCrumb>
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Dashboard</h3>
                <div>
                  <ul className="ps-0">
                    <li>
                      <Link to="/add-product">Add new Product</Link>
                    </li>
                    <li>
                      <Link to="/all-products">View Product</Link>
                    </li>
                    <li>
                      <Link to="/all-orders">View Orders</Link>
                    </li>
                    <li>
                      <Link to="/all-products">View Reviews</Link>
                    </li>
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

export default SellerDashboard;
