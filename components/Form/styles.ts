import styled from "styled-components";

export interface FormProps {
  action?: string;
  onSubmit?: () => void;
}

export interface LabelProps {
  htmlFor: string;
}

export interface InputProps {
  name: string;
  id: string;
  type: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

export interface ButtonSubmitProps {
  type: string;
}
export const FormStyled = styled.form<FormProps>`
  display: flex;
  flex-direction: column;
  width: 40vw;
  padding: 30px 10px 30px 10px;
  border-radius: 5px;
  background-color: #fafafa;
  box-shadow: 1px 1px 3px #000;
`;
export const Label = styled.label<LabelProps>`
  font-size: 14px;
  font-weight: 700;
  margin-top: 15px;
`;
export const Input = styled.input<InputProps>`
  padding: 5px;
  border: solid 0.1px #000;
  border-radius: 3px;
  outline: none;
`;

export const Button = styled.button<ButtonSubmitProps>`
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

export const FormTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  text-transform: uppercase;
`;

export const BackButton = styled.p`
  text-decoration: underline;
  font-size: 12px;
  color: #222831;
`;
