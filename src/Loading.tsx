// src/Loading.tsx

import React, { useEffect } from 'react';
import './Loading.scss';
import image from './img/Frame loading.png';

const Loading: React.FC = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand();

    const user = tg.initDataUnsafe.user;

    if (user) {
      fetch('https://69cc-89-107-97-177.ngrok-free.app/user/create_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: user }),
      })
        .then(response => response.json())
        .then(result => {
          console.log('Success:', result);
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }
  }, []);

  return (
    <div className="loading-container">
      <img src={image} alt="Background" className="background-image" />
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;
