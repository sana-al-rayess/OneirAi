import SideNav from "../../components/SideNav";

import UserProfile from "../../components/UserProfile";
import ErrorPage from "../../components/ErrorPage";

const Profile = () => {

  const token = localStorage.getItem("token");


  return (
    <div className="body2">
      {token ? (
        <div className="box">
          <div className="side-nav">
            <SideNav />
          </div>
          <div className="page-left">
            <UserProfile />
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>

  );
};

export default Profile;
