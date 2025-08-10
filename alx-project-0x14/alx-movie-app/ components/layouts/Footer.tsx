import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear()} ALX Movie App</p>
    </footer>
  );
};

export default Footer;
