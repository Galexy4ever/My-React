import { ListItem } from '@mui/material';
import { useParams } from 'react-router-dom';

const AllMessages = ({chats}) => {
    let {chatId} = useParams()

    if (!chats[chatId]) return null;

    const messages = chats[chatId].messages

    return (
        <div>
            {
                messages.map((post, index) => (
                    <ListItem key={index}>Имя: {post.text} <br /> 
                     Сообщение: {post.author}
                     <hr /></ListItem>
                )
                )
            }       
        </div>
    )
}

export default AllMessages