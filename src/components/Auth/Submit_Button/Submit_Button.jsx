import axios from "axios";

import {
  Style_Button,
  Style_Link_Text,
  Style_Auth_Container,
} from "../../styles/auth_button";
import { Sotre_auth } from "../../../store/store";
import useNavigation from "../../../router/router";

const Auth_Button = ({ name, type }) => {
  const { EmailData, PasswordData } = Sotre_auth();

  const { navigateHome, navigateSignin, navigateSignup } = useNavigation();

  // 로그인 서버통신 함수
  const authsigninFromSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/signin", {
        email: EmailData,
        password: PasswordData,
      });

      const data = response.data;

      if (data.type === "success") {
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("accessToken", data.accessToken);
        alert("로그인에 성공하였습니다.");
        navigateHome();
      } else {
        alert("로그인에 실패하였습니다.");
      }
    } catch (error) {
      alert("로그인에 실패하였습니다.");
    }
  };

  // 회원가입 서버통신 함수
  const authSignupFromSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/signup", {
        email: EmailData,
        password: PasswordData,
      });

      const data = response.data;

      if (data.type === "success") {
        alert("회원가입에 성공하였습니다. 이메일을 확인하여 인증하여 주세요");
        navigateSignin();
      } else {
        alert("회원가입에 실패하였습니다.");
      }
    } catch (error) {
      alert("회원가입에 실패하였습니다.");
    }
  };

  if (type === "signin") {
    return (
      <Style_Auth_Container>
        <Style_Button onClick={() => authsigninFromSubmit()}>
          {name}
        </Style_Button>
        <Style_Link_Text onClick={() => navigateSignup()}>
          계정이 없으신가요? 회원가입
        </Style_Link_Text>
      </Style_Auth_Container>
    );
  } else if (type === "signup") {
    return (
      <Style_Auth_Container>
        <Style_Button onClick={() => authSignupFromSubmit()}>
          {name}
        </Style_Button>
        <Style_Link_Text onClick={() => navigateSignin()}>
          계정이 있으신가요? 로그인
        </Style_Link_Text>
      </Style_Auth_Container>
    );
  }
};

export default Auth_Button;
