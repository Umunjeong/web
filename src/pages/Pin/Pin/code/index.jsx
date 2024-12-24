// 핀 전채보기 페이지

import { Dev, Pin_Box, Pin_Grid_Box } from "../../../../styles/Pin";

import Pin_item from "../../../../components/pin_item/Pin_item";

import Header from "../../../../components/header/header";
import All_search from "../../../../components/Field_ Pin_search/Field_Pin_search";

function Pin() {
  return (
    <Dev>
      <Header></Header>
      <Pin_Box>
        <All_search></All_search>
        <Pin_Grid_Box>
          <Pin_item Pin_Name={"문서"} Field_Name={"app"}>
            Item 1
          </Pin_item>
          <Pin_item>Item 1</Pin_item>
          <Pin_item>Item 1</Pin_item>
          <Pin_item>Item 1</Pin_item>
          <Pin_item>Item 1</Pin_item>
          <Pin_item>Item 1</Pin_item>
          <Pin_item>Item 1</Pin_item>
          <Pin_item>Item 1</Pin_item>
        </Pin_Grid_Box>
      </Pin_Box>
    </Dev>
  );
}

export default Pin;
