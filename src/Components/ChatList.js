// import { useParams } from "react-router-dom"
import { ListItem } from "@mui/material"

const ChatList = ({chats}) => {

    // let {chatId}   = useParams()
    return (
        <div>
            <h1>ChatList</h1>
            {Object.keys(chats).map((chat, index) => {
              <ListItem key={index}>
                {chats[chat].name}
              </ListItem>  
            })}
            
          

        </div>
    )
}


export default ChatList