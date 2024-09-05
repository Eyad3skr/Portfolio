import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultPage from './components/Default';
import Home from './components/Home';
// import News from './components/News'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/Home" element={<Home />} />
        {/* <Route path="/News" element={<News/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
