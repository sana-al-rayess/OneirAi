import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Landing from "./Pages/Landing";
import UserDashboard from "./Pages/UserDashboard";
import Profile from "./Pages/Profile";
import Patterns from "./Pages/Patterns";

import ErrorPage from "./components/ErrorPage";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/login" element={<LoginPage />} />
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
