import React, { useEffect, useState } from 'react'
import api from '../axios/axios'
import { Link, useNavigate } from 'react-router-dom';


const Blogs = () => {
    const [data,setData] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        const fetchapi = async ()=>{
            const res = await api.get('/blogs');
            setData(res.data.data);
        }

        fetchapi();
    },[])

    return (
    <div style = {{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1>Blogs</h1>
        <br />
        <br />
        <br />
        <ol style = {{display:'flex',flexDirection:'column',gap:'4rem'}}>
        {data.map(d => (
            <li style = {{cursor: 'pointer'}} key = {d._id}><Link to = {`${d._id}`}>{d.title}</Link>
            </li>
        ))}
        </ol>
        <button onClick = {()=>navigate('/blogadder')}>Add Blog</button>
    </div>
  )
}

export default Blogs