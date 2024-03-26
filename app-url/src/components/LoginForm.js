// SlideLoginForm.js
import React, { useState } from "react";
import "./css/slide.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SlideLoginForm = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handlenameChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  
  
  return (
    <div className={`slide-login-form-container ${isOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={onClose}>
        X
      </button>
      <div className="login-form">  
        <h3>Login</h3>
        <form>
          <input type="text" placeholder="Email" value={email} onChange={handlenameChange} />
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <button type="button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SlideLoginForm;