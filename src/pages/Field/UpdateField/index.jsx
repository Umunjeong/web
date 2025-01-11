import { useEffect } from "react";
import {
  Dev,
  UpdateField_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
} from "../../../styles/updateField";

import Header from "../../../components/header/header";
import All_check from "../../../components/Field_ Pin_check/Field_ Pin_check";

import Field_input from "../../../components/field/field_input/field_input";
import Submit_button from "../../../components/submit_button/submit_button";

function UpdateField() {
  const Grop = localStorage.getItem("Grop");
  const filed = localStorage.getItem("field");

  return (
    <Dev>
      <Header />
      <UpdateField_Box>
        <All_check name={`${Grop} > ${filed}의 정보`} />
        <From_Box>
          <From_name_Box>
            <Field_input name="분야 이름" value={filed} />
            <Field_input name="소속 그룹 이름" value={Grop} />
          </From_name_Box>
          <From_else_Box>
            <Field_input name="이미지" type="file" accept="image/*" />
          </From_else_Box>
        </From_Box>
        <Button_Box>
          <Submit_button type="update" />
        </Button_Box>
      </UpdateField_Box>
    </Dev>
  );
}

export default UpdateField;
