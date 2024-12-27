import PropTypes from "prop-types";
import { useState } from "react";

import {
  Dev,
  SpenWrapper,
  InputWrapper,
  StyledInput,
  StyledSpan,
} from "../styles/todo_date_input";

function Todo_date_input({ type, date_Type }) {
  const Name = localStorage.getItem("Todo_Name");

  // 기본 시작 날짜와 종료 날짜 설정
  const StartDate = localStorage.getItem("Todo_StartDate") || "01.01"; // 기본값 설정
  const EndDate = localStorage.getItem("Todo_EndDate") || "01.01"; // 기본값 설정

  // 날짜 계산 함수
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();

    let month, day;

    if (type === "create") {
      // 시작 날짜는 현재 날짜
      month = String(today.getMonth() + 1).padStart(2, "0");
      day = String(today.getDate()).padStart(2, "0");

      if (date_Type === "end") {
        // 종료 날짜는 시작 날짜에서 1일 후
        today.setDate(today.getDate() + 1); // 오늘 날짜에서 1일을 더함
        month = String(today.getMonth() + 1).padStart(2, "0");
        day = String(today.getDate()).padStart(2, "0");
      }
    } else {
      [month, day] = StartDate.split(".");
      if (date_Type === "end") {
        [month, day] = EndDate.split(".");
      }
    }

    return `${year}-${month}-${day}`;
  };

  const [date, setDate] = useState(getCurrentDate());

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  const preventDrag = (e) => {
    e.preventDefault();
  };

  return (
    <Dev>
      <SpenWrapper>
        {date_Type === "start" ? "시작 날짜" : "종료 날짜"}
      </SpenWrapper>
      <InputWrapper onDragStart={preventDrag}>
        <StyledInput
          type="date"
          onChange={handleChange}
          min={getCurrentDate()}
          onDragStart={preventDrag}
        />
        <StyledSpan>{date}</StyledSpan>
      </InputWrapper>
    </Dev>
  );
}

Todo_date_input.propTypes = {
  type: PropTypes.string.isRequired,
  date_Type: PropTypes.string.isRequired, // date_Type prop 추가
};

export default Todo_date_input;
