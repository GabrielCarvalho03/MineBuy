import * as S from "./styles";

type CardProps = {
  title: string;
  image: string;
  description: string;
};

type CategoryCardProps = {
  data: CardProps;
  onClick?: () => void;
};

export const CategoryCard = ({ data, onClick }: CategoryCardProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.WapperImage imageUrl={data.image}></S.WapperImage>
      <S.TitleCategory>{data.title}</S.TitleCategory>
      <S.Text>{data.description}</S.Text>
    </S.Container>
  );
};
