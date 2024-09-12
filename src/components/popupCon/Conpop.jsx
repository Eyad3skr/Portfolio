import React from 'react';
import Conus from '../ContactUs/Contactcard';
import Popup from 'reactjs-popup';
import styles from './conpop.module.css';
function Conpop({ closeConPopup }) {
  return (
    <Popup open={true} closeOnDocumentClick onClose={closeConPopup} className={styles.popupOverlay}>
      <div className={styles.popupCenter}>
        <div className={styles.conDiv}>
          <Conus />
        </div>
      </div>
    </Popup>
  );
}

export default Conpop;
