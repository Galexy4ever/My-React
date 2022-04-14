import { ListItem,ListItemText,Avatar,Divider,ListItemAvatar,Typography, List } from '@mui/material';
// import {MessageIcon,AndroidIcon} from '@mui/icons-material';
import AndroidIcon from '@mui/icons-material/Android'
import MessageIcon from '@mui/icons-material/Message'
import { useParams } from 'react-router-dom';
import ControlPanel from "../Components/ControlPanel"
import { AUTHOR } from './common';
import { useSelector } from 'react-redux';


const AllMessages = ({chats}) => {
    let {chatId} = useParams()
    const { name } = useSelector((state) => state)

    if (!chats[chatId]) return null;

    const messages = chats[chatId].messages

    const ifBot = (autor) => {
        return autor === AUTHOR.bot
    }

    return (
        <>
        
        <div>
            {
                messages.map((post, index) => (
                    
                    <ListItem key={index}>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" >
           {ifBot(post.author) ? (<AndroidIcon />) : (<MessageIcon />)}
            
          </Avatar>
          
        </ListItemAvatar>
        
        <ListItemText
        
          primary={ifBot(post.author) ? AUTHOR.bot : name}
          secondary={
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
               {post.text}
              </Typography> 
          }
        />
      </ListItem>
      
      </List>  
        <Divider variant="inset" component="li" />
        </ListItem>                   
                )
                )               
            } 
    <ControlPanel /> 
        </div>
        
        </>
    )
}

export default AllMessages