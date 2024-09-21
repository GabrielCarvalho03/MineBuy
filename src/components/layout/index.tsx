import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import * as S from "./styles"; // Importar os estilos

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <S.PageContainer>
      <Header isScrolled={isScrolled} />
      <S.Content>
        <Outlet />
      </S.Content>
    </S.PageContainer>
  );
};

export default Layout;
