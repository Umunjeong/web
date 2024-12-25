import {
  StyleHeroImageBox,
  StyleHeroImage,
  StyleFirstBox,
  Dev,
  Style_First_Box_Img,
  Style_First_Button,
  Style_First_Button_Box,
} from "../../../styles/firstPage";

import HeroImage from "../../../assets/img/FirstPage.png";
import Logo from "../../../assets/img/umunjeong-b.png";

function FirstPage() {
  return (
    <Dev>
      <StyleHeroImageBox>
        <StyleHeroImage src={HeroImage}></StyleHeroImage>
      </StyleHeroImageBox>

      <StyleFirstBox>
        <Style_First_Box_Img src={Logo}></Style_First_Box_Img>
        <Style_First_Button_Box>
          <Style_First_Button>로그인</Style_First_Button>
          <Style_First_Button>회원가입</Style_First_Button>
        </Style_First_Button_Box>
      </StyleFirstBox>
    </Dev>
  );
}

export default FirstPage;
