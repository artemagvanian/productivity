import styled from "styled-components";

const Input = styled.input`
  flex: 2;
  border: none;
  border-bottom: 2px solid transparent;
  margin: 10px;

  &:focus,
  &:hover {
    border-bottom: 2px solid pink;
    outline: none;
  }
`;

export default Input;
