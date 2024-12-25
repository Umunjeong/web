import PropTypes from "prop-types";
import { useState } from "react";

import {
  Dev,
  SpenWrapper,
  InputWrapper,
  StyledInput,
  StyledSpan,
} from "../styles/todo_date_input";

function Todo_date_input({ type }) {
  // 현재 날짜 가져오기 함수
  const getCurrentDate = () => {
    const today = new Date();

    // type이 "start"가 아니면 +1일
    if (type !== "start") {
      today.setDate(today.getDate() + 1);
    }

    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
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
      <SpenWrapper>{type === "start" ? "시작 날짜" : "종료 날짜"}</SpenWrapper>
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
};

export default Todo_date_input;
