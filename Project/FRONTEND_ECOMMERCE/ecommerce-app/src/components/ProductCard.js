import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCard = (props) => {
  const { grid } = props;
  let location = useLocation();
  console.log(location);
  return (
    <>
      <div
        className={`${location.pathname == "/men" ? `gr-${grid}` : "col-3"}`}
      >
        <Link to="/product/:id" className="product-card position-relative">
          <div className="wishlist-icon position-absolute">
            <Link>
              <img src="images/heart 1.svg" alt="wishlst"></img>
            </Link>
          </div>
          <div className="product-image">
            <img
              className="img-fluid"
              src="images/hoodie.jfif"
              alt="product-pic"
            ></img>
            <img
              className="img-fluid"
              src="images/disha.jpg"
              alt="product-pic"
            ></img>
          </div>
          <div className="product-details">
            <h6 className="brand">Brand</h6>
            <h5 className="product-title">Product title to be entered here</h5>
            <ReactStars count={5} size={24} value="3" activeColor="#ffd700" />
            <p className="description">
              Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit..." "There is no one who loves pain
              itself, who seeks after it and wants to have it, simply because it
              is pain...
            </p>
            <p className="price">89,000 rs </p>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-15 ">
              <Link>
                <img src="images/eye.svg" alt="wishlst"></img>
              </Link>
              <Link>
                <img src="images/bag.svg" alt="wishlst"></img>
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
