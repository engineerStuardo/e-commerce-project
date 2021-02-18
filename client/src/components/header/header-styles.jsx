import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-bottm: 10px;
  }
`;

export const HomeText = styled.div`
  position: absolute;
  top: 62px;
  left: 33px;

  @media screen and (max-width: 800px) {
    top: 37px;
    left: 10px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  position: relative;
  top: -18px;

  @media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
    top: -10px;
  }

  &:hover {
    animation: logoOnFocus 1.3s ease-in-out 1;
  }

  @keyframes logoOnFocus {
    0% {
      transform: scale(1.2);
      opacity: 0.1;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px){
    width: 80%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid currentColor;
    opacity: 0.5;
  }
`;
