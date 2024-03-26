import React, { useState, useEffect } from 'react';
import "./css/nav.css";
import SignupModal from './modals/SignupModal';
import Modal from 'react-modal';
import SlideLoginForm from './LoginForm';

const NavigationBar = () => {
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  useEffect(() => {
    Modal.setAppElement('#root');
  }, []);

  const openSignupModal = () => {
    setSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setSignupModalOpen(false);
  };

  const handleLoginButtonClick = () => {
    setIsLoginFormOpen(!isLoginFormOpen);
  };

  const handleCloseLoginForm = () => {
    setIsLoginFormOpen(false);
  };

  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">MYURL</a>
      <ul className="navbar-nav">
        <li className="nav-item"><a href="#" className="nav-link">My URLs</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Plans</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
        <li className="nav-item"><a href="#" className="nav-link">Feature</a></li>
        <li className="nav-item"><a href="#" className="nav-link"><span onClick={openSignupModal}>Sign Up</span></a></li>
        <li className="nav-item"><a href="#" className="nav-link"><span onClick={handleLoginButtonClick}>Sign In</span></a></li>
      </ul>
      <SignupModal isOpen={isSignupModalOpen} onClose={closeSignupModal} />
      <SlideLoginForm isOpen={isLoginFormOpen} onClose={handleCloseLoginForm} />
    </nav>
  );
};

export default NavigationBar;