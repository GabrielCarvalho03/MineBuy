import styled from "styled-components";

type WapperImageProps = {
  imageUrl?: string;
};

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Content = styled.div`
  width: 100%;
  height: 140%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -10rem;
  overflow-x: hidden;
`;

export const WapperImage = styled.div<WapperImageProps>`
  width: 100%;
  height: 45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }
`;

export const WapperText = styled.div`
  width: 80%;
  position: absolute;
  z-index: 9999;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  display: flex;
  gap: 3rem;
  justify-content: space-between;

  @media (max-width: 675px) {
    flex-direction: column;
    top: 40%;
  }
`;

export const Text = styled.h1`
  font-size: 2rem;
  font-weight: 500;
`;

export const BoxTextOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 50%;

  @media (max-width: 675px) {
    max-width: 100%;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
`;
