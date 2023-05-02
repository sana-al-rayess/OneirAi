import React, { useState } from "react";
import LineChart from "../../components/LineChart";
import AdminNav from "../../components/AdminNav";
import ErrorPage from "../../components/ErrorPage";



const LineChartPage = () => {
    const type = localStorage.getItem("type");
    return (
        <div className="body3">
            {type === "admin" ? (
            <div className="box-admin">
                <div>
                    <AdminNav />
                </div>
                <div className="admin-left">
                    <LineChart />
                </div>
            </div>
              ) : (
                <ErrorPage />
              )}
        </div>
       

    );
};

export default LineChartPage;