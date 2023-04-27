import React, { useState, useRef, useEffect } from "react";
import Button3 from "../Button3";
import Button2 from "../Button2";
import axios from "axios";

function DreamVisual(props) {
  const { description } = props.dream;
  const [images, setImages] = useState([]);

  const imageContainerRef = useRef(null);

  const generateImage = async () => {
    const apiUrl = "http://localhost:8000/api/dal-e";
    const response = await axios.post(apiUrl, {
      prompt: description,
    });
    const imageUrls = response.data.data.map((img) => img.url);
    setImages(imageUrls);
  };

  useEffect(() => {
    generateImage();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submit here
  };

  return (
    <div className="dream-modal">
      <button className="close-button" onClick={props.onClose}>
        &times;
      </button>
      <div className="dream-modal-content">
        <div className="dream-details">
          <h3>{props.dream.title}</h3>
          <p2>{props.dream.date}</p2>
          <br />
          <br />
          <p1>{props.dream.description}</p1>
        </div>
      </div>
      <div>
        <h1 className="interpret">Visualization</h1>
      </div>
      <div className="dream-modal-content">
        <div className="image-container-visual" ref={imageContainerRef}>
          {images.length > 0 ? (
            images.map((url) => <img className="dream-img" key={url} src={url} />)
          ) : (
            <p>Loading images...</p>
          )}
        </div>
      </div>

      <div className="interpret-model-btn">
        <Button3 onClick={props.onClose}>Close</Button3>
        <Button2 type="submit" onClick={handleSubmit}>
          Save
        </Button2>
      </div>
    </div>
  );
}

export default DreamVisual;
