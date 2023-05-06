import React, { useState, useRef } from 'react';
import './ProfilePhoto.css';
import Camera from "../../images/camera.png"

const ProfilePhoto = () => {
  const [profilePic, setProfilePic] = useState(null);
  const fileInputRef = useRef(null);

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

  return (
    <div className="edit-profile-pic2">
      {profilePic ? (
        <img className="profile-pic2" src={profilePic} alt="Profile" />
      ) : (
        <div className="empty-profile-pic2">
          {/* <p>Choose your photo</p> */}
          <img src={Camera} alt='camera'/>
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        ref={fileInputRef}
      />
      <div
        className="circular-border"
        onClick={() => fileInputRef.current.click()}
      >
        
      </div>
    </div>
  );
};

export default ProfilePhoto;
