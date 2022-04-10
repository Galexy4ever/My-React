import { CHECKACTION } from "./actions";

const initialStore = {
    checkIn: false,
    testStatus: 'Working...'
}

const profileReducer = (state = initialStore, action) => {
    switch (action.type) {
        case CHECKACTION:
            return {
                ...state, checkIn: !state.checkIn
            }
            default:
                return state
    }
}

export default profileReducer