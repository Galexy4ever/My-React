import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import  Home  from "./Home"
import  Profile  from "./Profile"
import Chats from "./Chats"
import { useState } from "react"
import { AUTHOR } from "../Components/common"



const chatList = {
    id1: {
        name: 'chat1',
        messages: [{ text: 'Massage first', author: AUTHOR.bot}]
    },
    id2: {
        name: 'chat2',
        messages: [{ text: 'Massage second', author:'fdssgsv'},
        { text: 'Massage second', author: AUTHOR.bot},
        { text: 'Massage second', author: 'Alex'}]
    },
    id3: {
        name: 'chat3',
        messages: [{ text: 'Massage third', author: AUTHOR.bot}]
    }
}



const Router = () => {

    const [chats] = useState(chatList)

// const personMessage = () => {

// }

    return (
<>




    <BrowserRouter>

    
    <ul className="linkList">
    
        <li>
           <Link to='/home'>Home</Link> 
        </li>
        <li>
           <Link to='/profile'>Profile</Link> 
        </li>
        <li>
           <Link to='/chats'>Chats</Link> 
        </li>
        
    </ul>
    

   


    <Routes>
        <Route path="/home" element={<Home />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/chats/:chatId" element={<Chats chats={chats} />} />
        <Route path="*" element={<Chats chats={chats} />} />

    </Routes>

    </BrowserRouter>
    </>
    )
}

export default Router
