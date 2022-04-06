import React, { useState, useEffect } from "react"
import { AUTOR } from "./common"
import MessageList from './MessageList'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { List, ListItem } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

const Message = () => {



    const [messages, setMessages] =
        useState([
            { id: 164897631820, userMessage: "ewgegw", userName: "Alex" },
            { id: 16489763182, userMessage: "ewgegw", userName: "Alex" }],
            [{ id: 1648976318, userMessage: "ewgegw", userName: "Alex" }],
            [{ id: 164897631, userMessage: "ewgegw", userName: "Ale" }],

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


            if (messages[messages.length - 1].userName === AUTOR.me) {
                console.log(messages[messages.length - 1].userName)

                const newMessage = {
                    id: Date.now(),
                    userName: 'Bot',
                    userMessage: 'Привет!'
                }
                setMessages([...messages, newMessage])


            }

            // let postMes = '<h1 id="tag" > У Вас новое сообщение! <h1/>'
            // document.getElementById('title').insertAdjacentHTML('beforeBegin', postMes);
            // setTimeout(() => {
            //     document.getElementById('tag').remove();
            // }, 1500);
        }, 1500);
    }, [messages])



    return (
        <>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
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



            <TextField id="margin-normal" margin="normal" label="Введите имя" variant="outlined"

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

            <Button size="medium" variant="outlined" id="userButton" className="userButton" onClick={addMessage}>Добавить сообщение</Button>
            <br />

            <MessageList props={messages} title="Сообщения" />


        </>
    )
}

export default Message