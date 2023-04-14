import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
     
      <Route path="/login" element={<LoginPage />} />
      <Route path="/reg" element={<RegisterPage />} />
      <Route path="*" element={<div>404</div>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
