import React, {useState} from 'react'
import Opening from './Opening'
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
    <div className="Title_Cont">
<h1 className="Title">Hi, my name is<h1 className="Title_Name"> John Joneses</h1></h1>
    {/* <h1 className="Title_Name"> John Joneses</h1> */}
    </div>
<h1 className="Title_Sub">I'm a software engineer based in bla bla bla i am a  bla bla bla ya know what i mean</h1>
<div className="Button_Cont">
    <button className="Header_Button">Contact Me</button>
    </div>
        </div>

    </div>
)
}

export default Header