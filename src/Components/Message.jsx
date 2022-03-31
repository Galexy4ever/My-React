import React, { useState, useEffect } from "react"
import MessageList from './MessageList'


const Message = () => {

    const [messages, setMessages] =
        useState([])

    const [userName, setNames] = useState()
    const [userMessage, setUserMessages] = useState()

    const addMessage = (e) => {
        e.preventDefault()
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

    useEffect(() => {

        setTimeout(() => {
            let postMes = '<h1 id="tag" > У Вас новое сообщение! <h1/>'
            document.getElementById('title').insertAdjacentHTML('beforeBegin', postMes);
            setTimeout(() => {
                document.getElementById('tag').remove();
            }, 1500);
        }, 1500);
    }, [messages])



    return (

        <div>
            <div className="userPage">
                <input
                    placeholder="Введите имя"
                    type="text"
                    value={userName}
                    onChange={
                        event => setNames(event.target.value)}>

                </input>
                <input
                    placeholder="Введите cообщение"
                    type="text"
                    value={userMessage}
                    onChange={
                        event => setUserMessages(event.target.value)}>

                </input>
                <button className="userButton" onClick={addMessage}>Добавить сообщение</button>
                <br />
            </div >
            <MessageList props={messages} title="Сообщения" />

        </div>
    )
}

export default Message