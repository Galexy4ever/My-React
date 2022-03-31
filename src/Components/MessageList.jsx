import React, { useEffect } from "react";



const MessageList = ({ props, title }) => {


    return (
        <>
            <div>
                <h1 id="title" className="title">{title}</h1>
                <div className="messageList">
                    {
                        props.map((post, name) => (
                            <h2 key={post.id}>Имя: {post.userName} <br />  Сообщение: {post.userMessage}<hr /></h2>
                            // <h1 key={post.id}>{post.userMessage}</h1>

                        )
                        )
                    }
                </div>
            </div>
        </>
    )

}

export default MessageList