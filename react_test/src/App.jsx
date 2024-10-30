import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './top';
import Test from './test';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
  );
}

export default App;
