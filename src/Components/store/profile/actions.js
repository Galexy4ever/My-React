export const CHECKACTION = 'CHECKACTION'
export const UPDATE_NAME = 'UPDATE_NAME'

export const changeCheck = {
    type: CHECKACTION
}

export const updateName = (userName) => ({
    type: UPDATE_NAME,
    payload: userName
})