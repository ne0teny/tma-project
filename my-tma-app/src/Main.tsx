import React from "react";
import styles from './scss//Main.module.scss';
import avatarImage from './img/Avatar.png';
import imageKubok from './img/image кубок.svg'; // Обрати внимание на правильное название файла
import icon from './img/Icon.svg';
import icon2 from './img/Icon2.svg';
import icon3 from './img/Icon3.svg';
import icon4 from './img/Icon4.svg';
import component13 from './img/Component 13.png';
import frame170 from './img/Frame 170.png';
import frame172 from './img/Frame 172.png';
import frame109 from './img/Frame 109.svg';
import frame62 from './img/Frame 62.svg';
import frame122 from './img/Frame 122.png';

const Main: React.FC = () => {
  return (
    <div className={styles.iphone13143}>
      <div className={styles.blockOfInfoParent}>
        <div className={styles.blockOfInfo}>
          <div className={styles.blockOfInfoInner}>
            <div className={styles.pointBlockParent}>
              <div className={styles.pointBlock}>
                <div className={styles.parent}>
                  <div className={styles.div}>Поинты за час</div>
                  <div className={styles.instanceParent}>
                  <img className={styles.frameChild} alt="" src={frame122} />
                  <div className={styles.div1}>+580 000</div>
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
                  <img className={styles.icon1} alt="" src={icon2} />
                  <div className={styles.div1}>580 000</div>
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
            <img className={styles.icon1} alt="" src={icon4} />
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
      <div className={styles.frameGroup}>
        <div className={styles.component13Parent}>
        <img className={styles.component13Icon} alt="" src={component13} />
        <div className={styles.div1}>+580 000</div>
        </div>
        <div className={styles.instanceGroup}>
        <img className={styles.frameItem} alt="" src={frame170} />
        <img className={styles.frameInner} alt="" src={frame172} />
        <div className={styles.instanceContainer}>
        <img className={styles.instanceChild} alt="" src={frame109} />
        <div className={styles.div7}>6500/7000</div>
          </div>
        </div>
      </div>
      <div className={styles.iphoneXhomeIndicatorhomeI}>
        <div className={styles.iphoneXhomeIndicatorhomeIChild} />
      </div>
      <div className={styles.component11Parent}>
        <div className={styles.component11}>
        <img className={styles.component11Child} alt="" src={frame62} />
        <div className={styles.home}>Home</div>
        </div>
        <div className={styles.frameContainer}>
        <img className={styles.component11Child} alt="" src={frame62} />
        <div className={styles.home}>Mine</div>
        </div>
        <div className={styles.frameContainer}>
        <img className={styles.component11Child} alt="" src={frame62} />
        <div className={styles.home}>Friends</div>
        </div>
        <div className={styles.frameContainer}>
        <img className={styles.component11Child} alt="" src={frame62} />
        <div className={styles.home}>Earn</div>
        </div>
        <div className={styles.frameContainer}>
        <img className={styles.component11Child} alt="" src={frame62} />
        <div className={styles.home}>Airdrop</div>
        </div>
      </div>
    </div>
  );
};

export default Main;

