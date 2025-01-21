import {
  Dev,
  CreateField_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
} from "../../../styles/createField.js";

import Header from "../../../Components/Header/Header.jsx";
import All_check from "../../../Components/Page/Check_Bar/Check_Ber.jsx";
import Field_input from "../../../Components/Field/Input/Input.jsx";
import Submit_button from "../../../Components/Page/Submit_button/Submit_button.jsx";
import { Sotre_Field } from "../../../store/store.js";
import { useEffect } from "react";

function CreateField() {
  const name = localStorage.getItem("Group"); // 로컬스토리지에서 그룹 이름 가져오기
  const { FieldGroupData, FieldNameData, setFieldGroupData, setFieldNameData } =
    Sotre_Field();

  useEffect(() => {
    setFieldGroupData(name);
  }, []);

  return (
    <Dev>
      <Header />
      <CreateField_Box>
        <All_check name={`${name} > 분야추가`} />
        <From_Box>
          <From_name_Box>
            <Field_input
              name="분야 이름"
              value={FieldNameData} // 입력 필드 값 동기화
            />
            <Field_input
              name="소속 그룹 이름"
              value={FieldGroupData} // 입력 필드 값 동기화
            />
          </From_name_Box>
          <From_else_Box>
            <Field_input name="이미지" type="file" accept="image/*" />
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Submit_button control="field" type="create" />
        </Button_Box>
      </CreateField_Box>
    </Dev>
  );
}

export default CreateField;
