import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"
import profileIMG from "../../components/images/ProfileIMG.JPG"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle"> Update Account </span>
                <span className="settingsDeleteTitle"> Delere Account </span>
            </div>

            <form action="" className="settingsForm">
                <label > Profile Picture </label>
                
                <div className="settingsPP">
                    <img 
                        src={profileIMG}
                        alt="My Profile Picture"
                    
                    />
                    <label htmlFor="fileInput"> 
                        <i className="settingsPPIcon far fa-user-circle"></i>
                    
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>

                </div>

                <label>Username</label>
                <input type="text" placeholder="Szafak" />

                <label>Email</label>
                <input type="email" placeholder="Szafak@email.com" />

                <label>Password</label>
                <input type="text" placeholder="create password" />

                <button className="settingsSubmitButton"> Update </button>

            </form>


        </div>
        <Sidebar/>





    </div>
  )
}
