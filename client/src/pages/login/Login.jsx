import "../login/login.css"
import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="login">
        <pan className="loginTitle" >Login</pan>
        
        <form  className="loginForm">

            <label> Email </label>
            <input type="text" className="loginInput" placeholder="Enter your email... "/>

            <label> Password </label>
            <input type="text" className="loginInput" placeholder="Enter your password... "/>

            <button className="loginButton"> Login </button>
            

        </form>

        <button className="loginRegisterButton">
           <Link className="link"  to="/register"> Register  </Link>
        </button>
        
    </div>
  )
}
