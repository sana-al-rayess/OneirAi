import "./userprofile.css"
import EditProfileForm from "../EditProfileForm";
import React, { useState, useEffect, useRef } from 'react';
import '../../components/ProfilePhoto/ProfilePhoto.css';
import Camera from "../../images/camera.png"
import axios from "axios";
import Button2 from "../../components/Button2";
import Select from 'react-flags-select';

const UserProfile = () => {
    const today = new Date().toLocaleDateString();
    const active_user = localStorage.getItem("name");

    const [profilePic, setProfilePic] = useState(null);
    const fileInputRef = useRef(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState("");
    
    const [showPopup, setShowPopup] = useState(false);

    const [country, setCountry] = useState('');

    const handleCountryChange = (country) => {
        setCountry(country);
    };

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleAgeChange = (event) => {
        setAge(event.target.value);
    };

    const handleProfilePicChange = (event) => {
        setProfilePic(event.target.value);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfilePic(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
      
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("Age", age);
        formData.append("profile_picture", profilePic);
        formData.append("location", country);
        

        axios
            .post("http://127.0.0.1:8000/api/updateUserInfo", formData, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response.data);
                console.log("edited successfully!");

                const updatedUser = response.data.updated_user;
                localStorage.setItem("name", updatedUser.name);
                localStorage.setItem("profile_picture", updatedUser.profile_picture);
                localStorage.setItem("email", updatedUser.email);

                console.log("local storage updated");
                window.location.reload();
            })
            .catch((error) => {
                console.error(error);
                console.log("Error editing");
                setError(error.message);
                
            });
            
           
    };
    useEffect(() => {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        
        setName(name);
        setEmail(email);
      
      }, []);
      

  


    return (
        <div className="user-container">
            <div>
                <p className="greetings"> Hello, {active_user}</p>
            </div>
            <div className="date">
                <p> Today is, {today}</p>
            </div>
            <br /><br />
            <div className="row1">
                <div className="user-title">Edit Profile</div>
            </div>
            <br /><br />

            <div className="row3 profile-box">

                <div className="edit-profile-pic2">
                    {profilePic ? (
                        <img className="profile-pic2" src={profilePic} alt="Profile" />
                    ) : (
                        <div className="empty-profile-pic2">

                            <img src={Camera} alt='camera' />
                        </div>
                    )}
                    <input type="file" accept="image/*" onChange={handleFileUpload} style={{ display: 'none' }} ref={fileInputRef} />
                    <div className="circular-border" onClick={() => fileInputRef.current.click()}>

                    </div>
                </div>


                <div className="div2">
                    <div className="edit-profile-form">
                        <div>
                            <div className="label-input-prof margin">
                                <label>Name:</label>
                                <input type="text" id="name-input" value={name}  onChange={handleNameChange} />
                                {error && <div className="error-name" >Name can't be empty</div>}
                                
                            </div>
                        </div>
                        <div>
                            <div className="label-input-prof margin">
                                <label>Email:</label>
                                <input type="email" readOnly id="email" value={email} onChange={handleEmailChange} />
                            </div>
                        </div>
                    </div>
                    <div className="edit-profile-form">

                        <div className="label-input-prof margin">
                            <label>Age:</label>
                            <input type="number" id="age-input" value={age} onChange={handleAgeChange} />
                        </div>

                        <div className="label-input-prof margin">
                            <label>Location</label>
                            <Select className="location-lbl"
                                selected={country}
                                onSelect={handleCountryChange}
                                searchable={true}
                                showSelectedLabel={false}
                                countries={['US', 'GB', 'FR', 'DE', 'ES', 'IT', 'LB']}
                                customLabels={{ 'US': 'United States', 'GB': 'United Kingdom' }}
                            />
                           
                        </div>

                    </div>
                </div>

            </div>
            <div className="btn-div"><button className="profile-btn" onClick={handleSave}>Save</button></div>

        </div >


    );
}

export default UserProfile;