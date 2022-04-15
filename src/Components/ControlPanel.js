import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import { List, ListItem } from '@mui/material';
// import IconButton from '@mui/material/IconButton';
// import CommentIcon from '@mui/icons-material/Comment';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './store/messages/actions';
import { useParams } from 'react-router-dom';

const ControlPanel = () => {
    let { chatId } = useParams()
    const [value, setValue] =
        useState([])
    const dispatch = useDispatch()
    const authorName = useSelector(state => state.profile.name)

    const hendleInput = (event) => {
       setValue(event.target.value)
    }
    const hendleAdd = (e) => {
        e.preventDefault()
        if (value !== '') {
            const newMessage = {
                text: value,
                author: authorName
            }
            console.log(newMessage)
            
            dispatch(addMessage([chatId, newMessage]))
            setValue('')
            
        }
    }

    // useEffect(() => {

    //     setTimeout(() => {
    //         if (messages[messages.length - 1].userName === authorName) {
    //              const newMessage = {
    //                 id: Date.now(),
    //                 userName: 'Bot',
    //                 userMessage: 'Привет!'
    //             }
    //             setMessages([...messages, newMessage])
    //         }

    //     }, 1500);
    // }, [messages]
    // )
    return (
    <div className='controlPanel'>
        {/* <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: 'text.primary' }}>
                {
                    messages.map((chat, userName, id) => (
                        <ListItem
                            secondaryAction={
                                <IconButton edge="end" aria-label="comments">
                                    <CommentIcon />
                                </IconButton>
                            }
                            disablePadding
                        >
                            ID: {chat.id}<br /> Имя: {chat.userName}   <hr /></ListItem>
                    )
                    )
                }
        </List> */}
        
        {/* <TextField id="margin-normal" margin="normal" label="Введите имя"


        type="text"
        value={userName}
        onChange={
        event => setNames(event.target.value)}
        onKeyPress={addMessage}>

        </TextField> */}


        <TextField id="margin-normal" margin="normal" label="Введите cообщение" variant="outlined"
        placeholder="Введите cообщение"
        type="text"
        value={value}
        onChange={hendleInput}>

        </TextField>        

        <Button size="medium" variant="outlined" id="userButton" className="userButton" onClick={hendleAdd}>Добавить сообщение
        </Button>
        <br />
        
    </div>
    )
}

export default ControlPanel

