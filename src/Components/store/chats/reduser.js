import { ADD_CHAT, CHATS_UPDATE } from "./actions"

const initialState = {
    chatList: []
}

// const chatList = [
//     {
//         id: 'hrhr',
//         name: 'rhtrh'
//     }
// ]


const chatsReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
          return{
              ...state,
              chatList: [
                  ...state.chatList, 
                  {
                      id: `id${state.chatList.length}`,
                      name: action.payload
                  }
              ]
          } 
          case CHATS_UPDATE:
              return {
                  ...state,
                 chatList: action.chats 
              }
        
          default:
              return state
    }
}

export default chatsReduser