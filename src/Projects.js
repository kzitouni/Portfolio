import React from 'react'
import {FaGithub} from 'react-icons/fa'
import RealEstate from './RE4.jpg'
import RE1 from './image2.jpg'
import App from './7-lyft-app.png'
import ScrollAnimation from 'react-animate-on-scroll';
 
const Projects = () => {
    return (
        <div className="About_Cont" id="Projects">
            <div className="About_Title_Cont">
            <ScrollAnimation animateIn='fadeInUp' animateOnce='true'>
                <h1 className="About_Title" style={{minWidth: '7rem'}}>Projects</h1>
                <hr className="About_Line" />
                </ScrollAnimation>
            </div>
            <div style={{width: '100%', margin: 'auto', maxWidth: '1264px'}}>
            <ScrollAnimation animateIn='fadeInUp' animateOnce='true'>
            <div className="Project_Image" style={{backgroundImage:`url(${App})`}}>
            <div className="Dark_Overlay"></div>
            <div className="Text_Box">
                <h1>This project is a really cool project that used react javascript and other frameworks to do a fetch call to an api and get back user information</h1>
            </div>
            <div className="Title_Div">
            <h1 style={{fontSize:"25px", zIndex:'1'}}>Class Registration App</h1>
            </div>
            <div className="Title_Div" style={{marginTop:'14rem'}}>
            <p style={{fontSize: '15px', fontWeight: '100'}}>React Native - Javascript - Puppateer - AWS</p>
            </div>
            <FaGithub className="Github_Icon"/>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' animateOnce='true'>
            <div className="Project_Image_Middle" style={{backgroundImage:`url(${RealEstate})`}}>
                <div className="Dark_Overlay"></div>
            <div className="Text_Box_Middle" >
                <h1 style={{textAlign:'left'}}>A real estate web searcher that returns the estimated value of the houses along with specific information about the home.  Google maps was used to show the location of each home on the map. </h1>
            </div>
            <div className="Title_Div_Middle">
            <h1 style={{fontSize:"25px"}}>Real Estate Site</h1>
            </div>
            <div className="Title_Div_Middle" style={{marginTop: '14rem', fontWeight: '100'}}>
            <p style={{fontSize: '15px'}}>React - Javascript - HTML - SCSS - Git</p>
            </div>
            <FaGithub className="Github_Icon_Middle" />
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn='fadeInUp' animateOnce='true'>
            <div className="Project_Image" style={{backgroundImage: `url(${RE1})`}}>
            <div className="Dark_Overlay"></div>
            <div className="Text_Box">
                <h1>A redesign of the Ebay site with a fetch call to Ebay's API.  You can search anything and get back specific information for any item.</h1>
            </div>
            <div className="Title_Div">
            <h1 style={{fontSize:"25px"}}>Ebay Redesign</h1>
            </div>
            <div className="Title_Div" style={{marginTop: '14rem'}}>
            <p style={{fontSize: '15px', fontWeight: '100',}}>React - Javascript - HTML - SCSS - Git</p>
            </div>
            <FaGithub className="Github_Icon"/>
            </div>
            </ScrollAnimation>

            </div>

        </div>
    )
}

export default Projects