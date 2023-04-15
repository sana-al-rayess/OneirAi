import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import Home from "./Pages/Home"

function App() {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
