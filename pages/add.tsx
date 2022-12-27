import React, { useState } from 'react';
import Top from '../components/Header';
import GlobalStyle from '../styles/globalStyles';
import { Main } from '../components/Main';
import Form from '../components/Form';

export default function AddPost() {
  return (
    <>
    <GlobalStyle/>
    <Top />
    <Main>
    <Form />
    </Main>
    </>
  )
}
