import styled, { css } from "styled-components";

type ContainerProps = {
  isScrolled?: boolean;
};

export const Container = styled.div<ContainerProps>`
  width: 100%;
  padding: 0rem 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  position: fixed;
  z-index: 9999;

  transition: background-color 0.5s ease-in-out;

  backdrop-filter: blur(3px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);

  ${(props) =>
    props.isScrolled
      ? css`
          background-color: white;
          backdrop-filter: blur(3px);
        `
      : css`
          background-color: transparreent;
        `}
`;

export const Text = styled.h1<ContainerProps>`
  font-size: 0.8rem;
  font-weight: 400;
  cursor: pointer;
  transition: 0.3s;
  color: ${(props) => (props.isScrolled ? "black " : "white")};
  &:hover {
    transform: scale(1.1);
  }
`;

export const WapperText = styled.div`
  display: flex;
  gap: 1rem;
`;

export const WapperLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
