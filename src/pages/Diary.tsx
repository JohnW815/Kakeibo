import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Diary:React.FC = () => {
    const [text, setText] = useState<String>('');
    let params = useParams();

    
    const fetchApi = async() => {
        const data:any = await axios.get("http://localhost:4000/single-diary/" + params.id)
            .then((data) => console.log(data))
            // .then(data => setText(data.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchApi();
    }, [params])

    return(
        <div>
            {text}
        </div>
    )
};

export default Diary;


