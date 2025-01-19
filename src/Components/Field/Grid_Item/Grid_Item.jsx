import {
  Dev,
  Img_Box,
  Img,
  Info_Box,
  Update_Box,
  Name_Box,
} from "../../Styles/field_item";

import Field_Primary_Image from "../../../Assets/Img/Primarys/Img_Primary-Field.png";

import { FieldDelete } from "../../../api/FieldApi.js";
import useNavigation from "../../../router/router.js";

function Field_item({ id, name, pincount, img }) {
  const { navigateHome, navigateUpdateField, navigatePin } = useNavigation();

  let imgSrc = img;
  console.log(imgSrc);

  const handleEdit = (event) => {
    event.stopPropagation();
    localStorage.setItem("Field", name);
    localStorage.setItem("Field_id", id);
    navigateUpdateField();
  };

  const handleClick = (event) => {
    event.stopPropagation();
    localStorage.setItem("Field", name);
    navigatePin();
  };

  const handleDelete = async (event) => {
    name = localStorage.getItem("Field");

    event.stopPropagation();
    const isConfirmed = window.confirm(`정말 삭제하시겠습니까?`);
    if (isConfirmed) {
      const response = await FieldDelete(id);
      if (response === "success") {
        alert("삭제에 성공하였습니다.");
        navigateHome();
      } else {
        alert("삭제에 실패하였습니다");
      }
    }
  };

  if (img === null || img === "null" || img === undefined || img === "") {
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
