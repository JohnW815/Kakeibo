import React, { useState, useEffect } from 'react';
import './App.css';
import InputField from './component/InputField';
import Header from './component/Header';
import Footer from './component/Footer';
import { setMaxListeners } from 'events';
import axios from 'axios';

const App: React.FC = () => {
  const [array, setArray] = useState<string[]>([]);


  const fetchApi = async() => {
    const response = await axios.get("http://localhost:4000/dairy");
    const contentArray: string[] = [];
    response.data.forEach(element => {
      console.log(element)
    })
    setArray(contentArray);
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <div className="App">
      <Header />
      <body>
        <InputField />
      </body>
      <Footer />
      {array}
    </div>
  );
}

export default App;
