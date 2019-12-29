import React from 'react'
import {FaGithub} from 'react-icons/fa'

const Projects = () => {
    return (
        <div className="About_Cont" id="Projects">
            <div className="About_Title_Cont">
            <hr className="About_Line" />
                <h1 className="About_Title" style={{minWidth: '7rem'}}>Projects</h1>
                <hr className="About_Line" />
            </div>
            <div style={{width: '100%', margin: 'auto', maxWidth: '1264px'}}>
            <div className="Project_Image">
            <div className="Dark_Overlay"></div>
            <div className="Text_Box">
                <h1>This project is a really cool project that used react javascript and other frameworks to do a fetch call to an api and get back user information</h1>
            </div>
            <h1 style={{fontSize:"20px"}}>Class Registration App</h1>
            <h1 style={{marginTop: '45%', fontSize: '15px', fontWeight: '100',}}>React Native - Javascript - Puppateer - AWS</h1>
            <FaGithub className="Github_Icon"/>
            </div>
            
            <div className="Project_Image" style={{marginLeft:'42%'}}>
                <div className="Dark_Overlay"></div>
            <div className="Text_Box" style={{marginLeft:'-67.5%'}}>
                <h1 style={{textAlign:'left'}}>This project is a really cool project that used react javascript and other frameworks to do a fetch call to an api and get back user information</h1>
            </div>
            <h1 style={{fontSize:"20px", width: 'auto', marginLeft: '-67.5%'}}>Real Estate Site</h1>
            <h1 style={{marginTop: '45%', fontSize: '15px', width: 'auto', fontWeight: '100', marginLeft: '-67.5%'}}>React - Javascript - HTML - SCSS - Git</h1>
            <FaGithub className="Github_Icon" style={{marginLeft:'-67.5%', width: 'auto'}}/>
            </div>
 
            <div className="Project_Image">
            <div className="Dark_Overlay"></div>
            <div className="Text_Box">
                <h1>This project is a really cool project that used react javascript and other frameworks to do a fetch call to an api and get back user information</h1>
            </div>
            <h1 style={{fontSize:"20px"}}>Ebay Redesign</h1>
            <h1 style={{marginTop: '45%', fontSize: '15px', fontWeight: '100',}}>React - Javascript - HTML - SCSS - Git</h1>
            <FaGithub className="Github_Icon"/>
            </div>
            </div>

        </div>
    )
}

export default Projects