import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 5px;

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked ~ label {
    color: red;
  }

  label {
    cursor: pointer;
    color: #fff;
    font-size: 14px;
  }
`;
