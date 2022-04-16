import { AUTHOR } from "../../common"

export const ADD_MESSAGE = 'MESSAGE::ADDMESSAGE'
export const ADD_MESSAGE_WITH_SAGA = 'ADD_MESSAGE_WITH_SAGA'
export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message}

})

// export const addMessageWithSaga = (chatId, message) => ({
//     type: ADD_MESSAGE_WITH_SAGA,
//     payload: { chatId, message}

// })

export const addMessageWithThurk = 

(chatId, message) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message))

    if (message.author !== AUTHOR.bot) {
        const botMessage = {
            text: 'Привет. Я THUNK!',
            author: AUTHOR.bot
        }
        setTimeout(() => dispatch(addMessage(chatId, botMessage)), 1500);
    }
}