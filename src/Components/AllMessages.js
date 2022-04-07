import { ListItem } from '@mui/material';

const AllMessages = ({messages}) => {
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