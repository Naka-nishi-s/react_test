import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './top';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </Router>
  );
}

export default App;
