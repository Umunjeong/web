// 핀 수정
// 이름 표시는 로컬스토리지에서 받아오기

import {
  Dev,
  UpdatePin_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
} from "../../../../styles/updatePin";

import Header from "../../../../components/header/header";
import All_check from "../../../../components/Field_ Pin_check/Field_ Pin_check";

import Update_input from "../../../../components/update_input/update_input";
import Update_submit_button from "../../../../components/update_submit_button/update_submit_button";

function UpdatePin() {
  return (
    <Dev>
      <Header></Header>
      <UpdatePin_Box>
        <All_check></All_check>
        <From_Box>
          <From_name_Box>
            <Update_input name="핀 이름"></Update_input>
            <Update_input name="소속 분야 이름"></Update_input>
          </From_name_Box>
          <From_else_Box>
            <Update_input name="링크"></Update_input>
            <Update_input name="이미지"></Update_input>
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Update_submit_button type="create"></Update_submit_button>
        </Button_Box>
      </UpdatePin_Box>
    </Dev>
  );
}

export default UpdatePin;
