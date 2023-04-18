import React from "react";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <div classNamel="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.670131454897!2d73.70354131487258!3d18.588904687369247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb7d0345f01f%3A0x6e8c20c647a06f47!2sSunbeam%20Infotech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1678179908989!5m2!1sen!2sin"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div classNamme="contact-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title">Contact Us</h3>
                </div>
                <div>
                  <h3 className="contact-title"> Get In touch</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
