import styled, { css } from 'styled-components';

interface TypoProps {
  fullWidth?: boolean;
  center?: boolean;
}

const TypoBase = styled.span<TypoProps>`
  ${(props) =>
    props.fullWidth &&
    css`
      display: block;
      width: 100%;
    `};

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `};
`;

export const Headline1 = styled(TypoBase).attrs({ as: 'h1' })`
  font-size: 96px;
  letter-spacing: -1.5px;
`;

export const Headline2 = styled(TypoBase).attrs({ as: 'h2' })`
  font-size: 60px;
  letter-spacing: -0.5px;
`;

export const Headline3 = styled(TypoBase).attrs({ as: 'h3' })`
  font-size: 48px;
`;

export const Headline4 = styled(TypoBase).attrs({ as: 'h4' })`
  font-size: 34px;
  letter-spacing: 0.25px;
`;

export const Headline5 = styled(TypoBase).attrs({ as: 'h5' })`
  font-size: 24px;
`;

export const Headline6 = styled(TypoBase).attrs({ as: 'h6' })`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15px;
`;

export const Subtitle1 = styled(TypoBase)`
  font-size: 16px;
  letter-spacing: 0.15px;
`;

export const Subtitle2 = styled(TypoBase)`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.1px;
`;

export const Body1 = styled(TypoBase)`
  font-size: 16px;
  letter-spacing: 0.5px;
`;

export const Body2 = styled(TypoBase)`
  font-size: 14px;
  letter-spacing: 0.25px;
`;

export const Button = styled(TypoBase)`
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1.25px;
`;

export const Caption = styled(TypoBase)`
  font-size: 12px;
  letter-spacing: 0.4px;
`;

export const Overline = styled(TypoBase)`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
`;
