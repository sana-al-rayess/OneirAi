import React, { useState } from "react";
import EditDreamModal from "../../components/EditDreamModal";
import DreamStatsChart from "../../components/DreamStatsChart";
import BarChart from "../../components/BarChart";
import PolarAreaChart from "../../components/PolarAreaChart";
import LineChart from "../../components/LineChart";
import AdminNav from "../../components/AdminNav";
import AdminSideLeft from "../../components/AdminSideLeft";


const Admin = () => {
    return (
        <div className="body3">
            <div className="box-admin">
                <div>
                    <AdminNav />
                </div>
                
            </div>
        </div>
       

    );
};

export default Admin;