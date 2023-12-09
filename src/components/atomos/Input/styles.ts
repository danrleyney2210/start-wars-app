import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: #fff;
  border-radius: 5px;
  margin-bottom: 7px;

  input[type="text"] {
    height: 40px;
    font-size: 14px;
    padding: 0 1rem;
    border: none;
    background-color: transparent;

    outline: none;

    &::placeholder {
      color: #7d7d7d;
    }
  }
`;
