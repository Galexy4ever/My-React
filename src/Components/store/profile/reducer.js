import { CHECKACTION, UPDATE_NAME } from "./actions";

const initialStore = {
    youName: true,
    name: 'Alex'
}

const profileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case CHECKACTION:
            return {
                ...state, youName: !state.youName
            }

        case UPDATE_NAME:
            console.log(action)
            return {
               ...state,
               name: action.payload 
            }
            default:
                return state
    }
}

export default profileReducer