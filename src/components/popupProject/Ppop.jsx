import React from 'react';
import ProjectSlider from '../3dSlider/SliderComponent.jsx';
import Popup from 'reactjs-popup';
import './ppop.css';

function Ppop({ closeProjectPopup }) {
  return (
    <Popup open={true} closeOnDocumentClick onClose={closeProjectPopup} className="popOverlay">
      <div className="popCenter">
        <div className="pDiv">
          <ProjectSlider />
        </div>
      </div>
    </Popup>
  );
}

export default Ppop;