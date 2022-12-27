import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { ButtonContainer } from "./Button";
import Link from "next/link";

interface FormProps {
  action?: string;
  onSubmit?: () => void;
}

interface LabelProps {
  htmlFor: string;
}

interface InputProps {
  name: string;
  id: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

interface ButtonSubmitProps {
  type: string;
}

const FormStyled = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding: 30px 10px 30px 10px;
  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 1px 1px 3px #000;
`;
const Label = styled.label<LabelProps>`
  font-size: 14px;
  font-weight: 700;
  margin-top: 15px;
`;
const Input = styled.input<InputProps>`
  padding: 5px;
  border: solid 0.1px #000;
  border-radius: 3px;
  outline: none;
`;

const Button = styled.button<ButtonSubmitProps>`
  margin-top: 20px;
  width: 80px;
  display: flex;
  justify-content: center;
  background-color: #222831;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  &:hover {
    background-color: #111111;
  }
`;

const FormTitle = styled.h2`
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
`

const BackButton = styled.p`
    text-decoration: underline;
    font-size: 12px;
    color: #222831;
`

export default function Form() {
  const [formData, setFormData] = useState({});

  function handleSubmit(): void {
    axios.post("http://127.0.0.1:7000/api/posts", formData);
  }

  return (
    <FormStyled action="" onSubmit={handleSubmit}>
      <FormTitle>Faça seu Post!</FormTitle>    
      <Label htmlFor="title">Título:</Label>
      <Input type="text" name="title" id="title" onChange={(e) => setFormData({...formData, title: e.target.value})}/>
      <Label htmlFor="body">Conteúdo:</Label>
      <Input type="text" name="body" id="body" onChange={(e) => setFormData({...formData, body: e.target.value})}/>
      <Label htmlFor="">Autor:</Label>
      <Input type="text" name="author" id="author" onChange={(e) => setFormData({...formData, author: e.target.value})}/>
      <ButtonContainer>
        <Button type="submit">ENVIAR</Button>
      </ButtonContainer>
      <Link href="/">
        <BackButton>Voltar</BackButton>
      </Link>
    </FormStyled>
  );
}
