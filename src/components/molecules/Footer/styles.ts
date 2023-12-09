import styled from "styled-components";

export const Footer = styled.div`
  height: 86px;
  width: 100vw;
  background-color: #fff;
  /* margin-top: 178px; */
  display: flex;
  justify-content: center;
  gap: 60px;
  align-items: center;

  > p {
    font-size: 14px;
    font-weight: ${(props) => props.theme.font.weight.normal};
  }

  @media (max-width: 950px) {
    height: 66px;

    img,
    svg {
      width: 55px;
    }

    > p {
      display: none;
    }
  }
`;

export const Divider = styled.div`
  height: 44px;
  width: 1px;
  background-color: #000;

  @media (max-width: 950px) {
    display: none;
  }
`;
