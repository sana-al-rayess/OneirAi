import UserTable from "../../components/UserTable";
import AdminNav from "../../components/AdminNav";
import ErrorPage from "../../components/ErrorPage";



const ViewUsersPage = () => {
    const type = localStorage.getItem("type");
    return (
        <div className="body3">
             {type === "admin" ? (
            <div className="box-admin">
                <div>
                    <AdminNav />
                </div>
                <div className="admin-left">
                    <UserTable/>
                </div>
            </div>
             ) : (
                <ErrorPage />
              )}
        </div>
       
    );
};

export default ViewUsersPage;