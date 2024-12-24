//분야 & 핀 전채보기의 탑바

import {
  Dev,
  Field_search_name_Box,
  Field_search_name,
  SearchContainer,
  SearchInput,
  SearchIcon,
} from "../styles/all_ search";

import search from "../../assets/img/search.png";

function All_search() {
  return (
    <Dev>
      <Field_search_name_Box>
        <Field_search_name>web</Field_search_name>
        <Field_search_name>+</Field_search_name>
      </Field_search_name_Box>
      <SearchContainer>
        <SearchInput placeholder="검색" />
        <SearchIcon src={search} />
      </SearchContainer>
    </Dev>
  );
}

export default All_search;
