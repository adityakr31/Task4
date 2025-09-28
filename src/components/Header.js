// Header.js
import React from 'react';
import Typography from '@mui/material/Typography';

function Header() {
  return (
    <div>
      <img
  src="/kaiburrLogoText.png"
  alt="img"
  width="50%"
  height="50%"
  style={{
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '2px 2px 5px #888888',
    display: 'block', // Set the display to block
    margin: '0 auto', // Center horizontally by setting left and right margin to auto
  }}
/>

<br />
      <Typography variant="h4" align="center" fontWeight="bold"> Web UI Front End </Typography>
<br />      
    </div>
  );
}

export default Header;
