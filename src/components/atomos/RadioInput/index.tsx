import React, { ChangeEvent, InputHTMLAttributes } from "react";

import Arrow from "../../../assets/icons/arrowDown.svg";
import * as S from "./styles";

interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
  text: string;
  name: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

export const RadioInput: React.FC<IRadioProps> = ({ text, name, onChange, checked }) => {
  return (
    <S.Wrapper>
      <input
        type="radio"
        id={text}
        name={name}
        value={text}
        onChange={onChange}
        checked={checked}
      />
      <img src={Arrow} alt="Arrow Icon" />
      <label htmlFor={text}>{text}</label>
    </S.Wrapper>
  );
};
