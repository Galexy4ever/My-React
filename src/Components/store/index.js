import profileReducer from "./profile/reducer"
import { createStore, combineReducers } from "redux"
import chatsReduser from "./chats/reduser"
import messagesReduser from "./messages/reduser"


const reducers = combineReducers({
    profile: profileReducer,
    chats: chatsReduser,
    messages: messagesReduser
})

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())

export default store