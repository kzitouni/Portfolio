import React, {useState} from 'react'
import Opening from './Opening'
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

const Header = () => {
    const [open, setOpen] = useState(<Opening />)
    setTimeout(() => {
        setOpen( <div>
            <h1>Hi I'm John Joneses</h1>
            <h1>I'm a software engineer</h1>
    
        </div>)
    }, [2000])
return (
    <div className="Header_Cont">
       
        <div className="Title_Lines_Cont">
    {/* <div className="Title_Cont"> */}
    <ScrollAnimation animateIn='fadeInDown' animateOnce='true' className="Title_Cont">
<h1 className="Title">Hi, my name is<h1 className="Title_Name">Karim Zitouni</h1></h1>
</ScrollAnimation>
<ScrollAnimation animateIn='fadeInUp' animateOnce='true'>
<h1 className="Title_Sub">I'm a software engineer based in New York.  I specialize in building high quality web-sites and web-apps with a keen attention to detail.</h1>
    <a className="Header_Button" href = "#Contact">Contact Me</a>
    </ScrollAnimation>

        </div>

    </div>
)
}

export default Header