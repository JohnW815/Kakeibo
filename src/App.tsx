import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Page from './pages/Page'
import Footer from './component/Footer';
import axios from 'axios';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Page />
      <Footer />
    </div>
  );
}

export default App;
