import { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import './LoginScreen.scss'
import { Link } from 'react-router-dom'

const LoginScreen = () => {
    
    const { login, googleLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        login(values)
    }


    return (
        <div className="login-screen">
            <div className="login">
                <h2>Login</h2>

                <form onSubmit={handleSubmit}>
                    <input
                        onChange={handleChange}
                        name="email"
                        value= {values.email}
                        type={'email'}
                        className="form-control my-2"
                        placeholder='Tu mail'
                    />
                    <input
                        onChange={handleChange} 
                        name="password"                       
                        value= {values.password}
                        type={'text'}
                        className="form-control my-2"
                        placeholder='Contraseña'
                    />    
                    <button className='btn btn-outline-primary' onClick={googleLogin}>Ingresar con google</button>
                    <Link to={"/register"}>Registrarme</Link>
                </form>
            </div>

        </div>
    )
}

export default LoginScreen