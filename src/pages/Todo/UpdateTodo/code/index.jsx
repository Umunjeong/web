// 할일 추가
// 이름 표시는 로컬스토리지에서 받아오기

import {
    Dev,
    CreateTodo_Box,
    From_Box,
    Button_Box,
    From_name_Box,
    From_else_Box,
    Date_input_Box,
  } from "../../../../styles/updateTodo";
  
  import Header from "../../../../components/header/header";
  import All_check from "../../../../components/Field_ Pin_check/Field_ Pin_check";
  
  import Update_input from "../../../../components/update_input/update_input";
  import Update_submit_button from "../../../../components/update_submit_button/update_submit_button";
  import Todo_date_input from "../../../../components/todo_date_input/todo_date_input";
  
  function UpdateTodo() {
    return (
      <Dev>
        <Header></Header>
        <CreateTodo_Box>
          <All_check></All_check>
          <From_Box>
            <From_name_Box>
              <Update_input name="핀 이름"></Update_input>
              <Update_input name="소속 분야 이름"></Update_input>
            </From_name_Box>
            <From_else_Box>
              <Date_input_Box>
                <Todo_date_input type="start"></Todo_date_input>
                <Todo_date_input type="end"></Todo_date_input>
              </Date_input_Box>
              <Update_input name="이미지"></Update_input>
            </From_else_Box>
          </From_Box>
          <Button_Box>
            <Update_submit_button type="create"></Update_submit_button>
          </Button_Box>
        </CreateTodo_Box>
      </Dev>
    );
  }
  
  export default UpdateTodo;
  