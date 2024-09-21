import { useEffect, useState } from "react";
import { CardProduct } from "../../../components/card-Product/card-product";
import { ListProducts, ListType } from "../lists-products/list-products";
import * as S from "./styles";
import Cookies from "js-cookie";

export const Favorites = () => {
  const [newListProducts, setNewListProducts] = useState([] as ListType[]);
  const ProductInCookie = JSON.parse(
    Cookies.get("favoritesBuildsMine") || "[]"
  );

  const handleNewProducts = () => {
    let aux: any = [];
    for (let item of ProductInCookie) {
      const existFavorite = ListProducts.find(
        (product) => product.id === item.id
      );
      if (
        existFavorite &&
        !aux.some((product: ListType) => product.id === existFavorite.id)
      ) {
        aux.push(existFavorite);
      }
    }
    setNewListProducts(aux);
  };
  useEffect(() => {
    handleNewProducts();
  }, []);

  return (
    <S.Container>
      <S.WapperProducts>
        {newListProducts.map((item) => (
          <CardProduct key={item.id} item={item} />
        ))}
      </S.WapperProducts>
    </S.Container>
  );
};
