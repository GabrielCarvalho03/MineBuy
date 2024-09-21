import { useNavigate } from "react-router-dom";
import Icon3D from "../../assets/icons/3dIcon";
import { CategoryCard } from "./category-card/category-card";
import { CardList } from "./list";
import * as S from "./styles";
import MoreIcon from "../../assets/icons/moreIcon";

export const CategorySession = () => {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.MasterTitle>choose your type of construction</S.MasterTitle>

      <S.FirsInfo>
        <Icon3D   />
        <S.WapperText>
          <S.Title>find the best builds for your server</S.Title>
          <S.Text>
            Find the best builds for your server by analyzing workload,
            optimizing hardware and software, improving performance, and
            ensuring reliable security measures.
          </S.Text>
        </S.WapperText>
      </S.FirsInfo>

      <S.WapperCategoryCard>
        {CardList.map((item) => (
          <CategoryCard
            onClick={() => navigate(`/products/${item.id}`)}
            key={item.id}
            data={item}
          />
        ))}
      </S.WapperCategoryCard>

      <S.BoxButton>
        <S.Button onClick={() => navigate("/products")}>
          <MoreIcon /> See all builds
        </S.Button>
      </S.BoxButton>
    </S.Container>
  );
};
