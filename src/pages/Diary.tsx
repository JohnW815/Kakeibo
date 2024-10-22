import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Diary:React.FC = (props) => {
    const [text, setText] = useState<String>('');

    useEffect(() => {
        console.log(props)
    },[useLocation])

    return(
        <div>
            {text}
        </div>
    )
};

export default Diary;


