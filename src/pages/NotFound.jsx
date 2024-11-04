import React from 'react';
import "./NotFound.css"
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className='notfound'>
      <h1 className='t4'>404</h1><br />
      <h1 className='n4'> Not Found</h1> <br /><br /><br />
      <p className='p4'>Sorry, we could not find the page you are looking for.</p><br /><br />
      <button onClick={handleGoBack} style={{ padding: '10px 20px', fontSize: '16px' }}>
      Go back
      </button>
    </div>
  );
};

export default NotFound;
