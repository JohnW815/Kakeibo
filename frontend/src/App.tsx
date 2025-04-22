import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './component/Header';
import Main from './component/Main'
import Footer from './component/Footer';
import axios from 'axios';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
