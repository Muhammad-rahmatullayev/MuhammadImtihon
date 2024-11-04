
import React, { useState } from 'react';
import { useDarkMode } from './DarkModeContext';

const DarkModeSwitcher = () => {
  const { toggleColorScheme } = useDarkMode();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleColorChange = (color) => {
    toggleColorScheme(color);
    setShowDropdown(false);
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button style={{width:'100px',height:'40px',background:'purple',boxShadow:'0px 0px 10px purple',border:'0',cursor:'pointer',borderRadius:'0px 0px 10px 10px'}} onClick={() => setShowDropdown(!showDropdown)}>
        {/* 🌙 */}
      </button>
      {showDropdown && (
        <div style={{ position: 'absolute', top: '100%', left: 0, boxShadow: '0 0px 8px purple' }}>
          <button onClick={() => handleColorChange('dark')} style={{ display: 'block', padding: '3px 16px', width: '100%',background:'purple',cursor:'pointer',borderRadius:'0px 0px 10px 10px',color:'white' }}>
            dark
          </button>
          <button onClick={() => handleColorChange('darkBlue')} style={{ display: 'block', padding: '3px 16px', width: '100%',background:'purple',cursor:'pointer',borderRadius:'0px 0px 10px 10px',color:'white' }}>
            dark.blue
          </button>
          <button onClick={() => handleColorChange('original')} style={{ display: 'block', padding: '3px 16px', width: '100%',background:'purple' ,cursor:'pointer',borderRadius:'0px 0px 10px 10px',color:'white' }}>
           original clr.
          </button>
        </div>
      )}
    </div>
  );
};

export default DarkModeSwitcher;
