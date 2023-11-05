import "../topbar/topbar.css";
import profileImg from "../images/ProfileIMG.JPG" // diference in code 
import { Link } from "react-router-dom";
import Homepage from "../../pages/homepage/Homepage";

export default function TopBar() {
// ---------- sudo user --------- 
const user = false; // false - user not logged ; true - user logged in
// ----------------------------------




  return (
    <div className='top' >

        <div className='topLeft'> 
            <i className="topIcon fab fa-facebook-square"></i>
            <i className="topIcon fab fa-instagram-square"></i>
            <i className="topIcon fab fa-pinterest-square"></i>
            <i className="topIcon fab fa-twitter-square"></i>
        </div>

        <div className='topCenter'> 
            <ul className="topList" >
                <li className="topListItem">  
                    <Link to={"/"} className="link"> Home </Link>
                </li>

                <li className="topListItem"> 
                <Link to={"/"} className="link"> About </Link> 
                </li>

                <li className="topListItem"> 
                <Link to={"/"} className="link"> Contact</Link> 
                </li>

                <li className="topListItem"> 
                <Link to={"/write"} className="link"> Write </Link>
                </li>

                <li className="topListItem">
                  { user && "Logout"} 
                </li>
            </ul>
        </div>

        <div className='topRight'>
            
            {user ? (
                <Link className="link" to="/settings">
                <img className="topImg" src={profileImg} alt="profile pictiure" /> 
                </Link>
            ) : (
                <ul className="topList">
                  <li className="topListItem">
                    <Link className="link" to="/login">
                      LOGIN
                    </Link>
                  </li>
                  
                  <li className="topListItem">
                    <Link className="link" to="/register">
                      REGISTER
                    </Link>
                  </li>
                </ul>
              )}
              <i className="topSearchIcon fas fa-search"></i>
            </div>
          </div>
        );
      }
