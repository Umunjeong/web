import {
  StyleHeroImageBox,
  StyleHeroImage,
  StyleFirstBox,
  Dev,
  Style_First_Box_Img,
  Style_First_Button,
  Style_First_Button_Box,
} from "../../styles/firstPage.js";
import { useEffect } from "react";

import useNavigation from "../../router/router.js";

import HeroImage from "../../Assets/Img/FirstPage/Img_FirstPage_Hero.png";
import Logo from "../../Assets/Img/Logos/Img_umunjeong-Black_Logo.png";

function FirstPage() {
  const { navigateSignin, navigateSignup, navigateHome } = useNavigation();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    if (accessToken && refreshToken) {
      navigateHome();
    }
  }, []);

  return (
    <Dev>
      <StyleHeroImageBox>
        <StyleHeroImage src={HeroImage}></StyleHeroImage>
      </StyleHeroImageBox>

      <StyleFirstBox>
        <Style_First_Box_Img src={Logo}></Style_First_Box_Img>
        <Style_First_Button_Box>
          <Style_First_Button onClick={() => navigateSignin()}>
            로그인
          </Style_First_Button>
          <Style_First_Button onClick={() => navigateSignup()}>
            회원가입
          </Style_First_Button>
        </Style_First_Button_Box>
      </StyleFirstBox>
    </Dev>
  );
}

export default FirstPage;
