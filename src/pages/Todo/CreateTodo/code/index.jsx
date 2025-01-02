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
} from "../../../../styles/createTodo";

import Header from "../../../../components/header/header";
import All_check from "../../../../components/Field_ Pin_check/Field_ Pin_check";

import Update_input from "../../../../components/update_input/update_input";
import Update_submit_button from "../../../../components/update_submit_button/update_submit_button";
import Todo_date_input from "../../../../components/todo_date_input/todo_date_input";

export default function CreateTodo() {
  const Grop_Name = localStorage.getItem("Grop");
  const name = localStorage.getItem("Todo_Name");

  // 상태 관리
  const [todoName, setTodoName] = useState(""); // 할일 이름 상태
  const [GropName, setGropName] = useState(Grop_Name); // 소속 분야 이름 상태
  const [toodoState, setTodoState] = useState("진행중");

  // 입력 값 변경 핸들러
  const handleTodoNameChange = (newValue) => {
    setTodoName(newValue); // 할일 이름 업데이트
  };

  const handleFieldNameChange = (newValue) => {
    setGropName(newValue); // 소속 그룹 이름 업데이트
  };

  return (
    <Dev>
      <Header />
      <CreateTodo_Box>
        <All_check name={"일정추가"} />
        <From_Box>
          <From_name_Box>
            <Update_input
              name="소속 그룹 이름"
              onChange={handleFieldNameChange} 
              value={GropName} // 선택된 값으로 업데이트
            />
            <Update_input
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
            <Update_input
              name="일정 상테"
              value={toodoState}
              onChange={handleTodoNameChange} // 상태 업데이트 함수 전달
            />
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Update_submit_button type="delete" />
          <Update_submit_button type="create" />
        </Button_Box>
      </CreateTodo_Box>
    </Dev>
  );
}
