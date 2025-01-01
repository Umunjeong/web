// 분야 전채보기 페이지

import { Dev, Field_Box, Field_Grid_Box } from "../../../../styles/Field";

import Field_item from "../../../../components/field_item/field_item";

import Header from "../../../../components/header/header";
import All_search from "../../../../components/Field_ Pin_search/Field_Pin_search";

function Field() {
  return (
    <Dev>
      <Header></Header>
      <Field_Box>
        <All_search></All_search>
        <Field_Grid_Box>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
          <Field_item name={"문서"} subordinatePin={3}></Field_item>
        </Field_Grid_Box>
      </Field_Box>
    </Dev>
  );
}

export default Field;
