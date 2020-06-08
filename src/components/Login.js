import React from "react"
import { Link } from "react-router-dom"
import './Login.css'

const Login = () => {
    return(
        <div>
            <form>
                <h1>Authentification</h1>
                <label for="login">Name :</label>
                <input name="login" type="text" placeholder="Enter your login"></input>
                <label for="pwd">Password :</label>
                <input name="pwd" type="text" placeholder="Enter your password"></input>
                <Link to="/success"><button>Sign In</button></Link>
            </form>
        </div>
    )
}

export default Login