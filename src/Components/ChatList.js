
import { Link, useParams } from 'react-router-dom'
import { ListItem, List, Dialog, DialogTitle, TextField} from "@mui/material"
import { ListItemText, Button } from '@mui/material';
import { IconButton } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addChat } from './store/chats/actions';
import ClearIcon from '@mui/icons-material/Clear';
import { addChatWithFB, deleteChatWithFB, initTrackerWithFB } from '../middleware/middleware';
import DeleteIcon from '@mui/icons-material/Delete'


const ChatList = () => {
    const chats = useSelector(state => state.chats.chatList)
    const [chatName, setChatName] = useState('')
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()
    const { chatId } = useParams()
    
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
        dispatch(addChatWithFB(chatName))
        setChatName()
        handleClose()
    }

    const deleteChat = (id) => {
        dispatch(deleteChatWithFB(id))
    }
    
    useEffect(() => {
        dispatch(initTrackerWithFB())
    }, [chatId])


    return (
        <div>
            <h1>ChatList</h1>
                <List>
                    {chats?.length > 0 ? chats.map((chat) => (
                    <Link to = {`/chats/${chat.id}`} key={chat.id} >
                        
                    <ListItem 
                    secondaryAction= {
                        <IconButton edge='end' aria-label='delete' onClick={() => deleteChat(chat.id)} >
                            <DeleteIcon />
                        </IconButton>
                    }>
                            <ListItemText primary =  {chat.name} />
                            <ClearIcon />
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