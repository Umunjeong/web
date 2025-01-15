import useNavigation from "../../router/router";
import {
  Dev,
  Field_search_name_Box,
  Field_search_name,
  SearchContainer,
  SearchInput,
  SearchIcon,
} from "../styles/all_ search";

import search from "../../assets/img/search.png";
import { Sotre_Field } from "../../store/store";

function All_search({ type }) {
  const { setFieldSearchDara, setPinSearchDara } = Sotre_Field();
  const { navigateCreatePin, navigateCreateField } = useNavigation();

  let GropName = localStorage.getItem("Grop");

  if (!GropName) {
    GropName = "해당하는 분야를 찾을수 없음";
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
          {type !== "Pin" ? GropName : `${GropName} > ${fieldName}`}
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
