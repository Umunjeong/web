//pin, field 페이지의 중간 바

import useNavigation from "../../../router/router.js";
import {
  Dev,
  Field_search_name_Box,
  Field_search_name,
  SearchContainer,
  SearchInput,
  SearchIcon,
} from "../../Styles/all_ search";

import search from "../../../Assets/Img/Search/Img_Search.png";

import { Sotre_Field } from "../../../store/store.js";

function All_search({ type }) {
  const { setFieldSearchDara, setPinSearchDara } = Sotre_Field();
  const { navigateCreatePin, navigateCreateField } = useNavigation();

  let GroupName = localStorage.getItem("Group");

  if (!GroupName) {
    GroupName = "해당하는 분야를 찾을수 없음";
  }

  const fieldName = localStorage.getItem("Field");

  const handleAddClick = () => {
    if (type === "Pin") {
      navigateCreatePin();
    } else {
      navigateCreateField();
    }
  };

  return (
    <Dev>
      <Field_search_name_Box>
        <Field_search_name>
          {type !== "Pin" ? GroupName : `${GroupName} > ${fieldName}`}
        </Field_search_name>
        <Field_search_name onClick={handleAddClick}>+</Field_search_name>
      </Field_search_name_Box>
      <SearchContainer>
        <SearchInput
          placeholder="검색"
          onChange={(event) => {
            type === "Pin"
              ? setPinSearchDara(event.target.value)
              : setFieldSearchDara(event.target.value);
          }}
        />
        <SearchIcon src={search} />
      </SearchContainer>
    </Dev>
  );
}

export default All_search;
