import { ListItem,ListItemText,Avatar,Divider,ListItemAvatar,Typography, List } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android'
import MessageIcon from '@mui/icons-material/Message'
import { useParams } from 'react-router-dom';
import { AUTHOR } from './common';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

const AllMessages = () => {
    
    const myMessages = useSelector(state => state.messages.messageList)
    const { name }  = useSelector(state => state.profile)
    let {chatId} = useParams()

    if (!myMessages[chatId]) return null;

    const messages = myMessages[chatId]

    const ifBot = (author) => {
        return author === AUTHOR.bot
    }

    return (
        <>
        
        <div>
        <List sx={{ width: '100%', maxWidth: 360 }}>
            {
                messages.map((post) => (
                    
            <ListItem key={post.id}>            
                <ListItem alignItems="flex-start">
                      <ListItemAvatar key={post.id}>
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
            <DeleteIcon />
            </ListItem>
      
        
              <Divider variant="inset" component="li" />
              </ListItem>                   
                      )
                      )               
                  } 
            </List>
    
        </div>
        
        </>
    )
}

export default AllMessages