import TopBar from "./components/topbar/TopBar.jsx";

import Homepage from "./pages/homepage/Homepage.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import Settings from "./pages/settings/Settings.jsx";

import {
  BrowserRouter as Router,
  Routes, 
  Route,
  Link
} from "react-router-dom"

// ---------- sudo user --------- 
const user = false; // false - user not logged ; true - user logged in
// ----------------------------------


const App = () => {
  return (
    <Router>
      <TopBar />

      <Routes>
        
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element= {user ? <Homepage/> :<Login />} />

        <Route path="/register" element= {user ? <Homepage/> : <Register />} />
        
        <Route path="/post/:postId" element={<Single />} />

        <Route path="/write" element={user ? <Write />  : <Register /> } />
        <Route path="/Settings" element={user ? <Settings/> : <Register />} />
              
                
      </Routes>

    </Router>

  );
}

export default App;
