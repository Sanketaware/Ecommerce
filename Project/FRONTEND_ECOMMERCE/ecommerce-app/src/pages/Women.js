import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
const Women = () => {
  const [grid, setGrid] = useState(4);

  return (
    <>
      <Meta title={"Women's Store"} />
      <BreadCrumb title="Women's"></BreadCrumb>
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Shirts</li>
                    <li>Jackets</li>
                    <li>Shoes</li>
                    <li>Watches</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title ">BRAND</h5>
                  <div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" for="">
                        Levis
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" for="">
                        Nike
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" for="">
                        Puma
                      </label>
                    </div>
                  </div>
                </div>
                <h5 className="sub-title ">PRICE</h5>
                <div className="d-flex align-items-center gap-10">
                  <div className="form-floating ">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="From"
                    />
                    <label htmlFor="floatingInput">From</label>
                  </div>
                  <div className="form-floating ">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      placeholder="To"
                    />
                    <label htmlFor="floatingInput">To</label>
                  </div>
                </div>
                <h5 className="sub-title ">COLOR</h5>
                <div className="d-flex flex-wrap ">
                  <ul className="colors">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li> <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li> <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li> <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
                <h5 className="sub-title ">Size</h5>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-1"
                    />
                    <label className="form-check-label" for="color-1">
                      S (23 )
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-2"
                    />
                    <label className="form-check-label" for="color-2">
                      M (84 )
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="color-3"
                    />
                    <label className="form-check-label" for="color-3">
                      L (35)
                    </label>
                  </div>
                </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Products Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center  gap-10">
                    <span className="badge bg-light text-secondary py-2 px-3 rounded-3">
                      Kurtas
                    </span>
                    <span className="badge bg-light text-secondary py-2 px-3 rounded-3">
                      Trousers
                    </span>
                    <span className="badge bg-light text-secondary py-2 px-3 rounded-3">
                      Watches
                    </span>
                    <span className="badge bg-light text-secondary py-2 px-3 rounded-3">
                      Shoes
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">IF NEEDED MORE</h3>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0">SORT BY :</p>
                    <select name="" className="form-control form-select" id="">
                      <option value="title-ascending">
                        Alphabetically , A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically , Z-A
                      </option>
                      <option value="recommended">Recommended</option>
                      <option value="popuartiy">Popularity</option>
                      <option value="price-ascending">
                        Price, Low to High
                      </option>
                      <option value="price-descending">
                        Price, High to Low
                      </option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-15 ">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex flex-wrap gap-10 align-items-center">
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/grid.svg"
                        className="d-block img-fluid "
                        alt="grid"
                      ></img>
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/grid2.svg"
                        className="d-block img-fluid "
                        alt="grid"
                      ></img>
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/grid3.svg"
                        className="d-block img-fluid "
                        alt="grid"
                      ></img>
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/grid1.svg"
                        className=" d-block img-fluid"
                        alt="grid"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex flex-wrap gap-10">
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Women;
