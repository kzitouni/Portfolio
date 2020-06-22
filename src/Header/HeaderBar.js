import React, {useState, useEffect} from "react";
import { FiHexagon } from "react-icons/fi";
import "animate.css/animate.min.css";
import { HamburgerSqueeze } from 'react-animated-burgers'


const HeaderBar = () => {
  var prevScrollpos = window.pageYOffset;

  const [IsTop, setIsTop] = useState(true)
  const [OpenHam, setOpenHam] = useState(false)
  const [PageWidth, setPageWidth] = useState(Math.max(document.documentElement.clientWidth, window.innerWidth || 0))
  
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
  if (currentScrollPos <= 500 && !OpenHam) {
    setIsTop(true)
    document.getElementById("navbar").style.boxShadow =
    "0px 0px 2px rgba(0, 0, 0, 0.5)";
  } 
  else {
    document.getElementById("navbar").style.boxShadow = "unset";
  }
  if (prevScrollpos > currentScrollPos && OpenHam == false) {
    document.getElementById("navbar").style.top = "0"; 
  } 
  else if(currentScrollPos > prevScrollpos && OpenHam == false){
    document.getElementById("navbar").style.top = "-17vh";
  }
  prevScrollpos = currentScrollPos;
};
const OpenMenu = () => {
  if(OpenHam) return setOpenHam(false)
  else return setOpenHam(true)
}
useEffect(() => {
  function handleResize() {
    setPageWidth(window.innerWidth)
    if(PageWidth >= 730 && OpenHam) {
      setOpenHam(false)
      document.getElementsByTagName("body")[0].style.overflowY = "unset"
    }
  }
  window.addEventListener('resize', handleResize)

  return _ => {
    window.removeEventListener('resize', handleResize)
  }
})
useEffect(() => {
  if(PageWidth < 730 && OpenHam) {
    document.getElementsByTagName("body")[0].style.overflowY = "hidden"
  } else {
    document.getElementsByTagName("body")[0].style.overflowY = "unset"
  }
},[OpenHam])
const OpenMenuStyle = {transform: "translateX(0%)", display: "flex"}


  return (
    <div id="navbar" className="Header_Top_Cont">
      <div className="Logo_Cont" style={{ height: "unset", marginLeft: '7vw' }}>
        <FiHexagon className="Header_Hex" strokeWidth={1}></FiHexagon>
        <h1 className="Header_Initial_Hex">K</h1>
      </div>
      <ul className="Header_Sections_Cont">
      <HamburgerSqueeze className = "Hamburger" isActive={OpenHam} toggleButton={() => {OpenMenu()}} buttonColor="transparent" barColor={'#ccd6f6'} />
        <div className="DropDown_Cont" style = {OpenHam ? OpenMenuStyle : null}> 
          <li className="DropDown">
            <a onClick={() => setOpenHam(false)} href="#About">About</a>
          </li>
          <li className="DropDown">
            <a onClick={() => setOpenHam(false)} href="#Projects">Projects</a>
          </li>
          <li className="DropDown">
            <a onClick={() => setOpenHam(false)} href="#Contact">Contact Me</a>
          </li>
        </div>
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
