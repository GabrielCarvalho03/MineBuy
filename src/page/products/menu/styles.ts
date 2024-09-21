import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-content: end;
  justify-content: end;
  margin: 2rem 0 0 -3rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  font-weight: 400;
  font-family: "Inter", sans-serif;
`;

export const WappperFilter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const CustomInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 2px;
  padding: 0 10px;
  border: none;
  outline: none;
`;
