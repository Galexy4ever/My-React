import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { List, ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import React, { useState, useEffect } from 'react';
import { AUTHOR } from './common';

const ControlPanel = () => {
    const [messages, setMessages] =
        useState([],

        )

    const [userName, setNames] = useState()
    const [userMessage, setUserMessages] = useState()

    const addMessage = (e) => {
        console.log(e)

        if (e.key === 'Enter' || e.type === 'click') {

            const newMessage = {
                id: Date.now(),
                userName,
                userMessage
            }
            console.log(newMessage)


            setMessages([...messages, newMessage])
            setNames('')
            setUserMessages('')
        }
    }

    useEffect(() => {

        setTimeout(() => {


            if (messages[messages.length - 1].userName === AUTHOR.me) {
                console.log(messages[messages.length - 1].userName)

                const newMessage = {
                    id: Date.now(),
                    userName: 'Bot',
                    userMessage: 'Привет!'
                }
                setMessages([...messages, newMessage])


            }

        }, 1500);
    }, [messages])

    return (
    <div>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color: 'text.primary' }}>
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
        </List>
        
        <TextField id="margin-normal" margin="normal" label="Введите имя"


        type="text"
        value={userName}
        onChange={
        event => setNames(event.target.value)}
        onKeyPress={addMessage}>

        </TextField>


        <TextField id="margin-normal" margin="normal" label="Введите cообщение" variant="outlined"
        placeholder="Введите cообщение"
        type="text"
        value={userMessage}
        onChange={
            event => setUserMessages(event.target.value)}
        onKeyPress={addMessage}>

        </TextField>        

        <Button size="medium" variant="outlined" id="userButton" className="userButton" onClick={addMessage}>Добавить сообщение
        </Button>
        <br />
    </div>
    )
}

export default ControlPanel

