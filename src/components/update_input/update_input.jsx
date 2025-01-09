import { useState } from "react";
import { useEffect } from "react";
import {
  Dev,
  Update_input_input_Box,
  Update_input_span,
  Update_input_input,
} from "../styles/update_input";
import CustomDropdown from "../custom_dropdown/custom_dropdown";
import { Todo } from "../../store/store";

export default function Update_input({ name, value }) {
  const {
    setGropData,
    setTodoNameData,
    setTodoStartDateData,
    setTodoEndDateData,
    setTodoStateData,
    getGropData,
    getTodoNameData,
  } = Todo(); // zustand 상태 관리 메서드 가져오기

  const [imageSelected, setImageSelected] = useState(false);

  useEffect(() => {
    if (name === "소속 그룹 이름") {
      setGropData(value);
    } else if (name === "할 일 이름") {
      setTodoNameData(value);
    } else if (name === "시작 날짜") {
      setTodoStartDateData(value);
    } else if (name === "종료 날짜") {
      setTodoEndDateData(value);
    } else if (name === "상태") {
      setTodoStateData(value);
    }
  }, []);

  const handleInputChange = (eventOrValue) => {
    const inputValue =
      typeof eventOrValue === "string"
        ? eventOrValue
        : eventOrValue.target.value;

    console.log(inputValue);
    if (name === "소속 그룹 이름") {
      setGropData(inputValue); // 그룹 데이터 저장
    } else if (name === "할 일 이름") {
      setTodoNameData(inputValue); // 할 일 이름 저장
    } else if (name === "시작 날짜") {
      setTodoStartDateData(inputValue); // 시작 날짜 저장
    } else if (name === "종료 날짜") {
      setTodoEndDateData(inputValue); // 종료 날짜 저장
    } else if (name === "상태") {
      setTodoStateData(inputValue); // 상태 저장
    }
  };

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
          <CustomDropdown
            value={getGropData() || "app"} // zustand 상태에서 현재 값 가져오기
            onChange={(selectedValue) => setGropData(selectedValue)} // 상태 업데이트
          />
        ) : (
          <Update_input_input
            type="text"
            value={getTodoNameData()} // 상태를 반영
            onChange={handleInputChange}
          />
        )}
      </Update_input_input_Box>
    </Dev>
  );
}
