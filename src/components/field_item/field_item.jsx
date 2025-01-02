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

function Field_item({ name, subordinatePin }) {
  const navigate = useNavigate(); // 네비게이션 훅 사용

  // Dev 클릭 시 실행되는 함수
  const handleClick = (event) => {
    // 수정이나 삭제 버튼 클릭 시 이벤트 전파를 막기 위해
    event.stopPropagation();

    // 로컬스토리지에 name 저장
    localStorage.setItem("field", name);

    // /pin 경로로 네비게이션
    navigate("/pin");
  };

  // 수정 버튼 클릭 시 처리 함수
  const handleEdit = (event) => {
    event.stopPropagation(); // 이벤트 전파 막기

    // 로컬스토리지에 name 저장
    localStorage.setItem("field", name);
    // 수정 처리 로직 추가 (예: updatePin 페이지로 이동)
    navigate("/updateField");
  };

  // 삭제 버튼 클릭 시 처리 함수
  const handleDelete = (event) => {
    name = localStorage.getItem("filed");

    event.stopPropagation(); // 이벤트 전파 막기
    const isConfirmed = window.confirm(`정말 ${name}를(을) 삭제하시겠습니까?`);
    if (isConfirmed) {
      // 삭제 로직을 여기에 추가 (예: API 호출)
      console.log(`${name}이(가) 삭제되었습니다.`);
    }
  };

  return (
    <Dev onClick={handleClick}>
      <Img_Box>
        <Img src={Field_Primary_Image} alt="이미지를 로드하고 있습니다." />
      </Img_Box>

      <Info_Box>
        <Name_Box>
          <span>{name}</span>
          <span>(하위핀 {subordinatePin}개)</span>
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
