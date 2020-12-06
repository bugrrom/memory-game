import styled from "@emotion/styled";

export const Container = styled.div`
  width: calc(16.6% - 10px);
  height: calc(16.6% - 10px);
  margin: 5px;
  position: relative;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  transform: scale(1);
  transform-style: preserve-3d;
  transition: transform 0.5s;
  cursor: pointer;
  &:active {
    transform: scale(0.9);
    transition: transform 0.2s;
  }
`;

export const FrontFace = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px;
`;

export const BackEnd = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 5px;
  background: linear-gradient(
    329deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(242, 108, 108, 1) 50%,
    rgba(252, 176, 69, 1) 100%
  );
`;
