import "./topbar.css"
import { Link } from "react-router-dom";

export default function 
Topbar() {
    const user =false
  return (
    <div className="top">
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-whatsapp"></i>
            <i className="topIcon fa-brands fa-instagram"></i>
            <i className="topIcon fa-brands fa-twitter"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to ="/">HOME</Link>
                </li>
                <li className="topListItem"> <Link className="link" to ="/">ABOUT</Link></li>
                <li className="topListItem"> <Link className="link" to ="/">CONTACT</Link></li>
                <li className="topListItem"> <Link className="link" to ="/write">WRITE</Link></li>
                <li className="topListItem">
                 {user && "LOGOUT"}   </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user? (
                    <img className="topImg" src="https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
            
                ):(
                    <ul className="topList">
                        <li className="topListItem">
                        <Link className="link" to="/login"> LOGIN</Link>
                        <Link className="link" to="/register"> REGISTER</Link>
           
                        </li>
                    </ul>
                        )
            }
      <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
   
    </div>
  );
};
