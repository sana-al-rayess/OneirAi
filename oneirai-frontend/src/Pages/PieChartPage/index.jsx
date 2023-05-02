import DreamStatsChart from "../../components/DreamStatsChart";
import AdminNav from "../../components/AdminNav";



const PieChartPage = () => {
    return (
        <div className="body3">
            <div className="box-admin">
                <div>
                    <AdminNav />
                </div>
                <div className="admin-left">
                    <DreamStatsChart />
                </div>
            </div>
        </div>
       

    );
};

export default PieChartPage;