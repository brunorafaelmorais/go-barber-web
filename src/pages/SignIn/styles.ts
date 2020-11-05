import styled from 'styled-components';

import signInBg from '../../assets/images/sign-in-background.png';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const ContainerTitle = styled.div`
  margin-top: 60px;
  margin-bottom: ${(props) => props.theme.gutterLg};
`;

export const ColLeft = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;
  padding: 16px 32px;
  width: 100%;
  max-width: 700px;

  > form {
    max-width: 340px;
  }

  img {
    display: block;
    margin: 0 auto;
  }
`;

export const Background = styled.div`
  flex: 1;
  background-image: url(${signInBg});
  background-position: center center;
  background-size: cover;
`;
