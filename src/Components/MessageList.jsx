import React from "react";
import { ListItem } from '@mui/material';




const MessageList = ({ props, title }) => {


    return (
        <>

            <h1 id="title" className="title">{title}</h1>

            {
                props.map((post) => (
                    <ListItem key={post.id}>Имя: {post.userName} <br />  Сообщение: {post.userMessage}<hr /></ListItem>
                    // <h1 key={post.id}>{post.userMessage}</h1>

                )
                )
            }


        </>
    )

}

export default MessageList