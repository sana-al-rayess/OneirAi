import BarChart from "../../components/BarChart";
import AdminNav from "../../components/AdminNav";
import ErrorPage from "../../components/ErrorPage";


const BarChartPage = () => {
    const type = localStorage.getItem("type");
    return (
        <div className="body3">
            {type === "admin" ? (
            <div className="box-admin">
                <div>
                    <AdminNav />
                </div>
                <div className="admin-left">
                    <BarChart />
                </div>
            </div>
            ) : (
                <ErrorPage />
              )}
        </div>
       

    );
};

export default BarChartPage;