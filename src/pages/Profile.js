import { useCallback, useState } from "react"
import { changeCheck, updateName } from '../Components/store/profile/actions'
import {useDispatch,useSelector} from "react-redux"
import { Button, TextField } from "@mui/material"

const Profile = () => {

const {youName, name} = useSelector((state) => state.profile)
const dispatch = useDispatch()
const [userName, setName] = useState(name)
const setCkickMessage = useCallback(() => {
    dispatch(changeCheck)
}, [dispatch])

const saveName = () => {
    dispatch(updateName(userName))
}

const newName = (e) => {
    setName(e.target.value)
}
        
    return (
        
        <div>
            <h1>Profile</h1>
           
            <button onClick={setCkickMessage}>Ваше имя</button>
           
            <div>{youName &&<h2>Ваше имя: {name}</h2>} </div>

            <TextField 
            name = "name"
            margin="normal" 
            label="Введите имя" 
            variant="outlined" 
            placeholder="Введите имя"
            value={userName}
            onChange={newName}/>
        <Button onClick={saveName}>Сохранить</Button>
        </div>
    )
}

export default Profile