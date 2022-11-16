import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { links } from "./data";
import "./nav.css";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = "0px";
    }
  }, [showLinks]);
  const removeNav = () => {
    linksContainerRef.current.style.height = "0px";
  };
  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <div className="nameBtn">
            <button
              className={`${showLinks ? "nav-toggle rotate" : "nav-toggle"}`}
              onClick={toggleLinks}
            >
              <HiOutlineMenuAlt4 />
            </button>
            <h3>MENU</h3>
          </div>
          <div className="MyName not-display">
            <h2>BUSYDEV</h2>
          </div>
        </div>
        <div className="MyName display">
          <h2>BUSYDEV</h2>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a onClick={removeNav} href={url}>
                    {text}
                    <AiOutlineMail />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
