import profileReducer from "./profile/reducer"
import { createStore, combineReducers, applyMiddleware, compose } from "redux"
import chatsReduser from "./chats/reduser"
import messagesReduser from "./messages/reduser"
// import createSagaMiddleware from 'redux-saga'
import storage from "redux-persist/lib/storage"
import {persistStore, persistReducer} from 'redux-persist'
import thunk from "redux-thunk"
import gistsReduser from "./gists/reduser"

const composeEnhancers = window.___REDUX_DEVTOOLS_EXTENTION_COMPOSE__ || compose
const persistConfig = {
    key: 'root',
    storage
}

const reducers = combineReducers({
    profile: profileReducer,
    chats: chatsReduser,
    messages: messagesReduser,
    gists: gistsReduser
})

const persisstedReduser = persistReducer(persistConfig, reducers)


export const store = createStore(persisstedReduser,composeEnhancers(applyMiddleware(thunk)))

const persistor = persistStore(store)

export default persistor

// sagaMiddleware.run(mySaga)