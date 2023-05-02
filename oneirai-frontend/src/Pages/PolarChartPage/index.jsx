import AdminNav from "../../components/AdminNav";
import PolarAreaChart from "../../components/PolarAreaChart";
import ErrorPage from "../../components/ErrorPage";


const PolarChartPage = () => {
    const type = localStorage.getItem("type");
    return (
        <div className="body3">
            {type === "admin" ? (
            <div className="box-admin">
                <div>
                    <AdminNav />
                </div>
                <div className="admin-left">
                    <PolarAreaChart />
                </div>
            </div>
             ) : (
                <ErrorPage />
              )}
        </div>
       

    );
};

export default PolarChartPage;