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

import HeroImage from "../../Assets/Img/Auth/Img_Signup_Hero.png";
import Logo from "../../Assets/Img/Logos/Img_umunjeong-Black_Logo.png";

import Auth_Input from "../../Components/Auth/Input/Input";
import Auth_Button from "../../Components/Auth/Submit_Button/Submit_Button";

import showPassword from "../../Assets/Img/Auth/Img_Passeord_Show.png";
import hidepassword from "../../Assets/Img/Auth/Img_Password_Hide.png";

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
          <Auth_Input name="email" type="text"></Auth_Input>
          <div
            style={{
              position: "relative",
              width: "50%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Auth_Input
              name="password"
              type={showPasswordType ? "text" : "password"}
            ></Auth_Input>
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
