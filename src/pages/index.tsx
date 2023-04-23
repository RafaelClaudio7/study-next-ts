import Head from "next/head";

import Header from "../components/Header";
import Button from "../components/Button";
import PostCard from "../components/PostCard";
import GlobalStyle from "../styles";
import { PostProps } from "../interfaces/IPost";

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default function Home({ posts }: PostProps) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Posts Blog</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <main>
        <PostCard posts={posts} />

        <Button />
      </main>
    </>
  );
}
