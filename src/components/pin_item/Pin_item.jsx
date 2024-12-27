import { useNavigate } from "react-router-dom"; // useNavigate를 임포트
import { Dev, Img_Box, Img, Info_Box, Update_Box } from "../styles/pin_item";
import Pin_Primary_Image from "../../assets/img/Pin_Primary_Image.png";

function Pin_item({ Pin_Name, Pin_Src }) {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 수정 버튼 클릭 시 updatePin 페이지로 이동
  const handleUpdate = (event) => {
    event.stopPropagation(); // 이벤트 전파를 막음
    localStorage.setItem("Pin_Name", Pin_Name);
    localStorage.setItem("Pin_Src", Pin_Src);
    navigate("/updatePin"); // React Router로 페이지 이동
  };

  // 삭제 버튼 클릭 시 확인 알림
  const handleDelete = (event) => {
    const isConfirmed = window.confirm(
      `정말 ${Pin_Name}를(을) 삭제하시겠습니까?`
    );
    event.stopPropagation(); // 이벤트 전파를 막음
    if (isConfirmed) {
      // api 호출 코드 작성
      console.log(`${Pin_Name}이(가) 삭제되었습니다.`);
    }
  };

  const handleDevClick = () => {
    window.location.href = Pin_Src; // Pin_Src로 이동 (React Router 외부 링크로 이동)
  };

  return (
    <Dev onClick={handleDevClick}>
      <Img_Box>
        <Img src={Pin_Primary_Image} alt="이미지를 로드하고 있습니다." />
      </Img_Box>

      <Info_Box>
        <div>
          <span>{Pin_Name}</span>
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
