//todo 서버통신 부터는 함수화
//id와 토큰은 로컬스토리지에서

import { Dev } from "../styles/update_submit_button";
import { Todo } from "../../store/store";
import { toDoPatch, toDoPost, toDoDelete } from "../../api/TodoApi";
import useNavigation from "../../router/router";

function Submit_button({ control, type }) {
  const { navigateHome } = useNavigation();
  const token = localStorage.getItem("accessToken");

  const {
    getTodoGropData,
    getTodoNameData,
    getTodoStartDateData,
    getTodoEndDateData,
    getTodoStateData,
  } = Todo();

  const CreateSubmit = async () => {
    const CreateSubmit = window.confirm("추가 하시겠습니까?");
    if (CreateSubmit) {
      if (control === "todo") {
        const response = await toDoPost(
          getTodoGropData(),
          getTodoNameData(),
          getTodoStateData(),
          getTodoStartDateData(),
          getTodoEndDateData(),
          token
        );

        if (response === "success") {
          alert("생성에 성공하였습니다.");
          navigateHome();
        } else {
          alert("생성에 실패하였습니디.");
        }
      }
      // } else if (control === "todo") {
      // } else if (control === "field") {
      // }
      else {
        console.log("control 값 이상", control);
      }
    }
  };

  const UpdateSubmit = async () => {
    const UpdateSubmit = window.confirm("수정 하시겠습니까?");
    if (UpdateSubmit) {
      if (control === "todo") {
        const response = await toDoPatch(
          localStorage.getItem("Todo_id"),
          getTodoGropData(),
          getTodoNameData(),
          getTodoStateData(),
          getTodoStartDateData(),
          getTodoEndDateData(),
          token
        );

        if (response === "success") {
          alert("수정에 성공하였습니다.");
          navigateHome();
        } else {
          alert("수정에 실패하였습니디.");
        }
      }

      // else if (control === "todo") {
      // } else if (control === "field") {
      else {
        console.log("control 값 이상", control);
      }
    }
  };

  const DeleteSubmit = async () => {
    const DeleteSubmit = window.confirm("삭제 하시겠습니까?");
    if (DeleteSubmit) {
      if (control === "todo") {
        const response = await toDoDelete(
          localStorage.getItem("Todo_id"),
          token
        );

        if (response === "success") {
          alert("삭제에 성공하였습니다.");
          navigateHome();
        } else {
          alert("삭제에 실패하였습니디.");
        }
      }
      // else if (control === "todo") {
      // } else if (control === "field") {
      // }
      else {
        console.log("control 값 이상", control);
      }
    }
  };

  return (
    <Dev
      style={{
        color: type === "delete" ? "red" : "black",
      }}
      onClick={
        type === "create"
          ? CreateSubmit
          : type === "update"
          ? UpdateSubmit
          : DeleteSubmit
      }
    >
      {type === "create" ? "추가" : type === "update" ? "수정" : "삭제"}
    </Dev>
  );
}
export default Submit_button;
