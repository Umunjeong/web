//분야 전채보기에 있는 분야 하나

import {
  Dev,
  Img_Box,
  Img,
  Info_Box,
  Update_Box,
  Name_Box,
} from "../styles/field_item";

import Field_Primary_Image from "../../assets/img/Field_Primary_Image.png";

function Field_item() {
  return (
    <Dev>
      <Img_Box>
        <Img src={Field_Primary_Image} alt="이미지를 로드하고 있습니다."></Img>
      </Img_Box>

      <Info_Box>
        <Name_Box>
          <span>문서</span>
          <span>(하위핀 4개)</span>
        </Name_Box>

        <Update_Box>
          <div>수정</div>
          <div>삭제</div>
        </Update_Box>
      </Info_Box>
    </Dev>
  );
}

export default Field_item;
