import React from 'react';
import './About.css';
import AboutImg from './AboutImg';
import Client from '../Client/Client';
import FaqSection from '../FaqSection';
const About = () => {
  return (
    <>
      <div className="main-heading">
        <h1>About us</h1>
      </div>
      <AboutImg />
      <div
        className="container-fluid px-md-5"
        style={{
          marginBottom: '10px',
          paddingBottom: '60px ',
          overflowX: 'hidden',
        }}
      >
        <Client />
      </div>
      <FaqSection />
    </>
  );
};

export default About;
