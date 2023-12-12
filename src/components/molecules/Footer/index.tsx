import Logo from "../../../assets/svg/logo.svg";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Footer>
      <p>STARUARS LTDA | CNPJ: 77.777.777/0007-07 | 2023 | Todos os direitos reservados</p>
      <S.Divider />
      <img src={Logo} alt="" />
    </S.Footer>
  );
};
