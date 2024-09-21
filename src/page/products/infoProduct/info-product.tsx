import { OverView } from "../details/overView/overView";
import * as S from "./styles";
import { useEffect, useState } from "react";
import HeartOutilinedIcon from "../../../assets/icons/HeartOutilinedIcon";
import HeartFellingIcon from "../../../assets/icons/HeartFellingIcon";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import { ListType } from "../lists-products/list-products";

type overViewType = {
  objProduct: ListType | undefined;
};

export const InfoProduct = ({ objProduct }: overViewType) => {
  const { id } = useParams();
  const ExistCookie = JSON.parse(Cookies.get("favoritesBuildsMine") || "[]");

  const [isFavorite, setIsFavorite] = useState(
    ExistCookie.includes(objProduct?.id) ? true : false
  );

  const handleFavorite = (id: number) => {
    if (isFavorite) {
      const newCookie = ExistCookie.filter((item: any) => item.id !== id);
      Cookies.set("favoritesBuildsMine", JSON.stringify(newCookie));
      return setIsFavorite(false);
    }
    Cookies.set(
      "favoritesBuildsMine",
      JSON.stringify([...ExistCookie, { id }])
    );
    setIsFavorite(true);
  };

  useEffect(() => {
    const CookieFavoriteBuild = JSON.parse(
      Cookies.get("favoritesBuildsMine") || "[]"
    );
    const existBuildInCookie = CookieFavoriteBuild?.find(
      (item: any) => item.id === Number(id)
    );
    if (existBuildInCookie) {
      setIsFavorite(true);
    }
  }, []);
  return (
    <S.WapperText>
      <S.TitleDescription>Build OverView</S.TitleDescription>
      <S.Description>{objProduct?.overViewText}</S.Description>

      <S.WapperOverView>
        {objProduct?.carecteristics?.map((item) => (
          <OverView
            title={item.title}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </S.WapperOverView>
      <S.Button onClick={() => handleFavorite(objProduct?.id ?? 0)}>
        {isFavorite ? "Remove to favorites" : "Add to favorites"}{" "}
        {isFavorite ? <HeartFellingIcon /> : <HeartOutilinedIcon />}
      </S.Button>
    </S.WapperText>
  );
};
