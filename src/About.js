import React from 'react' 

const About = () => {

    return (
        <div className="About_Cont" id="About">
            <div className="About_Title_Cont">
                <div className="About_Head_Cont">
                <hr className="About_Line" /> <h1 className="About_Title">About Me</h1><hr className="About_Line" />

                </div>
            </div>
            <div className="About_Text_Cont">
                <p className="About_Text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas posuere congue purus vel lacinia. Vivamus vel nibh vel est lacinia lobortis a vitae ipsum. Etiam non feugiat enim, egestas fermentum nisl. In egestas eros ultricies urna condimentum fringilla bibendum eget ipsum. Ut facilisis sed ante et rutrum. Donec eget aliquam est. Sed nibh nulla, pharetra at arcu nec, consequat viverra neque. Praesent aliquet lacus in luctus semper. Phasellus eget leo efficitur, accumsan odio in, rutrum magna. Nulla nec tincidunt enim, nec tempus tellus. Suspendisse aliquam in ligula vel imperdiet. Quisque tincidunt, est non ornare iaculis, lectus lectus dignissim nibh.
</p>
<div className="About_Languages_Cont">
<p className="About_Languages">Languages I'm familiar with</p>
<div style={{display:'flex'}}>
<ul>

<li className="Language_Text" ><p className="Bullet">•</p>Javascript (ES6+)</li>
<li className="Language_Text" ><p className="Bullet">•</p>React</li>
<li className="Language_Text" ><p className="Bullet">•</p>React Native</li>
<li className="Language_Text" ><p className="Bullet">•</p>Node JS</li>
</ul>
<ul>

<li className="Language_Text" ><p className="Bullet">•</p>HTML</li>
<li className="Language_Text" ><p className="Bullet">•</p>CSS & SCSS</li>
<li className="Language_Text" ><p className="Bullet">•</p>AWS Deployment</li>
<li className="Language_Text" ><p className="Bullet">•</p>NoSQL & SQL</li>

</ul>
<ul>

<li className="Language_Text" ><p className="Bullet">•</p>GraphQL</li>
<li className="Language_Text" ><p className="Bullet">•</p>Git & Agile</li>
<li className="Language_Text" ><p className="Bullet">•</p>AWS Deployment</li>
<li className="Language_Text" ><p className="Bullet">•</p>NoSQL & SQL</li>

</ul>
</div>
</div>

            </div>
        </div>
    ) 
}

export default About