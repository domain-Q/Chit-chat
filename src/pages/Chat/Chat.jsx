import React from 'react'
import "./Chat.css"
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../Components/RightSidebar/RightSidebar'
import Chatbox from '../../Components/Chatbox/Chatbox'

function Chat() {
  return (
    <div className="chat">
      <div className="chat-container">
        <LeftSidebar/>
        <Chatbox/>
        <RightSidebar/>
      </div>
    </div>
  )
}

export default Chat