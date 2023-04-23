import React from "react";

import { ButtonAddPost, ButtonContainer } from "./styles";
import Link from "next/link";

export default function Button() {
  return (
    <ButtonContainer>
      <Link href="/add">
        <ButtonAddPost>New Post</ButtonAddPost>
      </Link>
    </ButtonContainer>
  );
}
