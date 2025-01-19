import { useState } from "react";
import {
  Dev,
  CreatePin_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
} from "../../../styles/createPin";

import Header from "../../../Components/Header/Header.jsx";
import All_check from "../../../Components/Page/Check_Bar/Check_Ber.jsx";

import Pin_input from "../../../Components/Pin/Input/Input.jsx";
import Submit_button from "../../../Components/Page/Submit_button/Submit_button.jsx";

function CreatePin() {
  const GroupName = localStorage.getItem("Group");
  const field = localStorage.getItem("Field");

  // 상태 관리
  const [pinName, setPinName] = useState("");
  const [fieldName, setFieldName] = useState(field);
  const [link, setLink] = useState("");
  const [imgBase64, setImgBase64] = useState(""); // 이미지 상태 추가

  // 입력 값 변경 핸들러
  const handlePinNameChange = (newValue) => {
    setPinName(newValue); // 핀 이름 업데이트
  };

  const handleFieldNameChange = (newValue) => {
    setFieldName(newValue); // 소속 분야 이름 업데이트
  };

  const handleLinkChange = (newValue) => {
    setLink(newValue); // 링크 업데이트
  };

  return (
    <Dev>
      <Header />
      <CreatePin_Box>
        <All_check name={`${GroupName} > ${field} > 핀 추가`} />
        <From_Box>
          <From_name_Box>
            <Pin_input
              name="핀 이름"
              value={pinName}
              onChange={(e) => handlePinNameChange(e.target.value)} // 핀 이름 상태 업데이트
            />
            <Pin_input
              name="소속 분야 이름"
              value={fieldName}
              onChange={(e) => handleFieldNameChange(e.target.value)} // 소속 분야 이름 상태 업데이트
            />
          </From_name_Box>
          <From_else_Box>
            <Pin_input
              name="링크"
              value={link}
              onChange={(e) => handleLinkChange(e.target.value)} // 링크 상태 업데이트
            />
            <Pin_input
              name="이미지"
              onChange={handleImageChange} // 이미지 선택 시 Base64로 변환
            />
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Submit_button type="create" control="pin" />
        </Button_Box>
      </CreatePin_Box>
    </Dev>
  );
}

export default CreatePin;
