import React, { useState, useEffect } from "react"
import { AUTOR } from "./common"
import MessageList from './MessageList'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Message = () => {



    const [messages, setMessages] =
        useState([

        ])

    const [userName, setNames] = useState()
    const [userMessage, setUserMessages] = useState()

    const addMessage = (e) => {
        console.log(e)
        // e.preventDefault()
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


            if (messages[messages.length - 1].userName == AUTOR.me) {
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

        <div>
            <div className="userPage">
                <div className="userInput">
                    <TextField id="margin-normal" margin="normal" label="Введите имя" variant="outlined"

                        type="text"
                        value={userName}
                        onChange={
                            event => setNames(event.target.value)}
                        onKeyPress={addMessage}>

                    </TextField>
                </div>
                <div className="userInput">
                    <TextField id="margin-normal" margin="normal" label="Введите cообщение" variant="outlined"
                        placeholder="Введите cообщение"
                        type="text"
                        value={userMessage}
                        onChange={
                            event => setUserMessages(event.target.value)}
                        onKeyPress={addMessage}>

                    </TextField>
                </div>
                <Button size="medium" variant="outlined" id="userButton" className="userButton" onClick={addMessage}>Добавить сообщение</Button>
                <br />
            </div >
            <MessageList props={messages} title="Сообщения" />

        </div>
    )
}

export default Message