import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#C4D3DC', // Footer background color
    color: 'black', // Text color
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  };

  const contactInfoStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
  };

  const iconStyle = {
    fontSize: '20px',
    margin: '0 10px',
    color: '#A52727', // Icon color
    cursor: 'pointer',
  };

  return (
    <footer style={footerStyle}>
      <p>&copy; 2023 Mall For All</p>
      
    </footer>
  );
};

export default Footer;
