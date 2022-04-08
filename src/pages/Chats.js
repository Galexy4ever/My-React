import React from "react"
import AllMessages from '../Components/AllMessages'
import ChatList from "../Components/ChatList"
import ControlPanel from "../Components/ControlPanel"






const Chats = ({chats}) => {

    








    return (
        <div>
            



    
            <ChatList chats={chats} />
            <AllMessages chats={chats} title="Сообщения" />
            <ControlPanel />
        </div>
    )
}

export default Chats

