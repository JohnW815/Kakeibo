import React, { useState, useEffect } from 'react';
import './App.css';
import InputField from './component/InputField';
import Header from './component/Header';
import Footer from './component/Footer';
import { setMaxListeners } from 'events';
import axios from 'axios';

const App: React.FC = () => {
  const [array, setArray] = useState([]);


  const fetchApi = async() => {
    const response = await axios.get("http://localhost:4000/api");
    setArray(response.data.fruits);
    console.log(response.data.fruits);
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <div className="App">
      <Header />
      <body>
        <InputField />
        {array}
      </body>
      <Footer />
    </div>
  );
}

export default App;
