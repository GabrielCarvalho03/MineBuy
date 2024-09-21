import React from "react";
import * as S from "./styles";

type overViewType = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

export const OverView = ({ title, description, icon }: overViewType) => {
  return (
    <S.Container>
      <div>{icon}</div>
      <S.Text>
        {title} :{" "}
        <span style={{ color: "#757474", fontWeight: 300 }}>{description}</span>
      </S.Text>
    </S.Container>
  );
};
