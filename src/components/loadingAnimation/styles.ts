import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
  z-index: 2;
`;

export const circle = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  z-index: 2;
  border-radius: 50%;
  border: 10px solid #f3f3f3;
  background-color: black;
`;

export const title = styled.h1`
  font-size: 1.5rem;
  color: white;
  position: absolute;
  left: 50%;
  z-index: 3;
  opacity: 0;
`;

export const BoxHeader = styled.div`
  z-index: 1;
`;

export const BoxSword = styled.div`
  opacity: 0;
  width: 50px;
  position: absolute;
  left: 45%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
