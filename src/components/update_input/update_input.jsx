import PropTypes from "prop-types";
import { useState } from "react";
import {
  Dev,
  Update_input_input_Box,
  Update_input_span,
  Update_input_input,
} from "../styles/update_input";

function Update_input({ name }) {
  const [imageSelected, setImageSelected] = useState(false); // 이미지 선택 여부 상태

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // 첫 번째 파일만 처리
    if (file) {
      setImageSelected(true); // 이미지가 선택되면 true로 상태 업데이트
    }
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
              onChange={name === "이미지" ? handleImageChange : undefined} // 이미지 선택 시 상태 업데이트
            />
            {imageSelected && (
              <span style={{ color: "green" }}>이미지가 선택되었습니다.</span>
            )}
          </>
        ) : (
          <Update_input_input type="text" />
        )}
      </Update_input_input_Box>
    </Dev>
  );
}

Update_input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Update_input;
