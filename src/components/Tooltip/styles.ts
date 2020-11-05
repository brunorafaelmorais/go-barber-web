import styled from 'styled-components';

export const Container = styled.span`
  width: 160px;
  text-align: center;
  position: absolute;
  line-height: 1.5;
  font-size: 12px;
  border-radius: ${({ theme }) => theme.radius};
  color: ${({ theme }) => theme.colors.primaryContrast};
  padding: 8px;
  bottom: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);

  &,
  &:before {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &:before {
    content: '';
    width: 12px;
    height: 12px;
    transform: rotate(45deg);
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    bottom: -5px;
    border-radius: 3px;
  }
`;
