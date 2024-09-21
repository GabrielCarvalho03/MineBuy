import { useEffect, useRef } from "react";
import * as S from "./styles";
import gsap from "gsap";
import Lottie from "lottie-react";
import SwordAnimation from "../../assets/lotties/swords-animation.json";

export const LoadingAnimation = () => {
  const tl = gsap.timeline();

  const circleRef = useRef(null);
  const titleref = useRef(null);
  const containerRef = useRef(null);
  const BoxSwordRef = useRef(null);

  const circleExit = () => {
    tl.to(circleRef.current, {
      scale: 0,
      duration: 1.5,
      ease: "power2.inOut",
    })
      .to(
        titleref.current,
        {
          opacity: 0,
          duration: 1,
        },
        "-=1"
      )
      .to(containerRef.current, {
        display: "none",
        overflowY: "auto",
      })
      .to(
        BoxSwordRef.current,
        {
          opacity: 0,
          duration: 0,
        },
        "-=1"
      );
  };

  useEffect(() => {
    tl.to(circleRef.current, {
      scale: 20,
      duration: 1.5,
      ease: "power2.inOut",
    })
      .to(titleref.current, {
        opacity: 1,
        duration: 1,
      })
      .to(
        BoxSwordRef.current,
        {
          opacity: 1,
          duration: 1,
        },
        "-=1"
      );

    setTimeout(() => {
      circleExit();
    }, 3000);
  }, []);

  return (
    <S.Container ref={containerRef}>
      <S.circle ref={circleRef} />
      <S.title ref={titleref}>Loading...</S.title>
      <S.BoxSword ref={BoxSwordRef}>
        <Lottie
          width={"20px"}
          height={"20px"}
          animationData={SwordAnimation}
          autoPlay
        />
      </S.BoxSword>
    </S.Container>
  );
};
