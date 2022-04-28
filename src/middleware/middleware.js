import { AUTHOR } from "../Components/common";
import { addMessage, ADD_MESSAGE,updateMessages } from "../Components/store/messages/actions";
import firebaseConfig from "../services/firebaseConfig";
import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database'
import { chatListUpdate } from "../Components/store/chats/actions";


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

export const initTrackerWithFB = () => async (dispatch) => {
    const db = getDatabase(firebaseConfig)
    const chatRef = ref(db, '/chats')
    onValue(chatRef, (snapshot) => {
        const data = snapshot.val()
        const chatIds = Object.keys(data)
        const chatArr = chatIds.map(item => ({
            id: item,
            name: data[item].name
        }))
        dispatch(chatListUpdate(chatArr))
    })
}

export const addChatWithFB = (name) => async () => {
    const db = getDatabase(firebaseConfig)
    const chatRef = ref(db, '/chats')
    const newChatRef = push(chatRef)
    set(newChatRef, {name:name}).then((res) => {
        console.log('chat added', res)
    })
    
}

export const deleteChatWithFB = (id) => async () => {
    console.log(id)
    const db = getDatabase(firebaseConfig)
    const chatRef = ref(db, `/chats${id}`)
    console.log(db)
    const messagesRef = ref(db, `/messages/${id}`)
    remove(chatRef).then((res) =>  {
        console.log('chat removed', res)
    })
    remove(messagesRef).then((res) => {
        console.log('Messages deleted', res)
    })
}

export const addMessageWithFB = (chatId, message) => async () => {
    const db = getDatabase(firebaseConfig)
    const messageRef = ref(db, `/messages/${chatId}`)
    const newMessageRef = push(messageRef)
    set(newMessageRef, message).then((res) => {
        console.log('message added', res)
    })
}

export const getMessagesByChatIdWithFB = (chatId) => async (dispatch) => {
    const db = getDatabase(firebaseConfig)

    const msgRef = ref(db, `/messages/${chatId}`)
    onValue(msgRef, (snapshot) => {
        const data = snapshot.val()
        const msg = data && Object.values(data)
        if (msg?.length > 0) {
            dispatch(updateMessages(chatId, msg))
        }
    })
}


export default middleware