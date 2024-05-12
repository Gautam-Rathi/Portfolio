import React from 'react';
import './footer.css'; 

const Footer = () => {
    const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {year} Portfolio Website | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
