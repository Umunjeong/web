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

  return (
    <Dev>
      <Header />
      <CreateTodo_Box>
        <All_check name={"일정수정"} />
        <From_Box>
          <From_name_Box>
            <Update_input
              name="소속 그룹 이름"
              value={Grop_Name} // 상태값 전달
            />
            <Update_input
              name="일정 이름"
              value={name} // 상태값 전달
            />
          </From_name_Box>
          <From_else_Box>
            <Date_input_Box>
              <Todo_date_input type="update" date_Type="start" />
              <Todo_date_input type="update" date_Type="end" />
            </Date_input_Box>
            <Update_input
              name="일정 상테"
              value={ToodoState} // 상태값 전달
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
