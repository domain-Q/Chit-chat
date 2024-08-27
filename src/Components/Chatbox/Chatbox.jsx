import React from 'react'
import "./chatbox.css"
import assets from "../../assets/assets"

function Chatbox() {
  return (
    <div className='chat-box'>
      <div className="chat-user">
       <img src={assets.profile_img} alt="" />
       <p>Vishal thakur <img className='dot' src={assets.green_dot} alt="green dot" /></p>
       <img src={assets.help_icon} alt="icon" />
      </div>

      <div className="chat-mssg">
        <div className="s-mssg">
          <p className="mssg">Lorem ipsum dolor sit amet consectetur adipisicing...</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 pm</p>
          </div>
        </div>
      
        <div className="s-mssg">
          <img className='mssg-img' src={assets.pic1} alt="" />
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 pm</p>
          </div>
        </div>
        <div className="r-mssg">
          <p className="mssg">Lorem ipsum dolor sit amet consectetur adipisicing...</p>
          <div>
            <img src={assets.profile_img} alt="" />
            <p>2:30 pm</p>
          </div>
        </div>
      </div>

      <div className="chat-input">
        <input type="text" placeholder='Send amessage ' />
        <input type="file" id='image' accept='image/png, image/jpeg' hidden />
        <label htmlFor="image"><img src={assets.gallery_icon} alt="" /></label>
        <img src={assets.send_button} alt="" />
      </div>
    </div>
  )
}

export default Chatbox