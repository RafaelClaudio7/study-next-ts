import React from "react";
import { PostContainer, PostTitle } from "./styles";
import { PostProps } from "../../src/interfaces/IPost";

export default function PostCard({ posts }: PostProps) {
  return (
    <PostContainer>
      {posts.map((post) => {
        return <PostTitle key={post.id}>{post.title}</PostTitle>;
      })}
    </PostContainer>
  );
}
