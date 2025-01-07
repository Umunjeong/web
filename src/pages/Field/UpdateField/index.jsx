import { useState } from "react";
import {
  Dev,
  UpdateField_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
} from "../../../styles/updateField";

import Header from "../../../components/header/header";
import All_check from "../../../components/Field_ Pin_check/Field_ Pin_check";

import Update_input from "../../../components/update_input/update_input";
import Update_submit_button from "../../../components/update_submit_button/update_submit_button";

function UpdateField() {
  const Grop = localStorage.getItem("Grop");
  const filed = localStorage.getItem("field");

  const [updateGrop, setUpdateGrop] = useState(Grop); // 소속 그룹 초기값 설정
  const [fieldName, setFieldName] = useState(filed); // 소속 분야 초기값 설정

  return (
    <Dev>
      <Header />
      <UpdateField_Box>
        <All_check name={`${Grop} > ${filed}의 정보`} />
        <From_Box>
          <From_name_Box>
            <Update_input
              name="분야 이름"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)}
            />
            <Update_input
              name="소속 그룹 이름"
              value={updateGrop}
              onChange={(e) => setUpdateGrop(e.target.value)}
            />
          </From_name_Box>
          <From_else_Box>
            <Update_input name="이미지" type="file" accept="image/*" />
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Update_submit_button type="update" />
        </Button_Box>
      </UpdateField_Box>
    </Dev>
  );
}

export default UpdateField;
