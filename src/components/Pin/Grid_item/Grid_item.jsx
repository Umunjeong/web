import { useNavigate } from "react-router-dom";
import { Dev, Img_Box, Img, Info_Box, Update_Box } from "../../Styles/pin_item";
import Pin_Primary_Image from "../../../Assets/Img/Primarys/Img_Primary_Pin.png";

import { PinDelete } from "../../../Api/PinApi";

import useNavigation from "../../../router/router";

function Pin_item({ id, name, link, img }) {
  const navigate = useNavigate();
  const { navigateField } = useNavigation();

  let imgSrc = img;

  const handleUpdate = (event) => {
    event.stopPropagation();
    localStorage.setItem("Pin_Name", name);
    localStorage.setItem("Pin_Src", link);
    localStorage.setItem("Pin_id", id);
    navigate("/updatePin");
  };

  const handleDelete = async (event) => {
    const isConfirmed = window.confirm(`정말 삭제하시겠습니까?`);
    event.stopPropagation();
    if (isConfirmed) {
      const response = await PinDelete(id);
      if (response === "success") {
        alert("삭제에 성공하였습니다.");
        navigateField();
      } else {
        alert("삭제에 실패하였습니디.");
      }
    }
  };

  const handleDevClick = () => {
    window.location.href = link;
  };

  if (img === null || img === "null" || img === undefined || img === "") {
    imgSrc = Pin_Primary_Image;
  }

  return (
    <Dev onClick={handleDevClick}>
      <Img_Box>
        <Img src={imgSrc} />
      </Img_Box>

      <Info_Box>
        <div>
          <span>{name}</span>
        </div>

        <Update_Box>
          <div onClick={handleUpdate}>수정</div>
          <div onClick={handleDelete}>삭제</div>
        </Update_Box>
      </Info_Box>
    </Dev>
  );
}

export default Pin_item;
