import { useState, useEffect } from "react";

import {
  Dev,
  SpenWrapper,
  InputWrapper,
  StyledInput,
  StyledSpan,
} from "../../Styles/todo_date_input";
import { Sotre_Todo } from "../../../store/store.js";

function Todo_date_input({ type, date_Type }) {
  const StartDate = localStorage.getItem("Todo_StartDate") || "2025.01.01";
  const EndDate = localStorage.getItem("Todo_EndDate") || "2025.01.01";

  const { setTodoEndDateData, setTodoStartDateData } = Sotre_Todo();

  // 날짜 계산 함수
  const getCurrentDate = () => {
    if (type === "create") {
      const today = new Date();
      const year = today.getFullYear();

      let month = String(today.getMonth() + 1).padStart(2, "0");
      let day = String(today.getDate()).padStart(2, "0");

      if (date_Type === "end") {
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

export default Todo_date_input;
