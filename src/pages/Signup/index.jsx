// 2번 : 회원가입

import React, { useState } from "react";

import {
  Dev,
  StyleHeroImageBox,
  StyleHeroImage,
  StyleSignupBox,
  Style_Signup_Box_Img,
  Style_Signup_Input_Box,
  EyeIcon,
} from "../../styles/signup";

import HeroImage from "../../assets/img/Signup.png";
import Logo from "../../assets/img/umunjeong-b.png";

import Auth_input from "../../components/auth_input/auth_input";
import Auth_Button from "../../components/auth_button/auth_button";

import showPassword from "../../assets/img/signin_Passeord_Show.png";
import hidepassword from "../../assets/img/sinin_password_hide.png";

function Signup_signup() {
  const [showPasswordType, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <Dev>
      <StyleHeroImageBox>
        <StyleHeroImage src={HeroImage}></StyleHeroImage>
      </StyleHeroImageBox>

      <StyleSignupBox>
        <Style_Signup_Box_Img src={Logo}></Style_Signup_Box_Img>
        <Style_Signup_Input_Box>
          <Auth_input name="email" type="text"></Auth_input>
          <div
            style={{
              position: "relative",
              width: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Auth_input
              name="password"
              type={showPasswordType ? "text" : "password"}
            ></Auth_input>
            <EyeIcon onClick={togglePasswordVisibility}>
              <img src={showPasswordType ? showPassword : hidepassword}></img>
            </EyeIcon>
          </div>
          <Auth_Button name="회원가입" type="signup"></Auth_Button>
        </Style_Signup_Input_Box>
      </StyleSignupBox>
    </Dev>
  );
}

export default Signup_signup;
