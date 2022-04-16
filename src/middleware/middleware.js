import { AUTHOR } from "../Components/common";
import { addMessage, ADD_MESSAGE } from "../Components/store/messages/actions";

const middleware = (store) => (next) => (action) => {
    console.log("it's working!!!")
    if (action.type === ADD_MESSAGE && action.payload.message.author !== AUTHOR.bot) {
        const newMessage = {
            text: 'Привет! Я Bot from middle!',
            author: AUTHOR.bot   
        }
        setTimeout(() => store.dispatch(addMessage(action.payload.chatId, newMessage) ), 1500)
    }
    
   
    return next(action)
}



export default middleware