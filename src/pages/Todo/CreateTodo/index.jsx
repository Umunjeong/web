// 할일 추가
// 이름 표시는 로컬스토리지에서 받아오기

import { useState } from "react";

import {
  Dev,
  CreateTodo_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
  Date_input_Box,
} from "../../../styles/createTodo";

import Header from "../../../Components/Header/Header.jsx";
import All_check from "../../../Components/Page/Check_Bar/Check_Ber";
import Todo_input from "../../../Components/Todo/Todo_Input/Todo_Input";
import Submit_button from "../../../Components/Page/Submit_button/Submit_button";
import Todo_date_input from "../../../Components/Todo/Date_input/Date_Input";

export default function CreateTodo() {
  const Group_Name = localStorage.getItem("Group");
  const name = localStorage.getItem("Todo_Name");

  // 상태 관리
  const [todoName, setTodoName] = useState(""); // 할일 이름 상태
  const [GroupName, setGroupName] = useState(Group_Name); // 소속 분야 이름 상태
  const [toodoState, setTodoState] = useState("진행중");

  // 입력 값 변경 핸들러
  const handleTodoNameChange = (newValue) => {
    setTodoName(newValue); // 할일 이름 업데이트
  };

  const handleFieldNameChange = (newValue) => {
    setGroupName(newValue); // 소속 그룹 이름 업데이트
  };

  return (
    <Dev>
      <Header />
      <CreateTodo_Box>
        <All_check name={"일정추가"} />
        <From_Box>
          <From_name_Box>
            <Todo_input
              name="소속 그룹 이름"
              onChange={handleFieldNameChange}
              value={GroupName} // 선택된 값으로 업데이트
            />
            <Todo_input
              name="일정 이름"
              onChange={handleTodoNameChange}
              value={todoName}
            />
          </From_name_Box>
          <From_else_Box>
            <Date_input_Box>
              <Todo_date_input date_Type="start" type="create" />
              <Todo_date_input date_Type="end" type="create" />
            </Date_input_Box>
            <Todo_input
              name="일정 상테"
              value={toodoState}
              onChange={handleTodoNameChange} // 상태 업데이트 함수 전달
            />
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Submit_button type="delete" control="todo" />
          <Submit_button type="create" control="todo" />
        </Button_Box>
      </CreateTodo_Box>
    </Dev>
  );
}
