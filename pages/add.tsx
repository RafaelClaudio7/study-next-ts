import React from "react";

import GlobalStyle from "../styles/globalStyles";
import { Main } from "../components/Main";
import Form from "../components/Form";
import Header from "../components/Header";

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
