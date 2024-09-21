import styled from "styled-components";

type StyledProps = {
  theme?: "End" | "Halloween" | "Fantasy" | "Greek / Roman" | undefined;
};

export const Container = styled.div`
  max-width: 300px;
  min-height: 400px;
  max-height: 400px;
  margin: 2rem 0rem;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const BoxTheme = styled.div<StyledProps>`
  max-width: 100px;
  min-width: 100px;
  background-color: ${(props) =>
    props.theme == "End"
      ? "#46285D"
      : props.theme == "Halloween"
      ? "#FFA500"
      : props.theme == "Fantasy"
      ? "#325F65"
      : "#0000FF"};
  display: flex;
  align-self: center;
  color: #fff;
  justify-content: center;
  border-radius: 5px;
  padding: 5px;
  font-size: 11px;
`;

export const BoxImage = styled.div`
  padding: 10px 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`;

export const Description = styled.h1`
  font-size: 0.8rem;
  font-weight: 300;
  color: #a5a5a5;
`;

export const WapperText = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 0 0 5px 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #333;
  }
`;
