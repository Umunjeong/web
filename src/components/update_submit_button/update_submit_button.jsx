import PropTypes from "prop-types";

import { Dev } from "../styles/update_submit_button";

const CreateSubmit = () => {
  const CreateSubmit = window.confirm("추가 하시겠습니까?");
};

const UpdateSubmit = () => {
  const UpdateSubmit = window.confirm("수정 하시겠습니까?");
};

const DeleteSubmit = () => {
  const DeleteSubmit = window.confirm("삭제 하시겠습니까?");
};

function Update_submit_button({ type }) {
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

Update_submit_button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Update_submit_button;
