import React from "react";
import { useEffect, useState } from "react";

import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import axios from "axios";
import { Link } from "react-router-dom";
const AllSellers = () => {
  const [sellers, setSellers] = useState([]);
  const token = sessionStorage.getItem("accessToken");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  useEffect(() => {
    axios
      .get("http://localhost:8080/ecomm/users?userRole=SELLER")
      .then((resp) => {
        setSellers(resp.data);

        console.log(sellers);
      });
  }, []);

  const deleteSeller = (id) => {
    let response = window.confirm("Are you sure to delete this supplier ?");
    if (response) {
      console.log(id);
      axios.delete("http://localhost:8080/ecomm/users/" + id).then((resp) => {
        axios
          .get("http://localhost:8080/ecomm/users?userRole=SELLER")
          .then((resp) => {
            setSellers(resp.data);
          });
      });
    }
  };

  return (
    <>
      <Meta title={"Admin Dashboard / View Sellers"} />
      <BreadCrumb title="Admin Dashboard / View Sellers"></BreadCrumb>
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
                    <li>Sales</li>
                    <li>Reviews</li>
                  </ul>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">IF NEEDED MORE</h3>
              </div>
            </div>
            <div className="col-9">
              <div className="container-fluid">
                <h4 className="text-center">All Sellers</h4>
                <br></br>
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Mobile No.</th>
                      <th>Email Id</th>
                      <th>Pan No.</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sellers &&
                      sellers.map((x) => (
                        <tr key={x.userId}>
                          <td>{x.userId}</td>
                          <td>{x.firstName}</td>
                          <td>{x.mobile_No}</td>
                          <td>{x.email}</td>
                          <td>{x.pan}</td>
                          <td>
                            <button
                              onClick={(e) => deleteSeller(x.id)}
                              className="btn btn-danger btn-sm"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllSellers;
