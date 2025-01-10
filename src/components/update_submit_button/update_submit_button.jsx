//todo 서버통신 부터는 함수화
//id와 토큰은 로컬스토리지에서

import { Dev } from "../styles/update_submit_button";
import { Todo } from "../../store/store";

function Update_submit_button({ control, type }) {
  const {
    getTodoGropData,
    getTodoNameData,
    getTodoStartDateData,
    getTodoEndDateData,
    getTodoStateData,
  } = Todo();

  const CreateSubmit = () => {
    const CreateSubmit = window.confirm("추가 하시겠습니까?");
    if (CreateSubmit) {
      if (control === "todo") {
        console.log(
          getTodoGropData(),
          getTodoNameData(),
          getTodoStartDateData(),
          getTodoEndDateData(),
          getTodoStateData()
        );
      }
      // } else if (control === "todo") {
      // } else if (control === "field") {
      // }
      else {
        console.log("control 값 이상", control);
      }
    }
  };

  const UpdateSubmit = () => {
    const UpdateSubmit = window.confirm("수정 하시겠습니까?");
    if (UpdateSubmit) {
      if (control === "todo") {
        console.log(
          "그룹",
          getTodoGropData(),
          "이름",
          getTodoNameData(),
          "상테",
          getTodoStartDateData(),
          "날짜",
          getTodoEndDateData(),
          getTodoStateData()
        );
      }
      // else if (control === "todo") {
      // } else if (control === "field") {
      else {
        console.log("control 값 이상", control);
      }
    }
  };

  const DeleteSubmit = () => {
    const DeleteSubmit = window.confirm("삭제 하시겠습니까?");
    if (DeleteSubmit) {
      if (control === "todo") {
        console.log(
          "그룹",
          getTodoGropData(),
          "이름",
          getTodoNameData(),
          "상테",
          getTodoStartDateData(),
          "날짜",
          getTodoEndDateData(),
          getTodoStateData()
        );
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
export default Update_submit_button;
