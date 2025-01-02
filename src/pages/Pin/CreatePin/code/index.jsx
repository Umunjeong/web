import { useState } from "react";
import {
  Dev,
  CreatePin_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
} from "../../../../styles/createPin";

import Header from "../../../../components/header/header";
import All_check from "../../../../components/Field_ Pin_check/Field_ Pin_check";

import Update_input from "../../../../components/update_input/update_input";
import Update_submit_button from "../../../../components/update_submit_button/update_submit_button";

function CreatePin() {
  const GropName = localStorage.getItem("Grop");
  const field = localStorage.getItem("field");

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

  // 이미지 파일 처리
  const handleImageChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImgBase64(reader.result); // Base64로 이미지 저장
    };
    reader.readAsDataURL(file); // 파일을 Base64로 변환
  };

  // 데이터 저장 핸들러
  const handleSaveToLocalStorage = () => {
    if (!pinName || !fieldName || !link || !imgBase64) {
      alert("모든 필드를 입력해주세요.");
      return;
    }

    // 로컬스토리지에 저장
    localStorage.setItem("pinName", pinName);
    localStorage.setItem("fieldName", fieldName);
    localStorage.setItem("link", link);
    localStorage.setItem("img", imgBase64);

    alert("데이터가 로컬스토리지에 저장되었습니다.");
  };

  return (
    <Dev>
      <Header />
      <CreatePin_Box>
        <All_check name={`${GropName} > ${field} > 핀 추가`} />
        <From_Box>
          <From_name_Box>
            <Update_input
              name="핀 이름"
              value={pinName}
              onChange={(e) => handlePinNameChange(e.target.value)} // 핀 이름 상태 업데이트
            />
            <Update_input
              name="소속 분야 이름"
              value={fieldName}
              onChange={(e) => handleFieldNameChange(e.target.value)} // 소속 분야 이름 상태 업데이트
            />
          </From_name_Box>
          <From_else_Box>
            <Update_input
              name="링크"
              value={link}
              onChange={(e) => handleLinkChange(e.target.value)} // 링크 상태 업데이트
            />
            <Update_input
              name="이미지"
              onChange={handleImageChange} // 이미지 선택 시 Base64로 변환
            />
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Update_submit_button
            type="create"
            onClick={handleSaveToLocalStorage} // 저장 버튼 클릭 시 호출
          />
        </Button_Box>
      </CreatePin_Box>
    </Dev>
  );
}

export default CreatePin;
