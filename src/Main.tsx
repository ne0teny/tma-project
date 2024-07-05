import styles from './scss/Homescreen.module.scss';  // Используйте импортированный файл стилей
import avatarImage from './img/Avatar.png';
import imageKubok from './img/image кубок.svg'; // Используйте .svg расширение
import icon from './img/Icon.svg';
import icon3 from './img/Icon3.svg'; // Используйте Icon3.svg, а не Icon.svg
import icon4 from './img/Icon4.svg';
import component13 from './img/Component 13.png';
import frame109 from './img/Frame 109.svg';
import frame122 from './img/Frame 122.png';
import additionalInfoIcon from './img/Additional Info.svg';
import Navigation from './Navigation';

const Main: React.FC = () => {
  // ... (Your existing Telegram ID logic) ...

  return (
    <div className={styles.homeScreen}>
      <div className={styles.topSection}>
        <div className={styles.blockOfInfo}>
          <div className={styles.blockOfInfoInner}>
            <div className={styles.pointBlockParent}>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.div}>Поинты за час</div>
                  <div className={styles.instanceParent}>
                    <img className={styles.frameChild} alt="" src={frame122} />
                    <div className={styles.highlightedFigure}>+580 000</div>
                  </div>
                </div>
              </div>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.group}>
                    <div className={styles.div2}>Подписчики</div>
                    <img className={styles.icon} alt="" src={icon} />
                  </div>
                  <div className={styles.instanceParent}>
                    <img className={styles.icon1} alt="" src={icon} /> 
                    <div className={styles.highlightedFigure}>580 000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pointBlockGroup}>
            <div className={styles.pointBlock2}>
              <div className={styles.skufsdff}>Skuffolog...</div>
              <img className={styles.icon2} alt="" src={icon3} /> 
            </div>
            <div className={styles.level89Parent}>
              <div className={styles.level89}>level 8/9</div>
              <div className={styles.frameWrapper}>
                <div className={styles.progressBarBackgroundWrapper}>
                  <div className={styles.progressBarBackground} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.profileBlock}>
          <div className={styles.avatarParent}>
            <img className={styles.avatarIcon} alt="" src={avatarImage} />
            <div className={styles.nameAndRunk}>
              <div className={styles.namee}>Namee...</div>
              <div className={styles.meme}>(meme)</div>
            </div>
            <img className={styles.icon3} alt="" src={icon4} /> 
          </div>
          <div className={styles.everyDayBonus}>
            <div className={styles.container}>
              <div className={styles.div4}>
                <p className={styles.p}>Ежедневный</p>
                <p className={styles.p}>бонус</p>
              </div>
              <img className={styles.imageIcon} alt="" src={imageKubok} />
              <div className={styles.notificationError}>
                <div className={styles.div5}>1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.contentBlock}>
          <div className={styles.highlightedInfo}>
            <img className={styles.component13Icon} alt="" src={component13} />
            <div className={styles.highlightedFigure}>1 580 000</div>
          </div>
          <img className={styles.additionalInfoIcon} alt="" src={additionalInfoIcon} />
        </div>
        <div className={styles.batarty}>
          <img className={styles.batartyChild} alt="" src={frame109} />
          <div className={styles.div6}>6500/7000</div>
        </div>
        {/* Удалите эту часть */}
        <Navigation /> {/* Добавьте компонент навигации */}
      </div> 
    </div>
  );
};

export default Main;
