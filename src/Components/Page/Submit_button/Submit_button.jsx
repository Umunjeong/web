import { Dev } from "../../Styles/update_submit_button";
import { ToDoPatch, ToDoPost, ToDoDelete } from "../../../Api/TodoApi.js";
import { FieldPatch, FieldPost } from "../../../Api/FieldApi.js";
import { PinPatch, PinPost } from "../../../Api/PinApi.js";
import useNavigation from "../../../router/router.js";

import { Sotre_Todo } from "../../../store/store.js";
import { Sotre_Field } from "../../../store/store.js";
import { Sotre_Pin } from "../../../store/store.js";

export default function Submit_button({ control, type }) {
  const { navigateHome } = useNavigation();
  let response = null;

  const {
    TodoGroupData,
    TodoNameData,
    TodoStartDateData,
    TodoEndDateData,
    TodoStateData,
  } = Sotre_Todo();

  const { FieldGroupData, FieldNameData, FieldImgData } = Sotre_Field();

  const { PinFieldData, PinNameData, PinLinkData, PinImgData } = Sotre_Pin();

  //추가
  const CreateSubmit = async () => {
    const CreateSubmit = window.confirm("추가 하시겠습니까?");
    if (CreateSubmit) {
      if (control === "Todo") {
        response = await ToDoPost(
          TodoGroupData,
          TodoNameData,
          TodoStateData,
          TodoStartDateData,
          TodoEndDateData
        );
      } else if (control === "field") {
        response = await FieldPost(FieldGroupData, FieldNameData, FieldImgData);
      } else if (control === "pin") {
        response = await PinPost(
          localStorage.getItem("Group"),
          PinFieldData,
          PinNameData,
          PinLinkData,
          PinImgData
        );
      } else {
        console.log("control 값 이상", control);
      }

      if (response === "success") {
        alert("생성에 성공하였습니다.");
        navigateHome();
      } else {
        alert("생성에 실패하였습니디.");
      }
    }
  };

  const UpdateSubmit = async () => {
    const UpdateSubmit = window.confirm("수정 하시겠습니까?");
    if (UpdateSubmit) {
      if (control === "Todo") {
        response = await ToDoPatch(
          localStorage.getItem("Todo_id"),
          TodoGroupData,
          TodoNameData,
          TodoStateData,
          TodoStartDateData,
          TodoEndDateData
        );
      } else if (control === "field") {
        response = await FieldPatch(
          localStorage.getItem("Field_id"),
          FieldGroupData,
          FieldNameData,
          FieldImgData
        );
      } else if (control === "pin") {
        response = await PinPatch(
          localStorage.getItem("Pin_id"),
          localStorage.getItem("Group"),
          PinFieldData,
          PinNameData,
          PinLinkData,
          PinImgData
        );
      } else {
        console.log("control 값 이상", control);
      }

      if (response === "success") {
        alert("수정에 성공하였습니다.");
        navigateHome();
      } else {
        alert("수정에 실패하였습니디.");
      }
    }
  };

  const DeleteSubmit = async () => {
    const DeleteSubmit = window.confirm("삭제 하시겠습니까?");
    if (DeleteSubmit) {
      if (control === "Todo") {
        response = await ToDoDelete(localStorage.getItem("Todo_id"));
      } else {
        console.log("control 값 이상", control);
      }

      if (response === "success") {
        alert("삭제에 성공하였습니다.");
        navigateHome();
      } else {
        alert("삭제에 실패하였습니디.");
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
