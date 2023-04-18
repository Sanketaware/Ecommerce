import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import productvalidation from "../productvalidation";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import axios from "axios";
import { Link } from "react-router-dom";
const AddProduct = () => {
  const sellerid = sessionStorage.getItem("id");
  const sellername = sessionStorage.getItem("uname");
  const [product, setProduct] = useState({
    productName: "",
    brand: "",
    category: "",
    subCategory: "",
    description: "",
    price: "",
    sellerName: sellername,
    sellerId: sellerid,
  });
  const [errors, setErrors] = useState({});
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const history = useNavigate();
  const token = sessionStorage.getItem("accessToken");
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const handleInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleFileInput = (e) => {
    setSelectedPhoto(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(productvalidation(product));
    setSubmitted(true);
  };

  useEffect(() => {
    console.log(errors);
    if (Object.keys(errors).length === 0 && submitted) {
      const formData = new FormData();
      formData.append("image", selectedPhoto);
      formData.append("productName", product.productName);
      formData.append("brand", product.brand);
      formData.append("price", product.price);
      formData.append("category", product.category);
      formData.append("subCategory", product.subCategory);
      formData.append("sellerId", 1);
      formData.append("sellerName", sellername);
      formData.append("description", product.description);

      console.log(product);
      axios
        .post("http://localhost:8080/ecomm/products/save", formData)
        .then((resp) => {
          let result = resp.data.data;
          console.log(result);
          alert("Product saved successfully");
          history.push("/seller-dashboard");
        })
        .catch((error) => {
          console.log("Error", error);
          alert("Error saving product");
        });
    }
  }, [errors]);
  return (
    <>
      <Meta title={"Seller Dashboard / Add Product"} />
      <BreadCrumb title="Seller Dashboard / Add Product"></BreadCrumb>
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
                    <li>Products</li>
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
              <div className="auth-card">
                <h3 className="text-center mb-3">Add New Product</h3>
                <form
                  onSubmit={handleSubmit}
                  className="d-flex flex-column gap-15"
                >
                  <div>
                    <input
                      value={product.productName}
                      onChange={handleInput}
                      type="text"
                      name="productName"
                      placeholder="Product Name"
                      className="form-control"
                    ></input>
                    {errors.productName && (
                      <small className="text-danger float-right">
                        {errors.productName}
                      </small>
                    )}
                  </div>
                  <div>
                    <input
                      value={product.brand}
                      onChange={handleInput}
                      type="text"
                      name="brand"
                      placeholder="Brand Name"
                      className="form-control"
                    ></input>
                    {errors.brand && (
                      <small className="text-danger float-right">
                        {errors.brand}
                      </small>
                    )}
                  </div>
                  <div className="mt-1">
                    <input
                      value={product.category}
                      onChange={handleInput}
                      type="text"
                      name="category"
                      placeholder="Category"
                      className="form-control"
                    ></input>
                    {errors.category && (
                      <small className="text-danger float-right">
                        {errors.category}
                      </small>
                    )}
                  </div>
                  <div className="mt-1">
                    <input
                      value={product.subCategory}
                      onChange={handleInput}
                      type="text"
                      name="subCategory"
                      placeholder="subCategory"
                      className="form-control"
                    ></input>{" "}
                    {errors.subCategory && (
                      <small className="text-danger float-right">
                        {errors.subCategory}
                      </small>
                    )}
                  </div>
                  <div className="mt-1">
                    <input
                      value={product.price}
                      onChange={handleInput}
                      type="text"
                      maxLength="6"
                      name="price"
                      placeholder="price"
                      className="form-control"
                    ></input>
                    {errors.price && (
                      <small className="text-danger float-right">
                        {errors.price}
                      </small>
                    )}
                  </div>
                  <div className="mt-1">
                    <input
                      value={product.description}
                      onChange={handleInput}
                      type="text"
                      name="description"
                      placeholder="Dsescription"
                      className="form-control"
                    ></input>
                    {errors.description && (
                      <small className="text-danger float-right">
                        {errors.description}
                      </small>
                    )}
                  </div>
                  <div className="form-group form-row">
                    <label className="col-sm-4 form-control-label">Photo</label>
                    <div className="col-sm-8">
                      <input
                        type="file"
                        required
                        name="photo"
                        value={product.photo}
                        onChange={handleFileInput}
                        className="form-control-file"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Register</button>
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

export default AddProduct;
