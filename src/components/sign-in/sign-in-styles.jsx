import styled from 'styled-components';
import GoogleButton from 'react-google-button';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 800px) {
    width: 99%;
  }
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    justify-content: flex-start;
  }
`;

export const GoogleButtonStyles = styled(GoogleButton)`
  margin-left: 10px;
  @media screen and (max-width: 800px) {
    flex-grow: 0;
  }
`;
