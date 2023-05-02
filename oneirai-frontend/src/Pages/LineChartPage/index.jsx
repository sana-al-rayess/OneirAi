import React, { useState } from "react";
import LineChart from "../../components/LineChart";
import AdminNav from "../../components/AdminNav";



const LineChartPage = () => {
    return (
        <div className="body3">
            <div className="box-admin">
                <div>
                    <AdminNav />
                </div>
                <div className="admin-left">
                    <LineChart />
                </div>
            </div>
        </div>
       

    );
};

export default LineChartPage;