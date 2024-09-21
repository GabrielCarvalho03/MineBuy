import DiscordIcon from "../../assets/icons/discordIcon";
import FacebookIcon from "../../assets/icons/facebookIcon";
import InstagramIcon from "../../assets/icons/instagramIcon";
import LogoIcon from "../../assets/icons/LogoIcon";
import TwitterIcon from "../../assets/icons/twitterIcon";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <LogoIcon />
      <S.WapperLogo>
        <S.Title>MineBuy © 2024 All rights reserved.</S.Title>
      </S.WapperLogo>

      <S.WapperNewtworking>
        <S.Title>Follow us</S.Title>
        <S.BoxIcons>
          <FacebookIcon />
          <InstagramIcon />
          <DiscordIcon />
          <TwitterIcon />
        </S.BoxIcons>
      </S.WapperNewtworking>
    </S.Container>
  );
};
