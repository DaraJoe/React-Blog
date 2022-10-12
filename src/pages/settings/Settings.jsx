import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Your Account</span>
        </div>
        <form className="formSettings">
            <label>Profile picture</label>
            <div className="settingsPP">
                <img src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80" />
                <label htmlFor="fileInput">
                <i className="settingsPPIcon fa-solid fa-user"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label >Username</label>
            <input type="text" placeholder="joeey" />
            <label >Email</label>
            <input type="text" placeholder="joeey@gmail.com" />
            <label >Password</label>
            <input type="password" />
            <button className="settingsButton" >Update</button>
        </form>
      </div>
      <Sidebar/>
    </div>
  );
};
