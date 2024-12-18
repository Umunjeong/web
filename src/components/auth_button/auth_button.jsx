import React from "react";

import {
  Style_Button,
  Style_Link_Text,
  Style_Auth_Container,
} from "../styles/auth_button";

function Auth_Button({ name, type }) {
  if (type == "signin") {
    return (
      <Style_Auth_Container>
        <Style_Button>{name}</Style_Button>
        <Style_Link_Text>계정이 없으신가요? 회원가입</Style_Link_Text>
      </Style_Auth_Container>
    );
  } else if (type == "signup_1") {
    return (
      <Style_Auth_Container>
        <Style_Button>{name}</Style_Button>
        <Style_Link_Text>계정이 있으신가요? 로그인</Style_Link_Text>
      </Style_Auth_Container>
    );
  } else { // signup_2번
    return (
      <Style_Auth_Container>
        <Style_Button>{name}</Style_Button>
        <Style_Link_Text>계정이 있으신가요? 로그인</Style_Link_Text>
      </Style_Auth_Container>
    );
  }
}
export default Auth_Button;
