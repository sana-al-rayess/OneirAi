import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import UserDashboard from "./Pages/UserDashboard";
import Profile from "./Pages/Profile";
import Patterns from "./Pages/Patterns";
import Admin from "./Pages/Admin";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/user" element={<UserDashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/pattern" element={<Patterns />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
