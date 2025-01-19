import React, { useState } from "react";

import {
  StyleHeroImageBox,
  StyleHeroImage,
  StyleSigninBox,
  Dev,
  Style_Signin_Box_Img,
  Style_Signin_Input_Box,
  EyeIcon,
} from "../../styles/signin";

import HeroImage from "../../Assets/Img/Auth/Img_Signin_Hero.png";
import Logo from "../../Assets/Img/Logos/Img_umunjeong-Black_Logo.png";

import Auth_input from "../../../src/Components/Auth/Input/Input.jsx"
import Auth_Button from "../../Components/Auth/Submit_Button/Submit_Button.jsx";

import showPassword from "../../Assets/Img/Auth/Img_Passeord_Show.png";
import hidepassword from "../../Assets/Img/Auth/Img_Password_Hide.png";

function Signin() {
  const [showPasswordType, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <Dev>
      <StyleHeroImageBox>
        <StyleHeroImage src={HeroImage}></StyleHeroImage>
      </StyleHeroImageBox>

      <StyleSigninBox>
        <Style_Signin_Box_Img src={Logo}></Style_Signin_Box_Img>
        <Style_Signin_Input_Box>
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
          <Auth_Button name="로그인" type="signin"></Auth_Button>
        </Style_Signin_Input_Box>
      </StyleSigninBox>
    </Dev>
  );
}

export default Signin;
