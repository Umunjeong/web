import axios from "axios";

import {
  Style_Button,
  Style_Link_Text,
  Style_Auth_Container,
} from "../../Styles/auth_button.js";
import { Sotre_auth } from "../../../store/store.js";
import useNavigation from "../../../router/router.js";
const apiUrl = import.meta.env.VITE_API_URL;

const Auth_Button = ({ name, type }) => {
  const { EmailData, PasswordData } = Sotre_auth();

  const { navigateHome, navigateSignin, navigateSignup, navigateFirstPage } =
    useNavigation();

  // 로그인 서버통신 함수
  const authsigninFromSubmit = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/auth/signin`,
        {
          email: EmailData,
          password: PasswordData,
        },
        {
          withCredentials: true, // 쿠키 허용
          headers: { "Content-Type": "application/json" },
        }
      );

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
      const response = await axios.post(
        `${apiUrl}/auth/signup`,
        {
          email: EmailData,
          password: PasswordData,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );

      const data = response.data;

      if (data.type === "success") {
        alert(
          "회원가입에 성공하였습니다. 이메일을 확인하여 인증후 다시 로그인 해주세요."
        );
        navigateFirstPage();
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
