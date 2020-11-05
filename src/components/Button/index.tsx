import React, { ButtonHTMLAttributes } from 'react';

import * as S from './styles';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    S.ContainerProps {}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <S.Container type="button" {...rest}>
      {children}
    </S.Container>
  );
};

export default Button;
