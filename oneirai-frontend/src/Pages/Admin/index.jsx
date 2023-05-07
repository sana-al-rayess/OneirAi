import React, { useState } from "react";
import AdminNav from "../../components/AdminNav";
import AdminSideLeft from "../../components/AdminSideLeft";
import ErrorPage from "../../components/ErrorPage";

const Admin = () => {
  const type = localStorage.getItem("type");
  return (
    <div className="body3">
      {type === "admin" ? (
        <div className="box-admin">
          <div>
            <AdminNav />
          </div>
          <div className="admin-left">
            <AdminSideLeft />
          </div>
        </div>
      ) : (
        <ErrorPage />
      )}
    </div>
  );
};

export default Admin;
