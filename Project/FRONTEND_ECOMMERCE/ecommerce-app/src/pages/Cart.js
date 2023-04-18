import React from "react";
import { Helmet } from "react-helmet";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Cart</title>
      </Helmet>
      <section className="cart-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div defaultChecked="col-12">
              <div
                style={{ backgroundColor: "lightgrey" }}
                className="cart-header py-3 d-flex justify-content-between align-items-center"
              >
                <h4 className="cart-col-1">Product</h4>
                <h4 className="cart-col-2">Price</h4>
                <h4 className="cart-col-3"> Quantity</h4>
                <h4 className="cart-col-4">Total</h4>
              </div>
              <div className="cart-data mb-2 py-3 d-flex justify-content-between align-items-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center ">
                  <div className="w-25">
                    <img
                      className="img-fluid"
                      src="images/hoodie.jfif"
                      alt=""
                    ></img>
                  </div>
                  <div className="w-75">
                    <h5 className="title">Brand</h5>
                    <p className="Color">Title</p>
                    <p className="Color">Color</p>
                    <p className="size ">size </p>
                  </div>
                </div>
                <div className="cart-col-2">
                  <h5 className="price">9,000 .Rs</h5>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      className="form-control"
                      type="number"
                      name=""
                      min={1}
                      max={10}
                      id=""
                    ></input>
                  </div>
                  <div>
                    <AiFillDelete />
                  </div>
                </div>
                <div className="cart-col-4">
                  <h5 className="price">9,000 .Rs</h5>
                </div>
              </div>
              <div
                style={{ backgroundColor: "lightgrey" }}
                className="col-12  py-2  mt-4"
              >
                <div className="d-flex justify-content-between align-items-baseline">
                  <Link to="/our-store" className="button">
                    Continue Shopping
                  </Link>
                  <div className="d-flex flex-column align-items-end">
                    <h4>Subtotal :</h4>
                    <p>Taxes and Shipping Calculated at checkout</p>
                    <Link to="/checkout" className="button">
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
