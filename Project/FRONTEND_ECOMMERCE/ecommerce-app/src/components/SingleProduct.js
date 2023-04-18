import React from "react";
import { Helmet } from "react-helmet";
import reactStars from "react-rating-stars-component";
const SingleProduct = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title></title>
      </Helmet>
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <img src="/images/hoodie.jfif" alt=""></img>
              </div>
              <div className="other-product-images  d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="/images/hoodie.jfif"
                    alt=""
                    className="img-fluid"
                  ></img>
                </div>
                <div>
                  <img
                    src="/images/hoodie.jfif"
                    alt=""
                    className="img-fluid"
                  ></img>
                </div>
                <div>
                  <img
                    src="/images/hoodie.jfif"
                    alt=""
                    className="img-fluid"
                  ></img>
                </div>
                <div>
                  <img
                    src="/images/hoodie.jfif"
                    alt=""
                    className="img-fluid"
                  ></img>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">Product title</h3>
                </div>
                <div className="border-bottom">
                  <p className="price"> Price 9000.Rs</p>
                  <div className="d-flex align-items-center gap-10">
                    <reactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="bg-white p-3">
                <h4>description</h4>
                <p>
                  lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but al
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="review-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
