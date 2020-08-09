import styled from "styled-components";

const Button = styled.input`
  flex: 1;
  background: hsl(180, 50%, 75%);
  border: none;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;

  &:hover {
    background: hsl(180, 75%, 75%);
  }
`;

export default Button;
