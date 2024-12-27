import PropTypes from "prop-types";
import { useState } from "react";
import {
  Dev,
  Update_input_input_Box,
  Update_input_span,
  Update_input_input,
} from "../styles/update_input";

function Update_input({ name, value, onChange }) {
  const [imageSelected, setImageSelected] = useState(false); // 이미지 선택 여부 상태

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // 첫 번째 파일만 처리
    if (file) {
      setImageSelected(true); // 이미지가 선택되면 true로 상태 업데이트
      onChange(file); // 파일이 선택되었을 때 부모에게 전달 (optional)
    }
  };

  // 텍스트 입력 값이 변경되었을 때 부모 컴포넌트로 전달
  const handleTextChange = (e) => {
    onChange(e.target.value); // 부모로 값을 전달
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
              id={name === "이미지" ? "file-upload" : "input"}
              type={name === "이미지" ? "file" : "text"}
              accept={name === "이미지" ? "image/*" : undefined}
              style={
                name === "이미지"
                  ? { display: "none", color: "white" }
                  : undefined
              }
              onChange={
                name === "이미지" ? handleImageChange : handleTextChange
              } // 이미지 또는 텍스트 입력에 따라 다르게 처리
              value={name === "이미지" ? undefined : value} // 텍스트 입력에만 value 적용
            />
            {imageSelected && (
              <span style={{ color: "green" }}>이미지가 선택되었습니다.</span>
            )}
          </>
        ) : (
          <Update_input_input
            type="text"
            value={value} // 텍스트 입력에 value 연결
            onChange={handleTextChange} // 부모에서 전달된 onChange로 상태 업데이트
          />
        )}
      </Update_input_input_Box>
    </Dev>
  );
}

Update_input.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string, // value는 문자열일 것으로 예상
  onChange: PropTypes.func, // onChange는 부모에서 넘겨받아야 합니다
};

export default Update_input;
