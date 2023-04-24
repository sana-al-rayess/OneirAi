import React from "react";
import "./errorpage.css";


function ErrorPage() {
  return (
    <div className="error-container">
      <h1 className="error-h1">404 Error: Page not found</h1>
      <p className="error-p">You are not authorized to access this page.</p>
      
    </div>
  );
}

export default ErrorPage;