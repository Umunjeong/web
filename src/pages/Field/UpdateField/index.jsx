import {
  Dev,
  UpdateField_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
} from "../../../styles/updateField";

import Header from "../../../Components/Header/Header";
import All_check from "../../../Components/Page/Check_Bar/Check_Ber";

import Field_input from "../../../Components/Field/Input/Input";
import Submit_button from "../../../Components/Page/Submit_button/Submit_button";

function UpdateField() {
  const Group = localStorage.getItem("Group");
  const filed = localStorage.getItem("Field");

  return (
    <Dev>
      <Header />
      <UpdateField_Box>
        <All_check name={`${Group} > ${filed}의 정보`} />
        <From_Box>
          <From_name_Box>
            <Field_input name="분야 이름" value={filed} />
            <Field_input name="소속 그룹 이름" value={Group} />
          </From_name_Box>
          <From_else_Box>
            <Field_input name="이미지" type="file" accept="image/*" />
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Submit_button control="field" type="update" />
        </Button_Box>
      </UpdateField_Box>
    </Dev>
  );
}

export default UpdateField;
