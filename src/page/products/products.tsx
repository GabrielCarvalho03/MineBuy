import { useParams } from "react-router-dom";
import { CardProduct } from "../../components/card-Product/card-product";
import { ListProducts, ListType } from "./lists-products/list-products";
import * as S from "./styles";
import { useState } from "react";
import { Footer } from "../../components/Footer";

export const Products = () => {
  const { idCategory } = useParams();
  const [search, setSearch] = useState("");

  const listProductsForCategory = !idCategory
    ? ListProducts
    : ListProducts.filter((item) => item.category === Number(idCategory));

  const listProductsForTheme = (item: ListType) => {
    if (search !== "") {
      if (
        item.theme.toLowerCase().includes(search.toLowerCase()) ||
        item.name.toLowerCase().includes(search.toLowerCase())
      ) {
        return item;
      }
    } else {
      return item;
    }
  };

  return (
    <S.Container>
      <S.WapperProducts>
        <S.WapperFilter>
          <S.CustomInput
            type="text"
            placeholder="Filter by theme or keywords "
            onChange={(e) => setSearch(e.target.value)}
          />
        </S.WapperFilter>

        <S.WapperList>
          {listProductsForCategory.filter(listProductsForTheme).map((item) => (
            <CardProduct key={item.id} item={item} />
          ))}
        </S.WapperList>
      </S.WapperProducts>
      <Footer />
    </S.Container>
  );
};
