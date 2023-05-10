import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";


import LoginPage from "./Pages/LoginPage";
import Landing from "./Pages/Landing";
import UserDashboard from "./Pages/UserDashboard";
import Profile from "./Pages/Profile";


import ErrorPage from "./components/ErrorPage";

import Horoscope from "./Pages/Horoscope";
import Admin from "./Pages/Admin";
import PieChartPage from "./Pages/PieChartPage";
import BarChartPage from "./Pages/BarChartPage";
import LineChartPage from "./Pages/LineChartPage";
import PolarChartPage from "./Pages/PolarChartPage";
import ViewUsersPage from "./Pages/ViewUsersPage";
import ResetPassword from "./components/ResetPassword";
import ForgotPassword from "./components/ForgotPassword";
import SendEmail from "./components/SendEmail";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/SendEmail" element={<SendEmail />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/profile" element={<Profile />} />
      

        {/* <Route path="/password/reset/:token" element={<ResetPassword />} /> */}
        <Route path="/forgotpass" element={<ForgotPassword />} />
        <Route path="/reset" element={<ResetPassword />} />

        {/* <Route path="/reset/:token" component={ResetPassword} /> */}

  
        <Route path="*" element={<div>404</div>} />
        <Route path="/error" element={<ErrorPage />} />
        <Route path="/horo" element={<Horoscope />} />

        
        

        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/piechart" element={<PieChartPage />} />
        <Route path="/admin/barchart" element={<BarChartPage />} />
        <Route path="/admin/linechart" element={<LineChartPage />} />
        <Route path="/admin/polarchart" element={<PolarChartPage />} />
        <Route path="/admin/view-users" element={<ViewUsersPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
