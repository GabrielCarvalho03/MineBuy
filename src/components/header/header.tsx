import { useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/icons/LogoIcon";
import * as S from "./styles";

type ContainerProps = {
  isScrolled?: boolean;
};

export const Header = ({ isScrolled }: ContainerProps) => {
  const navigate = useNavigate();

  return (
    <S.Container isScrolled={isScrolled}>
      <S.WapperText>
        <S.Text onClick={() => navigate("/")} isScrolled={isScrolled}>
          Home
        </S.Text>
        <S.Text isScrolled={isScrolled} onClick={() => navigate("/products")}>
          Builds
        </S.Text>
        <S.Text onClick={() => navigate("/Favorites")} isScrolled={isScrolled}>
          Favorites
        </S.Text>
      </S.WapperText>

      <S.WapperLogo>
        <LogoIcon />
      </S.WapperLogo>
    </S.Container>
  );
};
