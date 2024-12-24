//핀 전채보기에 있는 핀 하나

import { Dev, Img_Box, Img, Info_Box, Update_Box } from "../styles/pin_item";

import Pin_Primary_Image from "../../assets/img/Pin_Primary_Image.png";

function Pin_item() {
  return (
    <Dev>
      <Img_Box>
        <Img src={Pin_Primary_Image} alt="이미지를 로드하고 있습니다."></Img>
      </Img_Box>

      <Info_Box>
        <div>
          <span>문서</span>
        </div>

        <Update_Box>
          <div>수정</div>
          <div>삭제</div>
        </Update_Box>
      </Info_Box>
    </Dev>
  );
}

export default Pin_item;
