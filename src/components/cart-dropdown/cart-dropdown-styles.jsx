import styled from 'styled-components';

import CustomButton from '../custom-button/custom-button-component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
  animation: show 0.5s ease-in-out 1;

  @keyframes show {
    0% {
      transform: scale(1.2);
      opacity: 0;
      border: 0.2 solid black;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const CartDropdownButton = styled(CustomButton)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;
