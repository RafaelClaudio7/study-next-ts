import React from 'react';

export default function AddPost() {
  return (
    <>
    <form action="">
        <label htmlFor="title">Título:</label>     
        <input type="text" name="title" id="title" />
        <label htmlFor="body">Texto:</label>
        <input type="text" name="body" id="body" />
        <label htmlFor="body">Autor:</label>
        <input type="text" name="author" id="author" />
        <input type="submit" value="Enviar" />
    </form>
    </>
  )
}
