import React, { useState, useEffect } from 'react';
import './App.css';
import InputField from './component/InputField';
import Header from './component/Header';
import Footer from './component/Footer';
import axios from 'axios';

type Diary = {
  _id: string,
  title: string,
  snippet: string,
  body: string,
  createdAt: string,
  updatedAt: string,
  __v: 0
}

const App: React.FC = () => {
  const [diary, setDiary] = useState([]);
  // const [array, setArray] = useState<string[]>([]);


  const fetchApi = async() => {
    // const { data }: { data: Diary[] } = await axios.get("http://localhost:4000/all-diaries");
    const data = await axios.get("http://localhost:4000/all-diaries")
      .then(data => setDiary(data.data))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <div className="App">
      <InputField />
      <Header />
      <Footer />
      {diary.map(item => item.title)}    
    </div>
  );
}

export default App;
