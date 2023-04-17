import "./editprofileform.css";

import React, { useState, useRef } from 'react';



const EditProfileForm = () => {

    return (
        
        <div className="edit-profile-form">
            <div>
                <div className="row1 margin">
                    <label>Name:</label>
                    <input type="text" />
                </div>
            </div>
            <div>
                <div className="row1 margin">
                    <label>Email:</label>
                    <input type="email" />
                </div>
            </div>
            <div>
                <div className="row1 margin">
                    <label>Age:</label>
                    <input type="number" />
                </div>
                <div><button className="save">Save</button></div>
            </div>
        </div>
    );
};

export default EditProfileForm;
