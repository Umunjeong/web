import PropTypes from "prop-types";
import axios from "axios";

import {
  Style_Button,
  Style_Link_Text,
  Style_Auth_Container,
} from "../styles/auth_button";
import { auth } from "../../store/store";
import useNavigation from "../../router/router";

const Auth_Button = ({ name, type }) => {
  const { getEmailData, getPasswordData } = auth();
  const { navigateHome, navigateSignin, navigateSignupSignup } =
    useNavigation();

  // 로그인 서버통신 함수
  const authsigninFromSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/auth/signin", {
        email: getEmailData(),
        password: getPasswordData(),
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
    const email = getEmailData();
    const password = getPasswordData();

    try {
      const response = await axios.post("http://localhost:3000/auth/signup", {
        email: email,
        password: password,
      });

      const data = response.data;

      if (data.type === "success") {
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("accessToken", data.accessToken);
        alert("회원가입에 성공하였습니다.");
        navigateHome();
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
        <Style_Link_Text onClick={() => navigateSignupSignup()}>
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

Auth_Button.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["signin", "signup"]).isRequired,
};

export default Auth_Button;
