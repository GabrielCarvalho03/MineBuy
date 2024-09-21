import { useNavigate } from "react-router-dom";
import * as S from "./styles";

type CardProductType = {
  item: {
    id: number;
    name: string;
    image: string;
    description: string;
    theme: "End" | "Halloween" | "Fantasy" | "Greek / Roman" | undefined;
  };
};

export const CardProduct = ({ item }: CardProductType) => {
  const navigate = useNavigate();
  return (
    <S.Container onClick={() => navigate(`/products/selectBuild/${item.id}`)}>
      
      <S.BoxImage>
        <img src={item.image} width={"90%"} style={{ borderRadius: "10px" }} />
      </S.BoxImage>
      <S.BoxTheme theme={item.theme}>{item.theme}</S.BoxTheme>

      <S.WapperText>
        <S.Title>{item.name}</S.Title>
        <S.Description>
          {item.description.substring(0, 120) + "..."}
        </S.Description>
      </S.WapperText>
    </S.Container>
  );
};
