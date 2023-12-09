import styled from "styled-components";

interface Tprops {
  variant?: string;
}

export const Button = styled.button<Tprops>`
  border-radius: 5px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  border: none;
  cursor: pointer;
  font-weight: ${(props) => props.theme.font.weight.strong};

  background-color: ${(props) =>
    props.variant === "primary" ? "#DE1212" : "#ddd"};

  height: 40px;
  color: #fff;

  &:hover {
    background-color: #ed2f2f;
  }
`;
