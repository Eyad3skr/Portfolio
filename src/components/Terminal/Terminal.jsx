import './terminal.css'; 
import React, { useState } from 'react';
import Abpop from '../popupAbout/Abpop.jsx'; 
import Conpop from '../popupCon/Conpop.jsx';
import Projectpop from '../popupProject/Ppop.jsx';

const Terminal = () => {
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // State to control popup visibilit
  const [showConPopup, setConShowPopup] = useState(false); 
  const [showProjectPopup, setProjectShowPopup] = useState(false); 

  const validCommands = ['about', 'pgallery', 'skills', 'conus', 'game'];

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const trimmedInput = input.trim();

      if (validCommands.includes(trimmedInput)) {
        if (trimmedInput === 'about') {
          setShowPopup(true); 
        } else if (trimmedInput === 'game') {
          window.open('/Galaga/game.html', '_blank');
        } else if(trimmedInput === 'conus'){
          setConShowPopup(true);
        } else if(trimmedInput === 'pgallery'){
          setProjectShowPopup(true);
        } 
        else {
          setCommands([...commands, `${input}`]);
        }
      } else {
        setCommands([
          ...commands,
          <>
            <span style={{ color: '#DC143C' }}>Error:</span> {` '${input}' is not recognized as a command`}
          </>
        ]);
      }
      setInput('');
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };
  
  const closeConPopup = () => {
    setConShowPopup(false);
  };

  const closeProjectPopup = () => {
    setProjectShowPopup(false);
  };

  return (
    <div className="terminalContainer">
      <div className="terminalHeader">
        Not Microsoft Windows [Version 10.0.22631.3880]
        <br />
        (c) Personal Portfolio. All rights reserved.
        <br />
        <span className="terminalPath">C:\Users\Eyad Ibrahim's Portfolio&gt;</span>
      </div>
      <div className="terminalContent">
        {commands.map((command, index) => (
          <div key={index} className="terminalCommand">
            <span>$ {command}</span>
          </div>
        ))}
        <input
          type="text"
          className="terminalInput"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      </div>
      {showPopup && <Abpop closePopup={closePopup} />} {/* Pass the closePopup function */}
      {showConPopup && <Conpop closeConPopup={closeConPopup}/> }
      {showProjectPopup && <Projectpop closeProjectPopup={closeProjectPopup}/> }
    </div>
  );
};

export default Terminal;