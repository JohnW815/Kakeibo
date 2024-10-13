import React, { useState } from 'react';
import './App.css';
import InputField from './component/InputField';
import Header from './component/Header';
import Footer from './component/Footer';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <Header />
      <body>
        <InputField />
      </body>
      <Footer />
    </div>
  );
}

export default App;
