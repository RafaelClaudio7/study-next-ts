import React from "react";

import { Main } from "../components/Main";
import Form from "../components/Form";
import Header from "../components/Header";
import GlobalStyle from "../styles";

export default function AddPost() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main>
        <Form />
      </Main>
    </>
  );
}
