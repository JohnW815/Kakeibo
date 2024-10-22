import React, { useState, useEffect } from 'react';
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

const List: React.FC = () => {
    const [diary, setDiary] = useState<any[]>([]);
    // const [array, setArray] = useState<string[]>([]);
  
  
    const fetchApi = async() => {
      // const { data }: { data: Diary[] } = await axios.get("http://localhost:4000/all-diaries");
      const data:any = await axios.get("http://localhost:4000/all-diaries")
        .then(data => setDiary(data.data))
        .catch(err => console.log(err))
    }
  
    useEffect(() => {
      fetchApi();
    }, [])

    return(
        <div>
            Listing
            {diary.map(item => item.title)}    
        </div>
    )
}

export default List;