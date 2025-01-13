import { useNavigate } from "react-router-dom";
import { Dev, Img_Box, Img, Info_Box, Update_Box } from "../styles/pin_item";
import Pin_Primary_Image from "../../assets/img/Pin_Primary_Image.png";

function Pin_item({ id, name, link, img }) {
  const navigate = useNavigate();
  let imgSrc = img;

  const handleUpdate = (event) => {
    event.stopPropagation();
    localStorage.setItem("Pin_Name", name);
    localStorage.setItem("Pin_Src", link);
    navigate("/updatePin");
  };

  const handleDelete = (event) => {
    const isConfirmed = window.confirm(`정말 삭제하시겠습니까?`);
    event.stopPropagation();
    if (isConfirmed) {
      //api
      alert("삭제에 성공하였습니다.");
    }
  };

  const handleDevClick = () => {
    window.location.href = link;
  };

  if (img === null || img === "null" || img === undefined) {
    imgSrc = Pin_Primary_Image;
  }

  return (
    <Dev onClick={handleDevClick}>
      <Img_Box>
        <Img src={Pin_Primary_Image} alt="이미지를 로드하고 있습니다." />
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
