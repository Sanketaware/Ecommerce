import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ImageCarousel from "../components/ImageCarousel";
import ProductCard from "../components/ProductCard";
import { Helmet } from "react-helmet";
const Home = () => {
  const images = [
    "images/slider.jpeg",
    "images/ethnic1.jpg",
    "images/mode4.jpg",
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
      </Helmet>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="main-video-banner  position-relative p-0">
                <div className="img-fluid">
                  <ImageCarousel images={images} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-banner position-relative p-0">
                <img
                  src="images/model1.webp"
                  className="img-fluid rounded-3"
                  alt="brands 1"
                ></img>
                <div className="main-banner-content position-absolute">
                  <h4>Special Sale</h4>
                  <h2>Something here</h2>
                  <p>Grab you favorite brands</p>
                  <Link className="button">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                <div className="main-banner position-relative p-0">
                  <img
                    src="images/model1.webp"
                    className="img-fluid rounded-3"
                    alt="brands 1"
                  ></img>
                  <div className="main-banner-content position-absolute">
                    <h4>Special Sale</h4>
                    <h2>Something here</h2>
                    <p>Grab you favorite brands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-15">
                  <img
                    style={{ width: 40, height: 40 }}
                    src="images/truck.svg"
                    alt="services"
                  ></img>
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0">From all order over 1000.Rs</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    style={{ width: 40, height: 40 }}
                    src="images/gift.svg"
                    alt="services"
                  ></img>
                  <div>
                    <h6>Daily surprise offers</h6>
                    <p className="mb-0">Save upto 25% off</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    style={{ width: 40, height: 40 }}
                    src="images/headset.svg"
                    alt="services"
                  ></img>
                  <div>
                    <h6> Support 24/7</h6>
                    <p className="mb-0"> Shop with an expert</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    style={{ width: 40, height: 40 }}
                    src="images/percent.svg"
                    alt="services"
                  ></img>
                  <div>
                    <h6>Affordable prices</h6>
                    <p className="mb-0"> Get factory retail price</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-15">
                  <img
                    style={{ width: 40, height: 40 }}
                    src="images/credit-card.svg"
                    alt="services"
                  ></img>
                  <div>
                    <h6>Secure Payments</h6>
                    <p className="mb-0">100% Protected payment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="categories d-flex flex-wrap justify-content-between align-items-center">
                <div className="d-flex gap-30 align-items-center">
                  <img
                    className="categories-image"
                    src="images/categories/ethnic.png"
                    alt="category "
                  ></img>
                  <div>
                    <h6>Ethnic Wear</h6>
                    <p></p>
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <img
                    className="categories-image"
                    src="images/categories/lehenga.png"
                    alt="category "
                  ></img>
                  <div>
                    <h6>Bridal Collection</h6>
                    <p></p>
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <img
                    className="categories-image"
                    src="images/categories/dress.png"
                    alt="category "
                  ></img>
                  <div>
                    <h6>Dresses</h6>
                    <p></p>
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <img
                    className="categories-image"
                    src="images/categories/pants.png"
                    alt="category "
                  ></img>
                  <div>
                    <h6>Trousers</h6>
                    <p></p>
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <img
                    className="categories-image"
                    src="images/categories/sneakers.png"
                    alt="category "
                  ></img>
                  <div>
                    <h6>Sneakers</h6>
                    <p></p>
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <img
                    className="categories-image"
                    src="images/categories/handbags.png"
                    alt="category "
                  ></img>
                  <div>
                    <h6>Handbags</h6>
                    <p></p>
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <img
                    className="categories-image"
                    src="images/categories/jackets.png"
                    alt="category "
                  ></img>
                  <div>
                    <h6>Jackets</h6>
                    <p></p>
                  </div>
                </div>
                <div className="d-flex gap-30 align-items-center">
                  <img
                    className="categories-image"
                    src="images/categories/heels.png"
                    alt="category "
                  ></img>
                  <div>
                    <h6>Heels</h6>
                    <p></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="famous-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="images/model2.jpg"
                  alt="famous"
                ></img>
                <div className="famous-content position-absolute">
                  <h5>Category</h5>
                  <h6>Title Series</h6>
                  <p>Price range data</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="images/model6.webp"
                  alt="famous"
                ></img>
                <div className="famous-content position-absolute">
                  <h5>Category</h5>
                  <h6>Title Series</h6>
                  <p>Price range data</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="images/model3.jpg"
                  alt="famous"
                ></img>
                <div className="famous-content position-absolute">
                  <h5>Category</h5>
                  <h6>Title Series</h6>
                  <p>Price range data</p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="famous-card position-relative">
                <img
                  className="img-fluid"
                  src="images/model7.webp"
                  alt="famous"
                ></img>
                <div className="famous-content position-absolute">
                  <h5>Category</h5>
                  <h6>Title Series</h6>
                  <p>Price range data</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="featured-wrapper home wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                Featured Athleisure Collection
              </div>
            </div>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </div>
        </div>
      </section>
      <section className="marquee-wrapper home wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper ">
                <Marquee className="d-flex">
                  <div className="mx-4 w-25">
                    <img
                      style={{ width: 120, height: 70 }}
                      src="images/brands/levis.png"
                      alt="brand"
                    ></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      style={{ width: 120, height: 70 }}
                      src="images/brands/nike.png"
                      alt="brand"
                    ></img>
                  </div>

                  <div className="mx-4 w-25">
                    <img
                      className="brands"
                      src="images/brands/adidas.png"
                      alt="brand"
                    ></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="brands"
                      src="images/brands/unniqlo.png"
                      alt="brand"
                    ></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="brands"
                      src="images/brands/puma.png"
                      alt="brand"
                    ></img>
                  </div>
                  <div className="mx-4 w-25">
                    <img
                      className="brands"
                      src="images/brands/super.png"
                      alt="brand"
                    ></img>
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper home wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">Our Latest Blogs</div>
            </div>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
            <BlogCard></BlogCard>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
