import styled from 'styled-components';

export const CollectionsOverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  animation: show 1.3s ease-in-out 1;

  @keyframes show {
    0% {
      transform: scale(1.05);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;
