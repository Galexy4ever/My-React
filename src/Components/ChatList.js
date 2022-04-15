
import { Link } from 'react-router-dom'
import { ListItem, List, Dialog, DialogTitle, TextField} from "@mui/material"
import { ListItemText, Button } from '@mui/material';
import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addChat } from './store/chats/actions';




const ChatList = () => {
    const chats = useSelector(state => state.chats.chatList)
    const [chatName, setChatName] = useState('')
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    
    const handleChatName = (e) => {
        setChatName(e.target.value)
    }

    const handleClose = () => {
        setVisible(false)
    }
    const handleAdd = () => {
        setVisible(true)
    }
    const handleSave = () => {
        dispatch(addChat(chatName))
        setChatName()
        handleClose()
    }
    



    return (
        <div>
            <h1>ChatList</h1>
                <List>
                    {chats?.length > 0 ? chats.map((chat) => (
                    <Link to = {`/chats/${chat.id}`} key={chat.id} >
                        
                    <ListItem 
                    secondaryAction= {
                        <IconButton edge='end' aria-label='delete' >
                            
                        </IconButton>
                    }>
                            <ListItemText primary =  {chat.name} />
                
                    </ListItem>                
                    </Link>
                    )) : <div>NO CHATS</div> }                   
                </List>
                <Button onClick={handleAdd}>Add Chat</Button>
                
                <Dialog open={visible} onClose={handleClose}>
                    <DialogTitle>Enter chat's name</DialogTitle>
                    <TextField
                        placeholder='Chat name'
                        value={chatName}
                        onChange= {handleChatName}
                    />
                    <Button onClick={handleSave}>Save name chat</Button>
                </Dialog>
               
                
        </div>
    )
}


export default ChatList