
import { Link } from 'react-router-dom'
import { ListItem, List} from "@mui/material"
import { ListItemText, IconButton } from '@mui/material';



const ChatList = ({chats}) => {

  
    return (
        <div>
            <h1>ChatList</h1>
                <List>
                    {Object.keys(chats).map((chat, index) => (
                    <Link to = {`/chats/${chat}`} key={index} >
                        
                    <ListItem key={index}
                    secondaryAction= {
                        <IconButton edge='end' aria-label='delete' >
                            
                        </IconButton>
                    }>
                            <ListItemText primary =  {chats[chat].name} />
                
                    </ListItem>  
                    </Link>
                    ))}
                </List>
        </div>
    )
}


export default ChatList