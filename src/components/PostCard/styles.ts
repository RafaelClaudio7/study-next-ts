import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  max-width: 400px;
`;
export const PostTitle = styled.h3`
  font-size: 16px;
  font-weight: 400;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  margin-top: 10px;
  color: #000;
  text-align: left;
  padding: 10px;
  &:hover {
    color: #3f72af;
  }
`;
export const PostBody = styled.p`
  font-size: 14px;
  font-family: "Times New Roman", Times, serif;
  color: #141414;
  text-align: center;
`;
