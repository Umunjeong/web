import { useState, useEffect } from "react";
import {
  Dev,
  Update_input_input_Box,
  Update_input_span,
  Update_input_input,
} from "../../styles/update_input";
import CustomDropdown from "../../custom_dropdown/custom_dropdown";
import { Pin } from "../../../store/store";

export default function Pin_input({ name, value }) {
  const [imageSelected, setImageSelected] = useState(false);

  const {
    PinFieldData,
    PinNameData,
    PinLinkData,
    PinImgData,
    setPinFieldData,
    setPinNameData,
    setPinLinkData,
    setPinImgData,
  } = Pin();

  const getStateValue = () => {
    switch (name) {
      case "소속 분야 이름":
        return PinFieldData;
      case "핀 이름":
        return PinNameData;
      case "이미지":
        return PinImgData;
      case "링크":
        return PinLinkData;
    }
  };

  useEffect(() => {
    if (!getStateValue()) {
      setStateValue(value);
    }
  }, [name, value]);

  const setStateValue = (inputValue) => {
    console.log(inputValue);
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

  const handleInputChange = (eventOrValue) => {
    if (name === "이미지") {
      const file = eventOrValue.target?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFieldImgDatas(reader.result);
        };
        reader.readAsDataURL(file);
        setImageSelected(true);
      }
    } else if (typeof eventOrValue === "object" && eventOrValue.target) {
      const inputValue = eventOrValue.target.value;
      setStateValue(inputValue);
    } else {
      setStateValue(eventOrValue);
    }
  };

  return (
    <Dev>
      <Update_input_span>{name}</Update_input_span>
      <Update_input_input_Box>
        {name === "이미지" && (
          <>
            <label htmlFor="file-upload" className="custom-file-upload">
              {!imageSelected && "이미지 선택"}
            </label>
            <Update_input_input
              id="file-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleInputChange}
            />
            {imageSelected && (
              <span style={{ color: "green" }}>이미지가 선택되었습니다.</span>
            )}
          </>
        )}

        {name === "소속 분야 이름" && (
          <Update_input_input
            type="text"
            value={getStateValue() || ""}
            onChange={(selectedValue) => handleInputChange(selectedValue)}
          />
        )}

        {name === "핀 이름" && (
          <Update_input_input
            type="text"
            value={getStateValue() || ""}
            onChange={(selectedValue) => handleInputChange(selectedValue)}
          />
        )}

        {name === "링크" && (
          <Update_input_input
            type="text"
            value={getStateValue() || ""}
            onChange={(selectedValue) => handleInputChange(selectedValue)}
          />
        )}
      </Update_input_input_Box>
    </Dev>
  );
}
