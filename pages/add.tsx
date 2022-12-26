import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

export default function AddPost() {
  const [formData, setFormData] = useState({});

  function handleSubmit(): void {
    axios.post("http://127.0.0.1:7000/api/posts",formData);
  }

  return (
    <>
    <div className="container">
    <form action="">
        <label htmlFor="title">Título:</label>     
        <input type="text" name="title" id="title" onChange={(e) => setFormData({...formData, title: e.target.value})}/>
        <label htmlFor="body">Texto:</label>
        <input type="text" name="body" id="body" onChange={(e) => setFormData({...formData, body: e.target.value})}/>
        <label htmlFor="body">Autor:</label>
        <input type="text" name="author" id="author" onChange={(e) => setFormData({...formData, author: e.target.value})}/>
        <input type="submit" value="Enviar" onClick={handleSubmit}/>
        <Link href="/" className='lnk'>Voltar</Link>
        
    </form>
    </div>
    </>
  )
}
