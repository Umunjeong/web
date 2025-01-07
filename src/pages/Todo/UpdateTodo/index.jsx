import { useState } from "react";
import {
  Dev,
  CreateTodo_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
  Date_input_Box,
} from "../../../styles/updateTodo";

import Header from "../../../components/header/header";
import All_check from "../../../components/Field_ Pin_check/Field_ Pin_check";

import Update_input from "../../../components/update_input/update_input";
import Update_submit_button from "../../../components/update_submit_button/update_submit_button";
import Todo_date_input from "../../../components/todo_date_input/todo_date_input";

function UpdateTodo() {
  const Grop_Name = localStorage.getItem("Grop");
  const name = localStorage.getItem("Todo_Name");
  const ToodoState = localStorage.getItem("ToodoState");

  // 상태 관리
  const [todoName, setTodoName] = useState(name); // 할일 이름 상태
  const [fieldName, setFieldName] = useState(Grop_Name); // 소속 분야 이름 상태
  const [toodoState, setTodoState] = useState(ToodoState);

  // 입력 값 변경 핸들러
  const handleTodoNameChange = (newValue) => {
    setTodoName(newValue); // 할일 이름 업데이트
  };

  const handleFieldNameChange = (newValue) => {
    setFieldName(newValue); // 소속 분야 이름 업데이트
  };

  return (
    <Dev>
      <Header />
      <CreateTodo_Box>
        <All_check name={"일정수정"} />
        <From_Box>
          <From_name_Box>
            <Update_input
              name="소속 그룹 이름"
              value={fieldName} // 상태값 전달
              onChange={handleFieldNameChange} // 상태 업데이트 함수 전달
            />
            <Update_input
              name="일정 이름"
              value={todoName} // 상태값 전달
              onChange={handleTodoNameChange} // 상태 업데이트 함수 전달
            />
          </From_name_Box>
          <From_else_Box>
            <Date_input_Box>
              <Todo_date_input type="update" date_Type="start" />
              <Todo_date_input type="update" date_Type="end" />
            </Date_input_Box>
            <Update_input
              name="일정 상테"
              value={toodoState} // 상태값 전달
              onChange={handleTodoNameChange} // 상태 업데이트 함수 전달
            />
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Update_submit_button type="delete" />
          <Update_submit_button type="update" />
        </Button_Box>
      </CreateTodo_Box>
    </Dev>
  );
}

export default UpdateTodo;
