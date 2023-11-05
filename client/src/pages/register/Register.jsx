import "../register/register.css"
import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="register">
        <pan className="registerTitle" >Register</pan>
        
        <form  className="registerForm">

        <label> Username </label>
            <input type="text" className="registerInput" placeholder="Chose your Username "/>

            <label> Email </label>
            <input type="text" className="registerInput" placeholder="Enter your email... "/>

            <label> Password </label>
            <input type="text" className="registerInput" placeholder="Enter your password... "/>

            <button className="registerButton"> Register </button>
            

        </form>

        <button className="registerLoginButton"> 
        <Link className="link" to="/login"> Login  </Link>
        </button>
        
    </div>
  )
}
