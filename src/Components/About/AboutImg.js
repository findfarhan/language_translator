import React from 'react';
import './About.css';
import img1 from '../../assets/images/contact-1.png';
import img3 from '../../assets/images/contact-3.png';
import img4 from '../../assets/images/contact-4.png';
const AboutImg = () => {
  return (
    <>
      <div className="container ">
        <div className="contact-main-section mx-auto pb-3">
          <h1>
            Lorem ipsum dolor sit amet <br /> consectetur{' '}
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 pb-4">
            <img src={img1} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 contact-second-section">
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <br />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="contact-back-img my-5"></div>
      <div className="container py-2 ">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 contact-section3-heading ">
            <h1>Our Mission</h1>
            <h4 className="d-none d-md-block pt-2">
              Lorem ipsum dolor sit amet
            </h4>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
          <div className="col-md-6 pt-5">
            <img src={img3} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
      <div className="container py-5 ">
        <div className="row d-flex align-items-center justify-content-center flex-md-row flex-column-reverse">
          <div className="col-md-6 pt-5">
            <img src={img4} alt="" className="img-fluid" />
          </div>
          <div className="col-md-6 contact-section3-heading">
            <h4>Lorem ipsum dolor sit amet</h4>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <br />
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutImg;
