import React, { useState } from 'react';
import "./css/main.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShortenForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('url', originalUrl);

      const response = await fetch('http://localhost:8080/api/shorten-url', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setShortenedUrl(data.shortened_url);
    } catch (error) {
        if (!toast.isActive('error-toast')) {
            toast.error('Please provide a valid URL.', { toastId: 'error-toast' });
        }
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortenedUrl).then(() => {

      toast.success('Short URL copied to clipboard!');

    }).catch((error) => {
      toast.error('Error copying to clipboard');
    });
  };


  return (
    <div className="shorten-form-container">
      <h3>Shorten a long URL</h3>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <input
          name="url"
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          className="shorten-form-input"
          placeholder="Enter URL"
        />
        <button type="submit" className="shorten-submit-button">Shorten URL</button>
      </form>
      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <input 
            value={shortenedUrl}    
            className="shorten-form-input"
          />
          <button onClick={handleCopy} className="copy-button">&#x2398; Copy</button>
        </div>
      )}
      <ToastContainer /> {/* Add ToastContainer */}
    </div>
  );
};

export default ShortenForm;