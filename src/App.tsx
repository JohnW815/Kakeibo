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

    const data: {content:string}[] = response.data;
    const contentArray: string[] = [];

    data.forEach(element=> {
      contentArray.push(element.content);
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
