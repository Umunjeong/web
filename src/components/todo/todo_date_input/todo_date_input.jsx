import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import {
  Dev,
  SpenWrapper,
  InputWrapper,
  StyledInput,
  StyledSpan,
} from "../../styles/todo_date_input";
import { Todo } from "../../../store/store";

function Todo_date_input({ type, date_Type }) {
  // 기본 시작 날짜와 종료 날짜 설정
  const StartDate = localStorage.getItem("Todo_StartDate") || "2025.01.01"; // 기본값 설정
  const EndDate = localStorage.getItem("Todo_EndDate") || "2025.01.01"; // 기본값 설정

  const { setTodoEndDateData, setTodoStartDateData } = Todo();

  // 날짜 계산 함수
  const getCurrentDate = () => {
    if (type === "create") {
      const today = new Date();
      const year = today.getFullYear();

      // 시작 날짜는 현재 날짜
      let month = String(today.getMonth() + 1).padStart(2, "0");
      let day = String(today.getDate()).padStart(2, "0");

      if (date_Type === "end") {
        // 종료 날짜는 시작 날짜에서 1일 후
        today.setDate(today.getDate() + 1);
        month = String(today.getMonth() + 1).padStart(2, "0");
        day = String(today.getDate()).padStart(2, "0");
      }
      return `${year}-${month}-${day}`;
    } else {
      let year, month, day;

      if (date_Type === "start") {
        let dateParts = StartDate.split("-");

        year = dateParts[0] || "01";
        month = dateParts[1] || "01";
        day = dateParts[2] || "01";
      }

      if (date_Type === "end") {
        let dateParts = EndDate.split("-");

        year = dateParts[0] || "01";
        month = dateParts[1] || "01";
        day = dateParts[2] || "01";
      }
      return `${year}-${month}-${day}`;
    }
  };

  const [date, setDate] = useState(getCurrentDate());

  // 상태 변경 시 localStorage 업데이트
  useEffect(() => {
    if (date_Type === "start") {
      setTodoStartDateData(date);
    } else if (date_Type === "end") {
      setTodoEndDateData(date);
    }
  }, [date]);

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
