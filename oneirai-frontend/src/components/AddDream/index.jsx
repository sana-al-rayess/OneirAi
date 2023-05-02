import React, { useState } from "react";
import Button3 from "../Button3";
import Button2 from "../Button2";
import "./adddream.css";
import axios from "axios";
const AddDream = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState({});
  const [category, setCategory] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setErrors({});
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    setErrors({});
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setErrors({});
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('access_token');

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('date', date);
    formData.append('category', category);


    const errors = {};
    if (!title) {
      errors.title = "Title is required";
    }
    if (!description) {
      errors.description = "Description is required";
    }
    if (!date) {
      errors.date = "Date is required";
    }
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

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
        <div><form className="dream-form" onSubmit={handleSubmit}>

          <div className="labeltext2">
            <div className="div-lable"><label htmlFor="title">Title:</label></div>
            <div><input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
              {errors.title && <span className="error-dream">{errors.title}</span>}
            </div>
          </div>




          <div className="labeltext2">
            <div className="div-lable"> <label htmlFor="description">Description:</label></div>
            <div>
              <textarea
                id="description"
                name="description"
                value={description}
                onChange={handleDescriptionChange}
              ></textarea>
              {errors.description && <span className="error-dream">{errors.description}</span>}
            </div>
          </div>


          <div className="labeltext2">
            <div className="div-lable"><label htmlFor="date">Date:</label></div>
            <div>
              <input className="date-input"
                type="date"
                id="date"
                name="date"
                value={date}
                onChange={handleDateChange}
              />
              {errors.date && <span className="error-dream">{errors.date}</span>}
            </div>
          </div>

          <div className="labeltext2">
            <div className="div-lable"><label htmlFor="category">Category:</label></div>
            <select
                id="category"
                onChange={handleCategoryChange}
                name="my-dropdown"
                value={category}
              >
                <option value="">Select your category</option>
                <option value="Falling">Falling</option>
                <option value="Flying">Flying</option>
                <option value="Death">Death</option>
                <option value="Sickness">Sickness</option>
                <option value="Being Lost">Being Lost</option>
                <option value="Being Late">Being Late</option>
                <option value="Being Chased">Being Chased</option>
                <option value="Losing something">Losing something</option>
                <option value="Returning to childhood">Returning to childhood</option>
                <option value="Other">Other</option>
              </select>
              {errors.category && (
                <span className="error-dream">{errors.category}</span>
              )}
            </div>
          
          <div className="model-btn">
            <Button3 onClick={props.closePopup}>Close</Button3>
            <Button2 type="submit">Save</Button2>
          </div>
        </form>
        </div>
      </div>
    </div>



  );
};

export default AddDream;
