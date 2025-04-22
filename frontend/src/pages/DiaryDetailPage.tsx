import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Diary:React.FC = () => {
    const [text, setText] = useState<String>('');
    let params = useParams();

    
    const fetchApi = async() => {
        const data:any = await axios.get("http://localhost:4000/diary/" + params.id)
            .then(data => setText(data.data.body))
            .catch(err => console.log(err))
    }

    const deleteDiary = async() => {
        const data:any = await axios.delete("http://localhost:4000/diary/" + params.id)
            .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchApi();
    }, [params])

    return(
        <div>
            {text}
            <Link to=".." onClick={deleteDiary}>Delete</Link>
        </div>
    )
};

export default Diary;


