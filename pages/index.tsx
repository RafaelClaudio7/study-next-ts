import Head from "next/head";
import Link from "next/link";
import { AddButton, ButtonContainer } from "../components/Button";
import Top from "../components/Header";
import { Main } from "../components/Main";
import { PostContainer, PostTitle } from "../components/PostCard";
import GlobalStyle from "../styles/globalStyles";

type Post = {
  id: number;
  title: string;
  body: string;
  author: string;
};

type PostProps = {
  posts: Post[];
};

export async function getStaticProps() {
  const res = await fetch("http://127.0.0.1:7000/api/posts");
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
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Top />
      <Main>
        <div className="container">
          <h1 style={{ textAlign: "center" }}>Postagens</h1>
          <PostContainer>
            {posts.map((post) => (
              <PostTitle key={post.id}>{post.title}</PostTitle>
            ))}
          </PostContainer>
          <ButtonContainer>
            <Link href="/add">
              <AddButton>Adicionar Post</AddButton>
            </Link>
          </ButtonContainer>
        </div>
      </Main>
    </>
  );
}
