import React from "react"
import { useParams } from "react-router-dom"
import { AUTHOR } from "../Components/common"
import AllMessages from '../Components/AllMessages'
import { useState } from "react"
import ChatList from "../Components/ChatList"




const chatList = {
    id1: {
        name: 'chat1',
        messages: [{ text: 'Massage first', author: AUTHOR.bot}]
    },
    id2: {
        name: 'chat2',
        messages: [{ text: 'Massage second', author: AUTHOR.me}]
    },
    id3: {
        name: 'chat3',
        messages: [{ text: 'Massage third', author: AUTHOR.bot}]
    }
}

const Chats = () => {
let {chatId}   = useParams()

const [chats, setChats] = useState(chatList)

if (!chats[chatId]) return null


    return (
        <div>
            <ChatList chat={chats} />
            <AllMessages messages={chats[chatId].messages} title="Сообщения" />
        </div>
    )
}

export default Chats
