import React from 'react';
import '~/scss/Main.scss';

const Main: React.FC = () => {
  return (
    <div className="main-container">
      <div className="top-section">
        <div className="income-box">
          <div className="income-label">Поинты за час</div>
          <div className="income-value">
            <img src="coin-icon.png" alt="Coin" className="coin-icon" />
            +580 000
          </div>
          <div className="league">Skuffolog...</div> 
        </div>

        <div className="subscribers-box">
          <div className="subscribers-label">Подписчики</div>
          <div className="subscribers-value">580 000</div>
          <div className="level">Level 8/9</div> 
        </div>

        <div className="user-info">
          <div className="avatar-name">
            <img src="user-avatar.png" alt="Avatar" className="avatar" />
            <span className="username">Namee...</span>
          </div>
          <button className="settings-button">⚙️</button>
          <div className="daily-bonus">
            <span className="bonus-label">Ежедневный бонус</span>
            <img src="trophy-icon.png" alt="Trophy" className="bonus-icon" />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Main;
