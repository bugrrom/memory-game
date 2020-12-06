import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperMenu = styled.div`
  width: 200px;
  height: 600px;
  display: flex;
  margin-right: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperGame = styled.div`
  width: 640px;
  height: 640px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  perspective: 1000px;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  font-size: 30px;
  padding: 5px 15px;
  transition-duration: 0.4s;
  background-color: white;
  color: black;
  border: none;
  cursor: pointer;
  margin 5px;
  &:hover {
    background-color: #2a2b2b;
    color: white;
    border: none;
  }
  &:active {
    border: none;
  }
  &:disabled {
    opacity: 0.5;
    cursor: context-menu;
  }
`;

export const WinText = styled.p`
  font-size: 30px;
  color: white;
`;

export const StartGameText = styled.p`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;
