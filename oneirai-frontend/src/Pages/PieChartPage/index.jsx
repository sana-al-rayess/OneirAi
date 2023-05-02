import DreamStatsChart from "../../components/DreamStatsChart";
import AdminNav from "../../components/AdminNav";
import ErrorPage from "../../components/ErrorPage";



const PieChartPage = () => {
    const type = localStorage.getItem("type");
    return (
        <div className="body3">
            {type === "admin" ? (
            <div className="box-admin">
                <div>
                    <AdminNav />
                </div>
                <div className="admin-left">
                    <DreamStatsChart />
                </div>
            </div>
            ) : (
                <ErrorPage />
              )}
        </div>
       

    );
};

export default PieChartPage;