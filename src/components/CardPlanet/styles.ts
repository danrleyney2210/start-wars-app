import styled from "styled-components";

export const Wrapper = styled.div`
  @media (max-width: 648px) {
    margin: 0 2rem;
  }
`;

export const Contianer = styled.div`
  max-width: 592px;
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  padding: 24px;
`;

export const Header = styled.div`
  display: flex;
  gap: 38px;
  margin-bottom: 24px;
`;

export const ContentPlanet = styled.div`
  display: flex;
  gap: 11px;

  .planet-text {
    display: flex;
    flex-direction: column;

    p {
      font-size: 14px;
    }

    h3 {
      font-size: 18px;
      font-weight: 900;
      text-transform: uppercase;
    }
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;

  > p {
    font-weight: 700;
  }
`;

export const Card = styled.div`
  width: 100%;
  background-color: #f1f1f1;
  padding: 16px 16px 30px 16px;
  margin-bottom: 9px;
  border-radius: 8px;
`;

export const Title = styled.div`
  width: 100%;
  padding-bottom: 10px;
  display: flex;
  /* align-items: flex-end; */
  gap: 5px;
  border-bottom: 1px solid #909090;

  p {
    font-weight: 700;
  }
`;

export const People = styled.div`
  margin-top: 18px;
  width: 100%;

  p {
    font-size: 14px;
  }
`;
