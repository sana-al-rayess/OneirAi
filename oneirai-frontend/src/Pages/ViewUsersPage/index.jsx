import UserTable from "../../components/UserTable";
import AdminNav from "../../components/AdminNav";



const ViewUsersPage = () => {
    return (
        <div className="body3">
            <div className="box-admin">
                <div>
                    <AdminNav />
                </div>
                <div className="admin-left">
                    <UserTable/>
                </div>
            </div>
        </div>
       
    );
};

export default ViewUsersPage;