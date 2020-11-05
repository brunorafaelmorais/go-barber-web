import styled, { css } from 'styled-components';

import * as T from '../Tooltip/styles';

interface ContainerProps {
  hasError?: boolean;
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: ${({ theme }) => theme.radius};
  background-color: ${(props) => props.theme.colors.backgroundShade};
  position: relative;
  height: 50px;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
  transition: border-color 0.2s;

  & + div,
  & + button {
    margin-top: ${({ theme }) => theme.gutterSm};
  }

  > svg {
    margin-left: ${({ theme }) => theme.gutterMd};
  }

  > input {
    width: 100%;
    height: inherit;
    background-color: transparent;
    padding: 0 ${({ theme }) => theme.gutterMd};
    outline: none;
    border: 0;
    line-height: 1.5;
    flex: 1;
  }

  &,
  > input::placeholder {
    color: ${(props) => props.theme.colors.backgroundTint};
  }

  ${(props) =>
    props.isFocused &&
    css`
      border-color: ${props.theme.colors.primary};

      > svg {
        color: ${props.theme.colors.primary};
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      > svg {
        color: ${props.theme.colors.primary};
      }
    `}
`;

export const Error = styled.div`
  position: relative;
  color: #f44336;
  margin-right: ${({ theme }) => theme.gutterMd};

  &:not(:hover) {
    ${T.Container} {
      display: none;
    }
  }
`;
