import React from "react";
import "./errorpage.css";
import Button2 from "../Button2";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-container">
      <h1 className="error-h1">404 Error: Page not found</h1>
      <p className="error-p">You are not authorized to access this page.</p>
      <Link to="/login">
        <Button2 className="back-button">Go Back</Button2>
      </Link>
    </div>
  );
}

export default ErrorPage;