import React from "react";
import "./header.css";
import Identity from "../../assets/Discover.png";
import Description from "../../assets/Rounded Text.png";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import Img from "../../assets/EBEN.png";
import "animate.css";

const Header = () => {
  return (
    <>
      <header id="header">
        <div className="header-underline"></div>
        <div className="heading ">
          <h1 className="animate__animated animate__fadeInDown">
            I am Ebenezer. Web Developer
          </h1>
          <h4>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga esse
            fugiat tenetur nesciunt aliquam magni.
          </h4>
          <h4>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, est.
          </h4>
        </div>
        <div className="heading-content">
          <div className="main-heading-container">
            <div className="descriptions">
              <div className="work-rate">
                <h2>100+ clients</h2>
                <p>neat designs, work on time,exceptional works</p>
              </div>
              <div className="descriptions-img">
                <img src={Description} alt="" />
              </div>
              <h4>The assignment of a physical form to GOD.</h4>
            </div>
            <div className="photoss-section">
              <div className="img-head">
                <img src={Img} alt="profile image" />
              </div>
            </div>
            <div className="identity">
              <div className="brand-img">
                <img src={Identity} alt="brand image" />
              </div>
              <h3>Proficient In</h3>
              <div className="quote">
                <div className="languages animate__animated animate__lightSpeedInRight">
                  <div className="html">
                    <FaHtml5 />
                  </div>
                  <div className="css">
                    <IoLogoCss3 />
                  </div>
                  <div className="javascript">
                    <IoLogoJavascript />
                  </div>
                  <div className="react">
                    <FaReact />
                  </div>
                </div>
                <div className="under-line"></div>
                <h5>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Fugiat non culpa odio ipsum sequi expedita?
                </h5>
                <h4>Lorem, ipsum.</h4>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
