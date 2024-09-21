import { useEffect, useState, useRef } from "react";
import { CategorySession } from "../../components/category-session/category-session";
import { Hero } from "../../components/hero/hero";
import * as S from "./styles";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/Footer";

export const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && containerRef.current.scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <S.Container ref={containerRef}>
      <Header isScrolled={isScrolled} />
      <Hero />
      <CategorySession />
      <Footer />
    </S.Container>
  );
};
