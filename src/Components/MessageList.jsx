import React from "react";
import { ListItem } from '@mui/material';




const MessageList = ({ props, title }) => {


    return (
        <div >

            <h1 id="title" className="title">{title}</h1>

            {
                props.map((post) => (
                    <ListItem key={post.id}>Имя: {post.userName} <br />  Сообщение: {post.userMessage}<hr /></ListItem>


                )
                )
            }


        </div>
    )

}

export default MessageList