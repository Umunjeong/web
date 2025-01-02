// Update_input.jsx
import PropTypes from "prop-types";
import { useState } from "react";
import {
  Dev,
  Update_input_input_Box,
  Update_input_span,
  Update_input_input,
} from "../styles/update_input";
import CustomDropdown from "../custom_dropdown/custom_dropdown"; // 드롭다운 컴포넌트 추가

export default function Update_input({ name, value = "web", onChange }) {
  const [imageSelected, setImageSelected] = useState(false);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("img", reader.result);
        setImageSelected(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleTextChange = (e) => {
    onChange(e.target.value); // 텍스트 입력 값 전달
  };

  return (
    <Dev>
      <Update_input_span>{name}</Update_input_span>
      <Update_input_input_Box>
        {name === "이미지" ? (
          <>
            <label htmlFor="file-upload" className="custom-file-upload">
              {!imageSelected && "이미지 선택"}
            </label>
            <Update_input_input
              id="file-upload"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleImageChange}
            />
            {imageSelected && (
              <span style={{ color: "green" }}>이미지가 선택되었습니다.</span>
            )}
          </>
        ) : name === "소속 그룹 이름" ? (
          <CustomDropdown value={value} onChange={onChange} /> // 드롭다운 사용
        ) : (
          <Update_input_input
            type="text"
            value={value}
            onChange={handleTextChange}
          />
        )}
      </Update_input_input_Box>
    </Dev>
  );
}

Update_input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};
