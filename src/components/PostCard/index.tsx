import React from "react";
import { PostContainer, PostTitle, Wrapper } from "./styles";
import { PostProps } from "../../interfaces/IPost";

export default function PostCard({ posts }: PostProps) {
  return (
    <Wrapper>
      <PostContainer>
        {posts.map((post) => {
          return (
            <PostTitle key={post.id}>{`${post.id}. ${post.title}`}</PostTitle>
          );
        })}
      </PostContainer>
    </Wrapper>
  );
}
