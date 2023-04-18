import React from "react";
import { Link } from "react-router-dom";
const BlogCard = () => {
  return (
    <div className="col-3">
      <div className="Blog">
        <div className="card-image">
          <img
            className="blogs-image img-fluid"
            src="images/blogs.png"
            alt=""
          ></img>
        </div>
        <div className="blog-content">
          <p className="date">1 march 2023</p>
          <h5 className="title">Something About my Blog</h5>
          <p className="description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <Link to="/" className="button">
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
