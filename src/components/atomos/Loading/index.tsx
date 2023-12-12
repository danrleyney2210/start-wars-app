import Load from "../../../assets/svg/load.svg";
import * as S from "./styles";

export function Loading() {
  return (
    <S.Wrapper>
      <img src={Load} alt="Loagin" width={100} />
      <span>Carregando...</span>
    </S.Wrapper>
  );
}
