import styled, { css } from "styled-components";

type StyledProps = {
  isTransitioning?: boolean;
};

type WapperImageProps = {
  imageUrl?: string;

  theme?: "End" | "Halloween" | "Fantasy" | "Greek / Roman" | undefined;
};

export const Container = styled.div`
  width: 100%;
  height: 100dvh;
  overflow: hidden;
  background-color: #fff;
`;

export const WapperImage = styled.div<WapperImageProps>`
  width: 100%;
  height: 100%;
  display: flex;

  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -0.5rem;
  background-color: #fff;
`;

export const WapperDetails = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: -1rem;
  background-color: #fff;
  padding-bottom: 6rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  text-align: center;
  margin: 2rem 0;
`;

export const BoxDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 2rem;
  margin: 1rem 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CarouselImage = styled.img`
  width: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const WapperImageSlider = styled.div`
  position: absolute;
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

export const BoxSlider = styled.div<StyledProps>`
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 10px;
  gap: 1rem;
  transition: 0.3s ease-in-out; /* Transição suave para a margem superior */
  ${(props) =>
    props.isTransitioning &&
    css`
      margin-top: 10px; /* Ajuste a margem superior durante a transição */
    `}
`;

export const BoxImage = styled.div`
  cursor: pointer;
`;

export const MainImage = styled.img<StyledProps>`
  border-radius: 10px;
  display: block;
  width: 100%;
  height: 28rem;
  box-shadow: none;
  transition: opacity 0.5s ease-in-out;
  opacity: ${(props) => (props.isTransitioning ? 0 : 1)};

  @media (max-width: 768px) {
    height: 18rem;
  }
`;

export const WapperText = styled.div`
  width: 30%;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  right: 2rem;
  overflow-y: hidden;
  border-radius: 5px;
`;

export const TitleDescription = styled.h1`
  font-size: 22px;
  text-align: center;
  font-weight: 500;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #c1c1c1;
  text-align: justify;
  margin: 1rem 0;
`;

export const WapperDescription = styled.div`
  margin: 1rem 0;
`;

export const Text = styled.h1`
  font-size: 23px;
  margin: 1rem 0;
  font-weight: 500;
`;

export const Button = styled.button`
  margin: 1rem 0;
  width: 100%;
  height: 50px;
  border-radius: 10px;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  border: 1px solid transparent;
  font-size: 18px;
  font-family: "Inter", sans-serif;
`;

export const WapperOverView = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TitleHero = styled.h1`
  font-size: 4rem;
  font-weight: 500;
  color: #fff;

  @media (max-width: 590px) {
    font-size: 2rem;
  }
`;

export const BoxTheme = styled.div<WapperImageProps>`
  max-width: 300px;
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
  font-size: 15px;
`;

export const BoxCenterHero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
