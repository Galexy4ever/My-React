import { ADD_CHAT } from "./actions"

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
          default:
              return state
    }
}

export default chatsReduser