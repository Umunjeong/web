import { useNavigate } from "react-router-dom"; // useNavigate 임포트
import {
  Dev,
  Img_Box,
  Img,
  Info_Box,
  Update_Box,
  Name_Box,
} from "../styles/field_item";

import Field_Primary_Image from "../../assets/img/Field_Primary_Image.png";

function Field_item({ id, name, pincount, img }) {
  const navigate = useNavigate();
  let imgSrc = img;

  const handleEdit = (event) => {
    event.stopPropagation();
    localStorage.setItem("field", name);
    navigate("/updateField");
  };

  const handleClick = (event) => {
    event.stopPropagation();
    localStorage.setItem("field", name);
    localStorage.setItem("fieldId", id);
    navigate("/pin");
  };

  const handleDelete = (event) => {
    name = localStorage.getItem("filed");

    event.stopPropagation();
    const isConfirmed = window.confirm(`정말 삭제하시겠습니까?`);
    if (isConfirmed) {
      //api
      alert("삭제에 성공하였습니다.");
    }
  };

  if (img === null || img === "null" || img === undefined) {
    imgSrc = Field_Primary_Image;
  }

  return (
    <Dev onClick={handleClick}>
      <Img_Box>
        <Img src={imgSrc} />
      </Img_Box>

      <Info_Box>
        <Name_Box>
          <span>{name}</span>
          <span>(하위핀 {pincount}개)</span>
        </Name_Box>

        <Update_Box>
          <div onClick={handleEdit}>수정</div>
          <div onClick={handleDelete}>삭제</div>
        </Update_Box>
      </Info_Box>
    </Dev>
  );
}

export default Field_item;
