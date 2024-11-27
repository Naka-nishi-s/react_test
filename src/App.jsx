import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './top';

function App() {
  return (
      <Route path="/" element={<Top />} />
  );
}

export default App;
