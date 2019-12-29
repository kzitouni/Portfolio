import React from 'react'
import {MdMailOutline} from 'react-icons/md'

const Contact = () => {
    return (
        <div className="About_Cont" id="Contact" style={{marginTop:'8rem'}}>
        <div className="About_Title_Cont">
            <div className="About_Head_Cont" >
            <hr className="About_Line" /> <h1 className="About_Title">Contact</h1><hr className="About_Line" />

            </div>
        </div>
        <div className="About_Text_Cont">
                <p className="About_Text" style={{textAlign:'center'}}>Have a question or want to work with me?
</p>
</div>
    <button className="Contact_Button">
        <div >
            <MdMailOutline /><p>Message Me</p>
            </div> 
            </button> 
        </div>
    )
}

export default Contact