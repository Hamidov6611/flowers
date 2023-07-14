import { styled } from "styled-components";

const Button = styled.button`
  padding: 16px 60px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: ${props => props.theme.colors.whiteColor};
  background-color: ${props => props.theme.colors.secondaryBackground};
  border-radius: 20px;
  border: none;
  cursor: pointer;
`;

export default Button

