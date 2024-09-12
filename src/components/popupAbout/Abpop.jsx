import React from 'react';
import About from '../aboutme/AboutMe';
import Popup from 'reactjs-popup';
import styles from './abpop.module.css';
function Abpop({ closePopup }) {
  return (
    <Popup open={true} closeOnDocumentClick onClose={closePopup} className={styles.popupOverlay}>
      <div className={styles.popupCenter}>
        <div className={styles.aboutDiv}>
          <About />
        </div>
      </div>
    </Popup>
  );
}

export default Abpop;
