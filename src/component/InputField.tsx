import React from 'react'
import axios from 'axios'

const inputField = () => {

    const axiosPostData = async() => {
        console.log('test');
        const postData =  {
            name: 'test',
        }

        await axios.post('http://localhost:4000/contact', postData);
    }

    return (
        <form action="" className="input">
            <input type="input" className="input__box" />
            <button className="input__submit" onClick={axiosPostData}>
                GO
            </button>
        </form>
    )
}

export default inputField