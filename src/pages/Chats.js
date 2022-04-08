import React from "react"


import AllMessages from '../Components/AllMessages'

import ChatList from "../Components/ChatList"







const Chats = ({chats}) => {






    return (
        <div>
            <ChatList chats={chats} />
            <AllMessages messages={chats} title="Сообщения" />
        </div>
    )
}

export default Chats

