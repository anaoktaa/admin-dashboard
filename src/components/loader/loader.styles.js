import styled from 'styled-components';

export const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: calc(100vh - 60px);
  background-color: #f0f2f5;
  z-index: 19000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
`;
