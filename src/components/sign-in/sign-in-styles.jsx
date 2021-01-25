import styled from 'styled-components';
import GoogleButton from 'react-google-button';

export const SignInContainer = styled.div`
  width: 380px;
  display: flex;
  flex-direction: column;
`;

export const SignInTitle = styled.h2`
  margin: 10px 0;
`;

export const ButtonsBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const GoogleButtonStyles = styled(GoogleButton)`
  margin-left: 10px;
`;
