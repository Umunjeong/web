import { useState } from "react";

import {
  Dev,
  CreateField_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
} from "../../../styles/createField";

import Header from "../../../components/header/header";
import All_check from "../../../components/Field_ Pin_check/Field_ Pin_check";
import Field_input from "../../../components/field/field_input/field_input";
import Submit_button from "../../../components/submit_button/submit_button";

function CreateField() {
  const name = localStorage.getItem("Grop"); // 로컬스토리지에서 그룹 이름 가져오기
  const [fieldName, setFieldName] = useState(""); // 분야 이름 상태
  const [groupName, setGroupName] = useState(name); // 소속 그룹 이름 상태

  return (
    <Dev>
      <Header />
      <CreateField_Box>
        <All_check name={`${name} > 분야추가`} />
        <From_Box>
          <From_name_Box>
            <Field_input
              name="분야 이름"
              onChange={(e) => setFieldName(e.target.value)}
              value={fieldName} // 입력 필드 값 동기화
            />
            <Field_input
              name="소속 그룹 이름"
              onChange={(e) => setGroupName(e.target.value)}
              value={groupName} // 입력 필드 값 동기화
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
