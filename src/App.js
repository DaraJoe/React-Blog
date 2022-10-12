import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar"
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost";

function App() {
  const user = false
  return (
    <Router>
       <Topbar/>
        <Routes> 
         <Route exact path="/" element={<Home/>}/>
         
         <Route exact path="/register" element={<Register/>}
          />
       
         <Route exact path="/login" element={<Login/>}/>
         <Route exact path="/singlePost" element={<SinglePost/>}/>
         
         <Route exact path="/write" element={<Write/>}/>
         <Route exact path="/settings" element={<Settings/>}/>
         <Route exact path="/post/:postId" element={<Single/>}/>

       </Routes> 
      
    </ Router>
  );
}

export default App;
