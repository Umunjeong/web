import {
  Dev,
  CreateTodo_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
  Date_input_Box,
} from "../../../styles/updateTodo.js";

import Header from "../../../Components/Header/Header.jsx";
import All_check from "../../../Components/Page/Check_Bar/Check_Ber.jsx";

import Submit_button from "../../../Components/Page/Submit_button/Submit_button.jsx";
import Todo_date_input from "../../../Components/Todo/Date_input/Date_Input.jsx";
import Todo_input from "../../../Components/Todo/Todo_Input/Todo_Input.jsx";

function UpdateTodo() {
  const Group_Name = localStorage.getItem("Group");
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
              value={Group_Name} // 상태값 전달
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
