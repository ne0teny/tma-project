import React, { useEffect } from 'react'; // Импортируем useEffect
import './Loading.scss';
import image from './img/Frame loading.png';

const Loading: React.FC = () => {
  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand();

    const user = tg.initDataUnsafe.user;

    if (user) {
      const headerTitle = document.querySelector('.header-title');
      if (headerTitle) {
        headerTitle.innerHTML = user.username || `${user.first_name} ${user.last_name}`;
      }

      Telegram.WebApp.sendData('Hello from Mini App');

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
