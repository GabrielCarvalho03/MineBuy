import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: #cfcdcd;
  overflow-y: auto;
`;

export const WapperProducts = styled.div`
  width: 100%;
  padding: 3rem 0;
`;

export const WapperList = styled.div`
  width: 100%;
  overflow-x: hidden;
  padding: 3rem 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  display: flex;
  justify-content: space-around;
`;

export const CustomInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 2px;
  padding: 0 10px;
  border: none;
  outline: none;
`;

export const WapperFilter = styled.div`
  width: 100%;
  display: flex;
  align-content: end;
  justify-content: end;
  margin: 2rem 0 0 -3rem;
`;
