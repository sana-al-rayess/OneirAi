import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Landing from "./Pages/Landing";
import UserDashboard from "./Pages/UserDashboard";
import Profile from "./Pages/Profile";
import Patterns from "./Pages/Patterns";
import Chatgpt from "./components/Chatgpt";
import ErrorPage from "./components/ErrorPage";
import DalE2 from "./components/DalE2";
import Horoscope from "./Pages/Horoscope";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/pattern" element={<Patterns />} />
  
        <Route path="*" element={<div>404</div>} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/horo" element={<Horoscope />} />

        <Route path="/chatgpt" element={<Chatgpt />} />
        <Route path="/dale2" element={<DalE2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
