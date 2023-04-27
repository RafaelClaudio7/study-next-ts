import React, { useState } from "react";

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
import { postsApi } from "../../api/api";

interface IFormData {
  user_id?: number;
  title: string;
  body: string;
  author?: string;
}

export default function Form() {
  const [formData, setFormData] = useState<IFormData>({} as IFormData);

  function handleSubmit(): void {
    postsApi.post("/posts", {
      user_id: 7,
      title: formData.title,
      body: formData.body,
    });
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
