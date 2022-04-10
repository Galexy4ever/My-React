import { useCallback, useState } from "react"

import { changeCheck } from '../Components/store/profile/actions'
import {useDispatch,useSelector} from "react-redux"

const Profile = () => {

const {checkIn, testStatus} = useSelector((state) => state)
const dispatch = useDispatch()
const setCkickMessage = useCallback(() => {
    dispatch(changeCheck)
    
}, [dispatch])
        
    return (
        <div>
            <h1>Profile</h1>
            <input className="inputStyle" type='checkbox' onClick={setCkickMessage}></input>
            <h2 className="checkStatus" >{checkIn && testStatus}</h2>
        </div>
    )
}

export default Profile