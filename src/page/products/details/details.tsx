import { useParams } from "react-router-dom";
import BarHero from "../../../assets/images/barHero";
import { ListProducts } from "../lists-products/list-products";
import * as S from "./styles";
import { useState } from "react";
import { Footer } from "../../../components/Footer";
import { InfoProduct } from "../infoProduct/info-product";

export const DetailsProduct = () => {
  const { id } = useParams();
  const objProduct = ListProducts.find((item) => item.id === Number(id));
  const [currentImage, setCurrentImage] = useState(
    objProduct?.listImage && objProduct?.listImage[0]
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleImageClick = (image: string) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImage(image);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <>
      <S.Container>
        <S.WapperImage imageUrl={objProduct?.image}>
          <S.BoxCenterHero>
            <S.TitleHero>{objProduct?.name}</S.TitleHero>
            <S.BoxTheme theme={objProduct?.theme}>
              {objProduct?.theme}
            </S.BoxTheme>
          </S.BoxCenterHero>
          <div style={{ position: "absolute", bottom: -5 }}>
            <BarHero />
          </div>
        </S.WapperImage>

        <S.Content>
          <S.Title>{objProduct?.name}</S.Title>
          <S.WapperDetails>
            <S.BoxDescription>
              <S.WapperImageSlider>
                <S.MainImage
                  src={currentImage}
                  alt=""
                  isTransitioning={isTransitioning}
                />

                <S.BoxSlider
                  isTransitioning={objProduct?.listImage && isTransitioning}
                >
                  {objProduct?.listImage?.map((image, index) => (
                    <S.BoxImage key={index}>
                      <img
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: 10,
                        }}
                        src={image}
                        alt=""
                        onClick={() => handleImageClick(image)}
                      />
                    </S.BoxImage>
                  ))}
                </S.BoxSlider>

                <S.WapperDescription>
                  {window.innerWidth <= 768 && (
                    <InfoProduct objProduct={objProduct} />
                  )}

                  <S.Text>Description</S.Text>
                  <S.Description>{objProduct?.description}</S.Description>

                  <div
                    style={{
                      width: window.innerWidth < 768 ? "100%" : "164%",
                      zIndex: 9999,
                      position: "absolute",
                    }}
                  >
                    <Footer />
                  </div>
                </S.WapperDescription>
              </S.WapperImageSlider>

              {window.innerWidth > 768 && (
                <InfoProduct objProduct={objProduct} />
              )}
            </S.BoxDescription>
          </S.WapperDetails>
        </S.Content>
      </S.Container>
    </>
  );
};
