import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import RealEstate from "./images/Real-estate.jpg";
import ebay from "./images/ebay.jpg";
import App from "./images/Outclass.jpg";
import ScrollAnimation from "react-animate-on-scroll";

const Projects = () => {
  return (
    <div className="Projects_Cont" id="Projects">
      <div className="About_Title_Cont">
        <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
          <h1 className="About_Title">Projects</h1>
          <hr className="About_Line" />
        </ScrollAnimation>
      </div>
      <div className="ProjectCont">
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce={true}
          className="Project"
        >
          <div className="ProjectImg">
            <div>
              <img src={RealEstate} alt="Real-Estate project" />
              <a
                className="ImgOver Web"
                href="https://kz-real-estate.netlify.com/"
                target="_blank"
              />
            </div>
          </div>
          <div className="ProjectDesc">
            <a href="https://kz-real-estate.netlify.com/" target="_blank">
              Real Estate
            </a>
            <div className="TextBox">
              <p>
                A responsive real estate website that utilizes fetch calls to
                the Zillow API to return the home and surrounding homes for any
                address searched. Google maps was utilized to display the
                location of each home and an AWS server was set up to handle
                fetch calls to the Zillow API more effectively
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React - Javascript - HTML - SCSS - Zillow Api - Git</h2>
              <div>
                <a
                  href="https://github.com/kzitouni/Real_Estate_Site"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a href="https://kz-real-estate.netlify.com/" target="_blank">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce={true}
          className="Project"
        >
          <div className="ProjectImg" id="Middle_Proj">
            <div>
              <img src={App} alt="Class Project App" />
              <a
                href="https://expo.io/@kzitouni/OutClass"
                target="_blank"
                className="ImgOver Web"
              />
            </div>
          </div>
          <div className="ProjectDesc">
            <a href="https://expo.io/@kzitouni/OutClass" target="_blank">
              Outclass App
            </a>
            <div className="TextBox">
              <p>
                A production ready React Native app integrated with Stripe and
                paypal where users could buy and sell closed college classes
                from one another AWS was utilized for user authentication, No
                SQL database, and web scraping
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React Native - Javascript - Puppateer - AWS</h2>
              <div>
                <a href="https://github.com/kzitouni/Outclass" target="_blank">
                  <FaGithub />
                </a>
                <a href="https://expo.io/@kzitouni/OutClass" target="_blank">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
        <ScrollAnimation
          animateIn="fadeInUp"
          animateOnce={true}
          className="Project"
        >
          <div className="ProjectImg">
            <div>
              <img src={ebay} alt="Ebay-Redesign project" />
              <a
                className="ImgOver Web"
                href="https://kz-ebay-redesign.netlify.com/"
                target="_blank"
              />
            </div>{" "}
          </div>
          <div className="ProjectDesc">
            <a href="https://kz-ebay-redesign.netlify.com/" target="_blank">
              Ebay Redesign
            </a>
            <div className="TextBox">
              <p>
                A responsive redesigned website of Ebays utilizing the Ebay API
                to make fetch calls and retrieve unique item information.  Built on the Reactjs
                library utilizing HTML, CSS, and Javascript.
              </p>
            </div>
            <div className="ProjectBottom">
              <h2>React - Javascript - HTML - CSS - Ebay API - Git</h2>
              <div>
                <a
                  href="https://github.com/kzitouni/Ebay_Site_Redesign"
                  target="_blank"
                >
                  <FaGithub />
                </a>
                <a href="https://kz-ebay-redesign.netlify.com/" target="_blank">
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  );
};

const mid = {
  width: "unset"
};
export default Projects;
