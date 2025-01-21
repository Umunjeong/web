import { useState, useEffect } from "react";
import {
  Dev,
  Update_input_input_Box,
  Update_input_span,
  Update_input_input,
} from "../../Styles/update_input";
import CustomDropdown from "../../Dropdown_Input/Dropdown_Input";
import { Sotre_Todo } from "../../../store/store.js";

export default function Todo_input({ name, value }) {
  const [imageSelected, setImageSelected] = useState(false);

  // zustand 상태 값과 메서드 가져오기
  const {
    setTodoGroupData,
    setTodoNameData,
    setTodoStartDateData,
    setTodoEndDateData,
    setTodoStateData,
    TodoGroupData,
    TodoNameData,
    TodoStartDateData,
    TodoEndDateData,
    TodoStateData,
  } = Sotre_Todo();

  // name에 따른 zustand 상태 값을 매핑
  const getStateValue = () => {
    switch (name) {
      case "소속 그룹 이름":
        return TodoGroupData;
      case "일정 이름":
        return TodoNameData;
      case "시작 날짜":
        return TodoStartDateData;
      case "종료 날짜":
        return TodoEndDateData;
      case "일정 상테":
        return TodoStateData;
      default:
        return "";
    }
  };

  useEffect(() => {
    if (!getStateValue()) {
      setStateValue(value);
    }
  }, [name, value]);

  const setStateValue = (inputValue) => {
    switch (name) {
      case "소속 그룹 이름":
        setTodoGroupData(inputValue);
        break;
      case "일정 이름":
        setTodoNameData(inputValue);
        break;
      case "시작 날짜":
        setTodoStartDateData(inputValue);
        break;
      case "종료 날짜":
        setTodoEndDateData(inputValue);
        break;
      case "일정 상테":
        setTodoStateData(inputValue);
        break;
      default:
        break;
    }
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setStateValue(inputValue);
  };


  return (
    <Dev>
      <Update_input_span>{name}</Update_input_span>
      <Update_input_input_Box>
        {name === "소속 그룹 이름" && (
          <CustomDropdown
            value={getStateValue() || "app"}
            onChange={(selectedValue) => setTodoGroupData(selectedValue)}
          />
        )}

        {name !== "이미지" && name !== "소속 그룹 이름" && (
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
