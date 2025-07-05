import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white text-center py-3">
    <div>© {new Date().getFullYear()} RK MOVIE | Follow us:
      <a href="#" className="ms-2 text-white"><i className="bi bi-facebook"></i></a>
      <a href="#" className="ms-2 text-white"><i className="bi bi-twitter"></i></a>
      <a href="#" className="ms-2 text-white"><i className="bi bi-instagram"></i></a>
    </div>
  </footer>
);

export default Footer; 