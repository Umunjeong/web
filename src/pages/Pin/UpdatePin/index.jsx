// todo 처럼 변경

import { useState } from "react";
import {
  Dev,
  UpdatePin_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
} from "../../../styles/updatePin";

import Header from "../../../components/header/header";
import All_check from "../../../components/Field_ Pin_check/Field_ Pin_check";

import Update_input from "../../../components/pin/pin_input/pin_input";
import Submit_button from "../../../components/submit_button/submit_button";

function UpdatePin() {
  const GropName = localStorage.getItem("Grop");
  const filed = localStorage.getItem("field");
  const Pin_Name = localStorage.getItem("Pin_Name");
  const Pin_Src = localStorage.getItem("Pin_Src");

  const [pinName, setPinName] = useState(Pin_Name);
  const [fieldName, setFieldName] = useState(filed);
  const [link, setLink] = useState(Pin_Src);
  const [imgBase64, setImgBase64] = useState(Pin_Src); // 초기 이미지 값

  // 이미지 파일 처리
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgBase64(reader.result); // Base64로 이미지 저장
      };
      reader.readAsDataURL(file); // 파일을 Base64로 변환
    }
  };

  return (
    <Dev>
      <Header />
      <UpdatePin_Box>
        <All_check name={`${GropName} > ${filed} > ${Pin_Name}의 정보`} />
        <From_Box>
          <From_name_Box>
            <Update_input
              name="핀 이름"
              value={pinName}
              onChange={(e) => setPinName(e.target.value)} // 핀 이름 상태 업데이트
            />
            <Update_input
              name="소속 분야 이름"
              value={fieldName}
              onChange={(e) => setFieldName(e.target.value)} // 소속 분야 이름 상태 업데이트
            />
          </From_name_Box>
          <From_else_Box>
            <Update_input
              name="링크"
              value={link}
              onChange={(e) => setLink(e.target.value)} // 링크 상태 업데이트
            />
            <Update_input
              name="이미지"
              type="file"
              accept="image/*"
              onChange={handleImageChange} // 이미지 선택 시 상태 업데이트
            />
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
