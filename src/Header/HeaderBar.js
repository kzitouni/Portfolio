import React from "react";
import { FiHexagon } from "react-icons/fi";
import "animate.css/animate.min.css";

const HeaderBar = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos <= 500) {
      document.getElementById("navbar").style.boxShadow =
        "0px 0px 2px rgba(0, 0, 0, 0.5)";
    } else {
      document.getElementById("navbar").style.boxShadow = "unset";
    }
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <div id="navbar" className="Header_Top_Cont">
      <div className="Logo_Cont" style={{ height: "unset", marginLeft: '7vw' }}>
        <FiHexagon className="Header_Hex" strokeWidth={1}></FiHexagon>
        <h1 className="Header_Initial_Hex">K</h1>
      </div>
      <ul className="Header_Sections_Cont">
        <li className="Section_Text">
          <a href="#About">About</a>
        </li>

        <li className="Section_Text">
          <a href="#Projects">Projects</a>
        </li>
        <li className="Section_Text">
          <a href="#Contact">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default HeaderBar;
