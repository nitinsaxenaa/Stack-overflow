import React from 'react'
import blackicon from '../Assets/blackicon.svg'
import message from '../Assets/message.svg'
import pen from '../Assets/pen.svg'
const WidgetTags = () => {
    return (
        <div className='widget'>
            <h4>The Overflow Blog</h4>
            <div className=' right-sidebar-div-1'>
                <div className=' right-sidebar-div-2'>
                    <img src={pen} alt='pen' className = 'pen-icon'style={{ width: "18px" }} />
                    <p>The cofounder of Chef is cooking up a less painful DevOps (Ep. 584)</p>
                </div>
                <div className=' right-sidebar-div-2'>
                    <img src={pen} alt='pen' className = 'pen-icon' style={{ width: "18px" }} />
                    <p>Improving the developer experience in the energy sector</p>
                </div>
            </div>
            <h4>Featured on Meta</h4>
            <div className=' right-sidebar-div-1'>
                <div className=' right-sidebar-div-2'>
                    <img src={message} alt='message' className='message-icon' style={{ width: "18px" }} />
                    <p>Review queue workflow - Final realse...</p>
                </div>
                <div className=' right-sidebar-div-2'>
                    <img src={message} alt='message' className='message-icon' style={{ width: "18px" }} />
                    <p>Please welcome Valued Associates: #958-V2Blast #959 - SpencerG</p>
                </div>
                <div className=' right-sidebar-div-2'>
                    <img src={blackicon} alt='blackicon' className='black-icon' style={{ width: "18px" }} />
                    <p>Outdated Answers: accepted answers is now unpinned on Stack Overflow</p>
                </div>
            </div>
            <h4>Hot Meta Posts</h4>
            <div className=' right-sidebar-div-1'>
                <div className=' right-sidebar-div-2'>
                    <p style={{marginTop: "5px" , padding: "0%"}}>38</p>
                    <p> Why was this spam flag declined, yet the question marked as spam?</p>
                </div>
                <div className=' right-sidebar-div-2'>
                    <p style={{marginTop: "5px", padding: "0%"}}>20</p>
                    <p> What is the best course of action when a user has hight enough re to...</p>
                </div>
                <div className=' right-sidebar-div-2'>
                    <p style={{marginTop: "5px" , padding: "0%"}}>14</p>
                    <p> Is a link to the "How to ask " help page a useful comment?</p>
                </div>
            </div>
        </div>
    )
}

export default WidgetTags