import styled from "styled-components";

export const ButtonContainer = styled.div`
  margin: 20px 0;
  padding: 10px 0;
  display: flex;
  justify-content: center;
`;

export const ButtonAddPost = styled.button`
  cursor: pointer;
  background-color: #112d4e;
  padding: 10px 20px;
  color: #f9f7f7;
  border: solid 1px #112d4e;
  border-radius: 5px;
  &:hover {
    background-color: #f9f7f7;
    color: #112d4e;
  }
`;
