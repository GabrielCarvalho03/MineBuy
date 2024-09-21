import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: white;
  padding-top: 2rem;
`;

export const FirsInfo = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10px;

  @media (max-width: 560px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const MasterTitle = styled.h1`
  font-size: 1.5rem;
  text-align: center;
`;

export const Text = styled.h1`
  font-size: 1.5rem;
  margin-top: 10px;
  font-weight: 200;
  color: rgba(0, 0, 0, 0.5);

  @media (max-width: 560px) {
    margin-top: 1.5rem;
  }
`;

export const WapperText = styled.div`
  max-width: 40%;

  @media (max-width: 560px) {
    max-width: 100%;
    text-align: center;
    margin-bottom: 2rem;
  }
`;

export const WapperCategoryCard = styled.div`
  width: 95%;
  margin: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 760px) {
    justify-content: center;
  }

  @media (max-width: 420px) {
    justify-content: start;
  }
`;

export const BoxButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  width: 22rem;
  border: none;
  height: 40px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: purple;
  border-radius: 5px;
  color: white;
  font-family: "Inter", sans-serif;
  margin-bottom: 2rem;
  cursor: pointer;

  @media (max-width: 520px) {
    width: 350px;
  }
`;
