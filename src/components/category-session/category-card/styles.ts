import styled from "styled-components";

type WapperImageProps = {
  imageUrl?: string;
};

export const Container = styled.div`
  width: 350px;
  height: 500px;
  background-color: #ECECEC;
  border-radius: 20px;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
`;

export const TitleCategory = styled.h1`
  font-size: 1rem;
  padding: 1rem 0;
  font-weight: 700;
`;

export const Text = styled.p`
  padding: 0 1rem;
  color: #c1c1c1;
`;

export const WapperImage = styled.div<WapperImageProps>`
  width: 100%;
  height: 15rem;
  display: flex;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  position: relative;
`;
