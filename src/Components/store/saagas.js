
import {takeLatest,put,delay} from 'redux-saga/effects'
import { AUTHOR } from '../common'
import { addMessage, ADD_MESSAGE_WITH_SAGA } from './messages/actions'

function* onAddMessageWithSaga(action) {
   
 yield put(addMessage(action.payload.chaId, action.payload.message))
 if (action.payload.message.author !== AUTHOR.bot){
     const botMessage = { text: 'Привет, Лелик!', author: AUTHOR.bot}
    yield delay (2000)
    yield put(addMessage(action.payload.chaId, botMessage))
 }


}

function* mySaga() {
    yield takeLatest(ADD_MESSAGE_WITH_SAGA, onAddMessageWithSaga)
}


export default mySaga