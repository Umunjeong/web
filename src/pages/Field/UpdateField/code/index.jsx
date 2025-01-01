import { useState } from "react";
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
  const filed = localStorage.getItem("filed");

  const [updateGrop, setUpdateGrop] = useState("app"); // 초기값을 "app"으로 설정
  const [fieldName, setFieldName] = useState(filed); // "분야 이름" 초기값 설정
  const [image, setImage] = useState(null);

  // 필드 값 변경 핸들러
  const handleFieldChange = (name, value) => {
    if (name === "소속 그룹 이름") {
      setUpdateGrop(value);
    } else if (name === "소속 분야 이름") {
      setFieldName(value); // "분야 이름"의 값 업데이트
    } else if (name === "이미지") {
      setImage(value);
    }
  };

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
              onChange={(val) => handleFieldChange("소속 분야 이름", val)} // 값 변경 시 "소속 분야 이름" 처리
            />
            <Update_input
              name="소속 그룹 이름"
              value={updateGrop}
              onChange={(val) => handleFieldChange("소속 그룹 이름", val)} // 값 변경 시 "소속 그룹 이름" 처리
            />
          </From_name_Box>
          <From_else_Box>
            <Update_input
              name="이미지"
              value={image}
              onChange={(val) => handleFieldChange("이미지", val)} // 값 변경 시 "이미지" 처리
            />
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
