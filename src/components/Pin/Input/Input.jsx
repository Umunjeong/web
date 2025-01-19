import { useEffect } from "react";
import {
  Dev,
  Update_input_input_Box,
  Update_input_span,
  Update_input_input,
} from "../../styles/update_input";
import { Sotre_Pin } from "../../../store/store.js";

export default function Pin_input({ name, value }) {
  const {
    PinFieldData,
    PinNameData,
    PinLinkData,
    PinImgData,
    setPinFieldData,
    setPinNameData,
    setPinLinkData,
    setPinImgData,
  } = Sotre_Pin();

  const getStateValue = () => {
    switch (name) {
      case "소속 분야 이름":
        return PinFieldData;
      case "핀 이름":
        return PinNameData;
      case "이미지":
        return PinImgData ? PinImgData.name : ""; // 이미지 파일의 이름을 반환
      case "링크":
        return PinLinkData;
    }
  };

  useEffect(() => {
    if (!getStateValue() && name !== "이미지") {
      setStateValue(value);
    }
  }, [name, value]);

  const setStateValue = (inputValue) => {
    switch (name) {
      case "소속 분야 이름":
        setPinFieldData(inputValue);
        break;
      case "핀 이름":
        setPinNameData(inputValue);
        break;
      case "링크":
        setPinLinkData(inputValue);
        break;
      case "이미지":
        setPinImgData(inputValue);
        break;
    }
  };

  const handleInputChange = (event) => {
    if (name === "이미지") {
      const file = event.target?.files?.[0];
      if (file) {
        setStateValue(file); // File 객체 자체를 저장
      }
    } else {
      setStateValue(event.target.value);
    }
  };

  return (
    <Dev>
      <Update_input_span>{name}</Update_input_span>
      <Update_input_input_Box>
        {name === "이미지" ? (
          <>
            <label htmlFor="file-upload" className="custom-file-upload">
              {!PinImgData && "이미지 선택"}
            </label>
            <Update_input_input
              id="file-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleInputChange}
            />
            {PinImgData && (
              <span style={{ color: "green" }}>이미지가 선택되었습니다.</span>
            )}
          </>
        ) : (
          <Update_input_input
            type="text"
            value={getStateValue() || ""}
            onChange={handleInputChange}
          />
        )}
      </Update_input_input_Box>
    </Dev>
  );
}
