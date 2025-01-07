// 2번 : 회원가입

import {
  Dev,
  StyleHeroImageBox,
  StyleHeroImage,
  StyleSignupBox,
  Style_Signup_Box_Img,
  Style_Signup_Input_Box,
} from "../../styles/signup";

import HeroImage from "../../assets/img/Signup.png";
import Logo from "../../assets/img/umunjeong-b.png";

import Auth_input from "../../components/auth_input/auth_input";
import Auth_Button from "../../components/auth_button/auth_button";

function Signup_signup() {
  return (
    <Dev>
      <StyleHeroImageBox>
        <StyleHeroImage src={HeroImage}></StyleHeroImage>
      </StyleHeroImageBox>

      <StyleSignupBox>
        <Style_Signup_Box_Img src={Logo}></Style_Signup_Box_Img>
        <Style_Signup_Input_Box>
          <Auth_input name="id" type="text"></Auth_input>
          <Auth_input name="password" type="password"></Auth_input>
          <Auth_Button name="회원가입" type="signup_1"></Auth_Button>
        </Style_Signup_Input_Box>
      </StyleSignupBox>
    </Dev>
  );
}

export default Signup_signup;
