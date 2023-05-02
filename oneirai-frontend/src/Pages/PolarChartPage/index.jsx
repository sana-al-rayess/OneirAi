import AdminNav from "../../components/AdminNav";
import PolarAreaChart from "../../components/PolarAreaChart";



const PolarChartPage = () => {
    return (
        <div className="body3">
            <div className="box-admin">
                <div>
                    <AdminNav />
                </div>
                <div className="admin-left">
                    <PolarAreaChart />
                </div>
            </div>
        </div>
       

    );
};

export default PolarChartPage;