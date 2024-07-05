import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Main from './Main';
import Loading from './Loading';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Имитируем загрузку данных
    setTimeout(() => {
      setIsLoading(false);
    }, 9000); // Установите время загрузки по своему усмотрению
  }, []);

  return isLoading ? <Loading /> : <Main />;
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
