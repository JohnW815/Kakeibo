import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Add: React.FC = () => {
    const [postData, setPostData] = useState({
        name: '',
        snippet: '',
        body: '',
      });

    const axiosPostData = async() => {
        console.log('test')
        await axios.post('http://localhost:4000/add-diary', postData);
    }

    return (
        <form action="" className="input" onSubmit={axiosPostData}>
            <div className="input__title">
                <label htmlFor="title" className="input__title--lab">Title</label>
                <input type="input" className="input__title--box"/>
            </div>
            <div className="input__snippet">
                <label htmlFor="title" className="input__snippet--lab">Snippet</label>
                <input type="input" className="input__snippet--box" />
            </div>  
            <div className="input__body">
                <label htmlFor="title" className="input__body--lab">Body</label>
                <textarea className="input__body--box" />
            </div>           
            <button className="input__submit" type="submit">
                GO
            </button>
        </form>
    )
}

export default Add