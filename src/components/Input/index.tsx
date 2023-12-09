import React, { InputHTMLAttributes } from 'react';
import * as S from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<InputProps> = ({ label, value, ...rest }) => {
  return (
    <S.Wrapper>
      {label && <label>{label}</label>}
      <input type="text" value={value} {...rest} />
    </S.Wrapper>
  );
};
