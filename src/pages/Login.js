import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast, ToastContainer } from "react-toastify"
import useAuth from "../hooks/AuthProvider"

const Login = () => {
        let navigate = useNavigate()
        let location = useLocation()
        const auth = useAuth()

        const [email, setEmail] = useState()
        const [password, setPassword] = useState()
        const [error, setError] = useState()

        let from = location.state?.from?.pathname || '/'

        const hendleEmail = (e) => {
            setEmail(e.target.value)
        }

        const hendlePassword = (e) => {
            setPassword(e.target.value)
        }

        const handleSubmit = async (e) => {
            e.preventDefault()
            setError('')

            try {
                await auth.signin({email, password}, () => {
                    setTimeout(() => navigate(from, {replace: true}), 2000)
                })
            } catch {
                toast.error('Ошибка!')
                setError(e)
                console.error(e)

            }
        }

    return <div>
        <ToastContainer />
        <form onSubmit={handleSubmit}>
        <h1>Логин</h1>
        <p>Введите почту и пароль для авторизации</p>
        <div>
            <TextField
            placeholder="Введите email"
            name="email"
            type="email"
            value={email}
            onChange={hendleEmail}
            />
        <br/>
        <br/>
            <TextField
            placeholder="Введите пароль"
            name="password"
            type="password"
            value={password}
            onChange={hendlePassword}
            />
        </div>
        <br/>
        {error && <p>{error}</p>}
        <Button variant='outlined' type="submit">Войти</Button>
        </form>
        
        </div>
}

export default Login