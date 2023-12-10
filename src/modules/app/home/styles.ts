import styled from "styled-components";
import bg from "../../../assets/svg/bg.svg";

export const Wrapper = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  width: 100vw;
  height: 100%;
  overflow-x: none;
`;

export const Container = styled.div`
  padding-top: 75px;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 58px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 17px;

  p {
    color: #fff;
    text-transform: uppercase;
  }

  @media (max-width: 850px) {
    svg,
    img {
      width: 200px;
    }
  }
`;

export const Content = styled.div`
  max-width: 800px;
  width: 100%;
  height: 402px;
  border-radius: 10px;
  margin-bottom: 178px;
  background-color: rgb(0, 0, 0, 0.7);
  position: relative;

  display: flex;

  .image-main {
    border-radius: 10px;
  }

  .weapon-img {
    position: absolute;
    bottom: -150px;
    left: -120px;
  }

  @media (max-width: 850px) {
    max-width: 400px;
    height: auto;
    flex-direction: column;

    .content-main {
      width: 100%;
      height: 193px !important;

      .image-main {
        background-size: contain;
        background-position: auto;
        width: 100%;

        height: 193px;
      }
    }

    .weapon-img {
      top: 0;
      left: 140px;
      max-width: 330px;
      width: 100%;
    }
  }

  @media (max-width: 540px) {
    margin: 0 1rem;
  }
`;

export const Info = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0 10px 10px 0;
  padding: 0 45px;

  display: flex;
  align-items: center;
  justify-items: center;

  @media (max-width: 850px) {
    padding: 50px 25px;
  }
`;

export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;

  p {
    padding: 0 10px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: ${(props) => props.theme.font.weight.normal};
  }

  @media (max-width: 850px) {
    p {
      font-size: 18px;
    }
  }
`;

export const SearchResult = styled.div``;

export const Filter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  margin-top: 22px;
  width: 100%;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  cursor: pointer;

  .filter {
    font-weight: 900;
  }

  span {
    color: #fff;
    font-size: 14px;
  }
`;

export const ArrowBack = styled.div`
  margin-top: 108px;
  margin-bottom: 79px;
  display: flex;
  max-width: 592px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 11px;
  cursor: pointer;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }

  @media (max-width: 650px) {
    padding-right: 2rem;
    padding-left: 2rem;
    margin-top: 37px;
    margin-bottom: 37px;
  }
`;
