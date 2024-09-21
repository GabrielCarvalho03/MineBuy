import * as S from "./styles";
import Slider from "react-slick";
import BarHero from "../../assets/images/barHero";

export const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <S.Container>
      <Slider {...settings}>
        <S.WapperImage imageUrl="https://staticg.sportskeeda.com/editor/2022/05/380f0-16522436829497-1920.jpg">
          <S.WapperText>
            <S.BoxTextOne>
              <S.Text>
                The best buildings in the world gathered in one place: a
                spectacle of architecture and innovation
              </S.Text>
            </S.BoxTextOne>

            <div>
              <S.Text>Discover all the buildings now</S.Text>
              <S.Button>See now</S.Button>
            </div>
          </S.WapperText>
        </S.WapperImage>

        <S.WapperImage imageUrl="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/07/best-minecraft-builds-novigrad.jpg">
          <S.WapperText>
            <S.BoxTextOne>
              <S.Text>
                The best buildings in the world gathered in one place: a
                spectacle of architecture and innovation
              </S.Text>
            </S.BoxTextOne>

            <div>
              <S.Text>Discover all the buildings now</S.Text>
              <S.Button>See now</S.Button>
            </div>
          </S.WapperText>
        </S.WapperImage>
      </Slider>

      <S.Content>
        <BarHero color="" />
      </S.Content>
    </S.Container>
  );
};
