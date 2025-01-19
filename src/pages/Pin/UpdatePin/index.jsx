// todo 처럼 변경

import { useState } from "react";
import {
  Dev,
  UpdatePin_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
} from "../../../styles/updatePin.js";

import Header from "../../../Components/Header/Header.jsx";
import All_check from "../../../Components/Page/Check_Bar/Check_Ber.jsx";

import Pin_input from "../../../Components/Pin/Input/Input.jsx";
import Submit_button from "../../../Components/Page/Submit_button/Submit_button.jsx";

function UpdatePin() {
  const GroupName = localStorage.getItem("Group");
  const filed = localStorage.getItem("Field");
  const Pin_Name = localStorage.getItem("Pin_Name");
  const Pin_Src = localStorage.getItem("Pin_Src");

  const [pinName, setPinName] = useState(Pin_Name);
  const [fieldName, setFieldName] = useState(filed);
  const [link, setLink] = useState(Pin_Src);
  const [imgBase64, setImgBase64] = useState(Pin_Src); // 초기 이미지 값

  return (
    <Dev>
      <Header />
      <UpdatePin_Box>
        <All_check name={`${GroupName} > ${filed} > ${Pin_Name}의 정보`} />
        <From_Box>
          <From_name_Box>
            <Pin_input
              name="핀 이름"
              value={pinName}
              onChange={(e) => setPinName(e.target.value)} // 핀 이름 상태 업데이트
            />
            <Pin_input
              name="소속 분야 이름"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)} // 소속 분야 이름 상태 업데이트
            />
          </From_name_Box>
          <From_else_Box>
            <Pin_input
              name="링크"
              value={link}
              onChange={(e) => setLink(e.target.value)} // 링크 상태 업데이트
            />
            <Pin_input name="이미지" type="file" />
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Submit_button type="update" control="pin" />
        </Button_Box>
      </UpdatePin_Box>
    </Dev>
  );
}

export default UpdatePin;
