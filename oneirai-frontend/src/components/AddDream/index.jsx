import React, { useState } from "react";
import Button3 from "../Button3";
import "./adddream.css";

const AddDream = (props) => {

  };

  return (
    <div className="popup">

      <div className="popup-inner">
        <div className="title-model"><h1>Add Dream</h1></div>
        <form onSubmit={handleSubmit}>
          <div className="labeltext">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
            /></div>
          <div className="labeltext">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleDescriptionChange}
            ></textarea></div>

          <div className="labeltext">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={handleDateChange}
            /></div>
          <div className="model-btn">
            <Button3 type="submit">Save</Button3>
            <Button3 onClick={props.closePopup}>Close</Button3></div>
        </form>
      </div>
    </div>
  );
};

export default AddDream;
