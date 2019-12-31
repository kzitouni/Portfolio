import React from 'react' 
import {FiHexagon} from 'react-icons/fi'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const HeaderBar = () => {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.top = "0";
        console.log(prevScrollpos, "prevscroll")
        console.log(currentScrollPos, "current")
      } 
      else if (currentScrollPos == 0) {
        document.getElementById("navbar").style.top = "0";
          document.getElementById('navbar').style.boxShadow = 'none'
          console.log(currentScrollPos)
      }else {
        document.getElementById("navbar").style.top = "-80px";
      } 
      prevScrollpos = currentScrollPos;
    }
    return (
        <navbar Id="navbar" className="Header_Top_Cont">
                
            <div className="Logo_Cont">
<FiHexagon className="Header_Hex" strokeWidth={1} >
</FiHexagon>
<h1 className="Header_Initial_Hex">K</h1>
    </div>
            <ul className="Header_Sections_Cont">
            <li className="Section_Text">
   <a href="#About">About</a> 
                </li> 

            <li className="Section_Text"><a href="#Projects">Projects</a></li>
            <li className="Section_Text"><a href="#Contact">Contact Me</a></li>
            </ul>

        </navbar>
    )
}

export default HeaderBar