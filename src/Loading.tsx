import React from 'react';
import './Loading.scss';
import image from './img/Frame loading.png';

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <img src={image} alt="Background" className="background-image" />
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
