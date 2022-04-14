export const ADD_MESSAGE = 'MESSAGE::ADDMESSAGE'

export const addMessage = (chatId, message) => ({
    type: ADD_MESSAGE,
    payload: { chatId, message}

})