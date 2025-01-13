import { useNavigate } from "react-router-dom"; // useNavigate 임포트
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
  const { FetchFieldsData} = Sotre_Field();

  let GropName = localStorage.getItem("Grop");

  if (!GropName) {
    GropName = "해당하는 분야를 찾을수 없음";
  }

  const fieldName = localStorage.getItem("field");

  const navigate = useNavigate();
  
  const handleAddClick = () => {
    if (type === "Pin") {
      navigate("/createPin");
    } else {
      navigate("/createField");
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
        <SearchInput placeholder="검색" />
        <SearchIcon src={search} />
      </SearchContainer>
    </Dev>
  );
}

export default All_search;
