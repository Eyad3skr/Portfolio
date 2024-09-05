import React, { useState } from 'react';
import './terminal.css'; 

const Terminal = () => {
  const [input, setInput] = useState('');
  const [commands, setCommands] = useState([]);
  
  // List of valid commands
  const validCommands = ['about', 'pgallery', 'skills', 'conus', 'games'];

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (validCommands.includes(input.trim())) {
        setCommands([...commands, `${input}`]);
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

  return (
    <div className="terminal-container">
      <div className="terminal-header">
        Not Microsoft Windows [Version 10.0.22631.3880]
        <br />
        (c) Personal Portfolio. All rights reserved.
        <br />
        <span className="terminal-path">C:\Users\Eyad Ibrahim's Portfolio&gt;</span>
      </div>
      <div className="terminal-content">
        {commands.map((command, index) => (
          <div key={index} className="terminal-command">
            <span>$ {command}</span>
          </div>
        ))}
        <input
          type="text"
          className="terminal-input"
          value={input}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;
