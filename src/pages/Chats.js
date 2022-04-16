import React from "react"
import AllMessages from '../Components/AllMessages'
import ChatList from "../Components/ChatList"
import ControlPanel from "../Components/ControlPanel"


const Chats = () => {

    return (
        <>
        
       
            <ChatList />
            <div className="chats">
            <AllMessages />
           
            <ControlPanel /> 
        </div>
        </>
    )
}

export default Chats

