import React from "react";

import Form from "../components/Form";
import Header from "../components/Header";
import GlobalStyle from "../styles";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export default function AddPost() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>
        <Container>
          <Form />
        </Container>
      </main>
    </>
  );
}
