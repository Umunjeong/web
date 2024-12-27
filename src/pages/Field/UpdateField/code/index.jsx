// 분야 수정
// 이름 표시는 로컬스토리지에서 받아오기

import {
  Dev,
  UpdateField_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
} from "../../../../styles/updateField";

import Header from "../../../../components/header/header";
import All_check from "../../../../components/Field_ Pin_check/Field_ Pin_check";

import Update_input from "../../../../components/update_input/update_input";
import Update_submit_button from "../../../../components/update_submit_button/update_submit_button";

function UpdateField() {
  const Grop = localStorage.getItem("Grop");
  const type = localStorage.getItem("filed");

  const Field_Name = localStorage.getItem("filed");

  return (
    <Dev>
      <Header></Header>
      <UpdateField_Box>
        <All_check name={`${Grop} > ${type}의 정보`}></All_check>
        <From_Box>
          <From_name_Box>
            <Update_input name="분야 이름" value={Field_Name}></Update_input>
            <Update_input name="소속 그룹 이름" value={Grop}></Update_input>
          </From_name_Box>
          <From_else_Box>
            <Update_input name="이미지"></Update_input>
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Update_submit_button type="update"></Update_submit_button>
        </Button_Box>
      </UpdateField_Box>
    </Dev>
  );
}

export default UpdateField;
