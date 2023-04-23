import React, { useState } from "react";

import axios from "axios";

import Link from "next/link";
import {
  BackButton,
  Button,
  FormStyled,
  FormTitle,
  Input,
  Label,
} from "./styles";
import { ButtonContainer } from "../Button/styles";

export default function Form() {
  const [formData, setFormData] = useState({});

  function handleSubmit(): void {
    axios.post("http://127.0.0.1:7000/api/posts", formData);
  }

  return (
    <FormStyled action="" onSubmit={handleSubmit}>
      <FormTitle>New Post</FormTitle>
      <Label htmlFor="title">Title:</Label>
      <Input
        type="text"
        name="title"
        id="title"
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />
      <Label htmlFor="body">Content:</Label>
      <Input
        type="text"
        name="body"
        id="body"
        onChange={(e) => setFormData({ ...formData, body: e.target.value })}
      />
      <Label htmlFor="">Author:</Label>
      <Input
        type="text"
        name="author"
        id="author"
        onChange={(e) => setFormData({ ...formData, author: e.target.value })}
      />
      <ButtonContainer>
        <Button type="submit">SUBMIT</Button>
      </ButtonContainer>
      <Link href="/">
        <BackButton>Back</BackButton>
      </Link>
    </FormStyled>
  );
}
