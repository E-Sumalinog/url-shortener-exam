import React, { useState } from 'react';
import Modal from 'react-modal';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        // Handle successful signup
        toast.success('User signed up successfully!');
        // Clear form fields
        setFormData({
          name: '',
          email: '',
          password: ''
        });
      } else {
        // Handle signup error
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
    onClose();
  };
    <ToastContainer />
  return (
    
    <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    contentLabel="Signup Modal"
    className="signup-modal"
    overlayClassName="signup-modal-overlay"
    >
    <div className="modal-header">
        <h2>Sign Up</h2>
        <button onClick={onClose} className="close-button">&times;</button>
    </div>
    <div className="modal-body">
        <form onSubmit={handleSubmit}>
        <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <button type="submit">Sign Up</button>
        </form>
    </div>
    </Modal>
    
  );
};

export default SignupModal;