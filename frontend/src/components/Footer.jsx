import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Clacks University</h3>
          <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="https://www.clacksuniversity.edu/about" target="_blank" rel="noopener noreferrer">About Us</a></li>
            <li><a href="https://www.clacksuniversity.edu/contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
            <li><a href="https://www.clacksuniversity.edu/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 University Ave</p>
          <p>Clacks, NY 10001</p>
          <p>Email: agerclackson44@gmail.com</p>
          <p>Phone: (254) 112 670 912</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;