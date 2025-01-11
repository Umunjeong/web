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

import Submit_button from "../../../components/submit_button/submit_button";
import Todo_date_input from "../../../components/todo/todo_date_input/todo_date_input";
import Todo_input from "../../../components/todo/todo_input/todo_input";

function UpdateTodo() {
  const Grop_Name = localStorage.getItem("Grop");
  const name = localStorage.getItem("Todo_Name");
  const ToodoState = localStorage.getItem("ToodoState");

  return (
    <Dev>
      <Header />
      <CreateTodo_Box>
        <All_check name={"일정수정"} />
        <From_Box>
          <From_name_Box>
            <Todo_input
              name="소속 그룹 이름"
              value={Grop_Name} // 상태값 전달
            />
            <Todo_input
              name="일정 이름"
              value={name} // 상태값 전달
            />
          </From_name_Box>
          <From_else_Box>
            <Date_input_Box>
              <Todo_date_input type="update" date_Type="start" />
              <Todo_date_input type="update" date_Type="end" />
            </Date_input_Box>
            <Todo_input
              name="일정 상테"
              value={ToodoState} // 상태값 전달
            />
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Submit_button type="delete" control="todo" />
          <Submit_button type="update" control="todo" />
        </Button_Box>
      </CreateTodo_Box>
    </Dev>
  );
}

export default UpdateTodo;
