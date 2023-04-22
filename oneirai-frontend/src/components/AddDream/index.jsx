import React, { useState } from "react";
import Button3 from "../Button3";
import "./adddream.css";
import axios from "axios";


const AddDream = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date);

    axios
      .post("http://127.0.0.1:8000/api/addDream", formData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response.data);
        console.log("Dream added successfully!")
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response.data);
        console.log("Error adding dream")
      });
  };



  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="title-model">
          <h1>Add Dream</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="labeltext">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="labeltext">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div className="labeltext">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          <div className="model-btn">
            <Button3 onClick={props.closePopup}>Close</Button3>
            <Button3 type="submit">Save</Button3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDream;
