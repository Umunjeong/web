//이메일 인증 페이지
//나중에 supabase에 올리려면 별도의 작업 필요함
import {
  Dev,
  Email_From_Box,
  LogoBox,
  LogoImg,
  SpenBox,
  ButtonBox,
  Submit_Button,
} from "./Email";

import Logo from "../../assets/img/umunjeong-b.png";

function Email() {
  return (
    <Dev>
      <Email_From_Box>
        <LogoBox>
          <LogoImg src={Logo}></LogoImg>
        </LogoBox>
        <SpenBox>
          <span>
            이 이메일로 회원가입 요청이 있어 이 이메일이 발송되었습니다.
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;요청을 한적이
            없는경우 무시하여 주시기 바랍니다.
          </span>
        </SpenBox>
        <ButtonBox>
          <Submit_Button>
            <span>인증하기</span>
          </Submit_Button>
        </ButtonBox>
      </Email_From_Box>
    </Dev>
  );
}

export default Email;
