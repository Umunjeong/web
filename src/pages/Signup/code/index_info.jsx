// 1번 : 유저정보 입력

import React from "react";

import {
  Dev,
  StyleHeroImageBox,
  StyleHeroImage,
  StyleSignupBox,
  Style_Signup_Box_Img,
  Style_Signup_Input_Box,
} from "../../../styles/signup";

import HeroImage from "../../../assets/img/Signup.png";
import Logo from "../../../assets/img/umunjeong-b.png";

import Auth_input from "../../../components/auth_input/auth_input";
import Auth_Button from "../../../components/auth_button/auth_button";

function Signup_info() {
  return (
    <Dev>
      <StyleHeroImageBox>
        <StyleHeroImage src={HeroImage}></StyleHeroImage>
      </StyleHeroImageBox>

      <StyleSignupBox>
        <Style_Signup_Box_Img src={Logo}></Style_Signup_Box_Img>
        <Style_Signup_Input_Box>
          <Auth_input name="name" type="text"></Auth_input>
          <Auth_input name="email" type="password"></Auth_input>
          <Auth_Button name="다음" type="signup_1"></Auth_Button>
        </Style_Signup_Input_Box>
      </StyleSignupBox>
    </Dev>
  );
}

export default Signup_info;
