//분야 & 핀 CUD의 중간 바

import {
  Dev,
  Field_search_name_Box,
  Field_search_name,
} from "../../Styles/all_ search";

function All_check({ name }) {
  return (
    <Dev>
      <Field_search_name_Box>
        <Field_search_name>{name}</Field_search_name>
      </Field_search_name_Box>
    </Dev>
  );
}

export default All_check;
