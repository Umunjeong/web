import React from "react";

import {
  StyleHeroImageBox,
  StyleHeroImage,
  StyleSigninBox,
  Dev,
  Style_Signin_Box_Img,
  Style_Signin_Input_Box,
} from "../../../styles/signin";

import HeroImage from "../../../assets/img/Signin.png";
import Logo from "../../../assets/img/umunjeong-b.png";

import Auth_input from "../../../components/auth_input/auth_input";
import Auth_Button from "../../../components/auth_button/auth_button";

function Signin() {
  return (
    <Dev>
      <StyleHeroImageBox>
        <StyleHeroImage src={HeroImage}></StyleHeroImage>
      </StyleHeroImageBox>

      <StyleSigninBox>
        <Style_Signin_Box_Img src={Logo}></Style_Signin_Box_Img>
        <Style_Signin_Input_Box>
          <Auth_input name="email" type="text"></Auth_input>
          <Auth_input name="password" type="password"></Auth_input>
          <Auth_Button name="로그인" type="signin"></Auth_Button>
        </Style_Signin_Input_Box>
      </StyleSigninBox>
    </Dev>
  );
}

export default Signin;
