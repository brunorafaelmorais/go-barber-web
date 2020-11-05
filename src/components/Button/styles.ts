import styled, { css } from 'styled-components';

export interface ContainerProps {
  fullWidth?: boolean;
  transparent?: boolean;
  transparentPrimary?: boolean;
}

export const Container = styled.button<ContainerProps>`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius};
  border: 0;
  outline: none;
  font-weight: 500;
  padding: 0 ${({ theme }) => theme.gutterLg};
  font-size: 16px;
  letter-spacing: 1.25px;
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.backgroundShade};
  line-height: 1.5;
  transition: background, opacity 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryShade};
  }

  > svg {
    margin-right: 10px;
  }

  & + button {
    margin-top: ${({ theme }) => theme.gutterSm};
  }

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
      justify-content: center;
    `};

  ${(props) =>
    props.transparent &&
    css`
      color: #fff;

      &,
      &:hover {
        background-color: transparent;
      }

      &:hover {
        opacity: 0.8;
      }
    `};

  ${(props) =>
    props.transparentPrimary &&
    css`
      color: ${({ theme }) => theme.colors.primary};

      &,
      &:hover {
        background-color: transparent;
      }

      &:hover {
        opacity: 0.8;
      }
    `};
`;
