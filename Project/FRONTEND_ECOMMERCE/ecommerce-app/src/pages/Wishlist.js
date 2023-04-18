import React from "react";
import { Helmet } from "react-helmet";
const Wishlist = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Wishlist</title>
      </Helmet>
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/x-lg.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                ></img>
                <div className="wishlist-card-image">
                  <img
                    src="images/hoodie.jfif"
                    alt="hoodie"
                    className="img-fluid w-100"
                  ></img>
                  <div className="py-3 px-3">
                    <h5 className="title">Solid Premium Hoodie</h5>
                    <h6 className="price">8,000 .Rs</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
<h1>Hello</h1>;
