import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const About = () => {
  return (
    <div className="About_Cont" id="About">
      <div className="About_Title_Cont">
        <div className="About_Head_Cont">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <h1 className="About_Title">About Me</h1>
            <hr className="About_Line" />
          </ScrollAnimation>
        </div>
      </div>
      <div className="About_Text_Cont">
        <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
          <p className="About_Text">
            I'm a software engineer based in New York. I am passionate about
            building remarkable websites and web apps that provide an
            exceptional user interface.
            I'm a people person and have worked well in various team enviornments and excel in communicating and being a team player.
            I'm interested in the entire front end spectrum and am
            always looking for ambitious projects to tackle on and demonstrate my exceptional skills.
          </p>
        </ScrollAnimation>

        <div className="About_Languages_Cont">
          <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
            <p className="About_Languages">Skills</p>
          </ScrollAnimation>
          <div className="Language_Cont_Flex">
            <div>
              <ul>
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                  <li className="Language_Text">
                    <p className="Bullet">•</p>Javascript (ES6+)
                  </li>
                  <li className="Language_Text">
                    <p className="Bullet">•</p>React
                  </li>
                  <li className="Language_Text">
                    <p className="Bullet">•</p>React Native
                  </li>
                  <li className="Language_Text">
                    <p className="Bullet">•</p>Node JS
                  </li>
                </ScrollAnimation>
              </ul>

              <ul className="Language_Column1">
                <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                  <li className="Language_Text">
                    <p className="Bullet">•</p>HTML & S(CSS)
                  </li>
                  <li className="Language_Text">
                    <p className="Bullet">•</p>AWS Deployment
                  </li>
                  <li className="Language_Text">
                    <p className="Bullet">•</p>NoSQL & SQL
                  </li>
                  <li className="Language_Text">
                    <p className="Bullet">•</p>GraphQL
                  </li>
                </ScrollAnimation>
              </ul>
            </div>

            <ul className="Language_Column2">
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <li className="Language_Text">
                  <p className="Bullet">•</p>Git & Agile
                </li>
                <li className="Language_Text" >
                  <p className="Bullet">•</p>Responsive Design
                </li>
                <li className="Language_Text" >
                  <p className="Bullet">•</p>Python
                </li>
              </ScrollAnimation>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
