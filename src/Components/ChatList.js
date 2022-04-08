// import { useParams } from "react-router-dom"
import { Link } from "@mui/material/"
import { ListItem} from "@mui/material"
import { ListItemText } from '@mui/material';


const ChatList = ({chats}) => {

    // let {chatId}   = useParams()
    return (
        <div>
            <h1>ChatList</h1>
            
            {Object.keys(chats).map((chat, index) => (
                <Link to = {'/chats/${chat}'} key={index} >
                
              <ListItem key={index}
              >
                  <ListItemText primary =  {chats[chat].name} >
                  
              
              </ListItemText>
               
              </ListItem>  
              </Link>
            ))}
            
            
          

        </div>
    )
}


export default ChatList