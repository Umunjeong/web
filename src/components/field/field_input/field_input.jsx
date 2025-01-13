import { useState, useEffect } from "react";
import {
  Dev,
  Update_input_input_Box,
  Update_input_span,
  Update_input_input,
} from "../../styles/update_input";
import CustomDropdown from "../../custom_dropdown/custom_dropdown";
import { Sotre_Field } from "../../../store/store";

export default function Field_input({ name, value }) {
  const [imageSelected, setImageSelected] = useState(false);

  const {
    setFieldGropData,
    setFieldNameData,
    setFieldImgData,
    FieldGropData,
    FieldNameData,
    FieldImgData,
  } = Sotre_Field();

  const getStateValue = () => {
    switch (name) {
      case "소속 그룹 이름":
        return FieldGropData;
      case "분야 이름":
        return FieldNameData;
      case "이미지":
        return FieldImgData;
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
      case "소속 그룹 이름":
        setFieldGropData(inputValue);
        break;
      case "분야 이름":
        setFieldNameData(inputValue);
        break;
    }
  };

  const handleInputChange = (eventOrValue) => {
    if (name === "이미지") {
      const file = eventOrValue.target?.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFieldImgData(reader.result);
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

        {name === "소속 그룹 이름" && (
          <CustomDropdown
            value={getStateValue() || "app"}
            onChange={(selectedValue) => handleInputChange(selectedValue)}
          />
        )}

        {name === "분야 이름" && (
          <Update_input_input
            type="text"
            value={getStateValue() || ""}
            onChange={(event) => handleInputChange(event)}
          />
        )}
      </Update_input_input_Box>
    </Dev>
  );
}
