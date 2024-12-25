import PropTypes from "prop-types";

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
  } else if (type === "signup_1") {
    return (
      <Style_Auth_Container>
        <Style_Button>{name}</Style_Button>
        <Style_Link_Text>계정이 있으신가요? 로그인</Style_Link_Text>
      </Style_Auth_Container>
    );
  } else {
    // signup_2번
    return (
      <Style_Auth_Container>
        <Style_Button>{name}</Style_Button>
        <Style_Link_Text>계정이 있으신가요? 로그인</Style_Link_Text>
      </Style_Auth_Container>
    );
  }
}

Auth_Button.propTypes = {
  name: PropTypes.string.isRequired, // name은 필수이며 문자열이어야 합니다.
  type: PropTypes.oneOf(["signin", "signup_1", "signup_2"]).isRequired, // type은 필수이며 지정된 값 중 하나여야 합니다.
};

export default Auth_Button;
