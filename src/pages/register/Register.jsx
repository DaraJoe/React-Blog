import "./register.css"
import { Link } from "react-router-dom";
export default function Register() {
  return (
    <div className='register'>
         <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label >Email</label>
        <input type="text" className="registerInput" required placeholder="Enter your email..." />
        <label >Username</label>
        <input type="text" className="registerInput" required placeholder="Enter your username..." />
        <label >Password</label>
        <input type="password" className="registerInput" required placeholder="Enter your password..." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton">
      <Link className="link" to="/login"></Link> Login</button> 
    </div>
   
  );
};
