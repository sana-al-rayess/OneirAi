import BarChart from "../../components/BarChart";
import AdminNav from "../../components/AdminNav";



const BarChartPage = () => {
    return (
        <div className="body3">
            <div className="box-admin">
                <div>
                    <AdminNav />
                </div>
                <div className="admin-left">
                    <BarChart />
                </div>
            </div>
        </div>
       

    );
};

export default BarChartPage;