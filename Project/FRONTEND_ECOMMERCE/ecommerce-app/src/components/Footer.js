import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsLinkedin, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <div className="footer-top-data d-flex gap-30 align-items-center ">
                <img
                  style={{ height: 30, width: 30 }}
                  src="images/return-bag.svg"
                  alt=""
                ></img>
                <h4 className="text-white mb-0">EASY RETURNS </h4>
              </div>
            </div>
            <div className="col-4">
              <div className="footer-top-data d-flex gap-30 align-items-center ">
                <img
                  style={{ height: 30, width: 30 }}
                  src="images/icons8-trust.svg"
                  alt=""
                ></img>
                <h4 className="text-white mb-0">100% HANDPICKED </h4>
              </div>
            </div>
            <div className="col-4">
              <div className="footer-top-data d-flex gap-30 align-items-center ">
                <img
                  style={{ height: 30, width: 30 }}
                  src="images/return-bag.svg"
                  alt=""
                ></img>
                <h4 className="text-white mb-0">QUALITY ASSURED </h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white mb-4">Conatct Us</h4>
              <div>
                <address className="text-white fs-6">
                  Hinjawadi - Kasarsai Rd, Phase 2, Hinjewadi Rajiv Gandhi
                  Infotech Park, Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057
                </address>
                <a
                  href="tel: +91 8798234148"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 8798234148
                </a>
                <a
                  href="mailto: sunbeaminfotech@gmail.com"
                  className="mt-2 d-block mb-0 text-white"
                >
                  sunbeaminfotech@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30 mt-3 ">
                  <a className="text-white" href="">
                    <BsLinkedin className="" fs-4 />
                  </a>
                  <a className="text-white" href="">
                    <BsInstagram className="" fs-4 />
                  </a>
                  <a className="text-white" href="">
                    <BsGithub className="" fs-4 />
                  </a>
                  <a className="text-white" href="">
                    <BsYoutube className="" fs-4 />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Information</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                <Link className="text-white py-2 mb-1">Terms Of Service</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4"> Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">Sneakers</Link>
                <Link className="text-white py-2 mb-1">Jackets</Link>
                <Link className="text-white py-2 mb-1">Ethnic Wear</Link>
                <Link className="text-white py-2 mb-1">Accessories</Link>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">Account</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">Faq</Link>
                <Link className="text-white py-2 mb-1">Contact</Link>
                <Link className="text-white py-2 mb-1">Follow Us</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy;{new Date().getFullYear()};PG-DAC Project @Developed By
                Sanket Aware
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
