import axios from 'axios';
import React, { useState } from 'react';

function ImageGenerator() {
  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImageUrls] = useState([]);

  const generateImage = async () => {
    const apiUrl = 'http://localhost:8000/api/dal-e';
    const response = await axios.post(apiUrl, {
      prompt: prompt
    });
    setImageUrls(response.data.data.map(img => img.url));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await generateImage();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Prompt:
          <input type="text" value={prompt} onChange={e => setPrompt(e.target.value)} />
        </label>
        <button type="submit">Generate Image</button>
      </form>
      {imageUrls.length > 0 && (
        <div>
          {imageUrls.map((url, index) => (
            <img key={index} src={url} alt={`generated image ${index}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ImageGenerator;
