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

function All_search({ type }) {
  let GropName = localStorage.getItem("Grop");

  if (!GropName) {
    GropName = "해당하는 분야를 찾을수 없음";
  }

  const fieldName = localStorage.getItem("field");

  const navigate = useNavigate(); // 네비게이션 훅 사용

  // + 버튼 클릭 시 페이지 이동
  const handleAddClick = () => {
    if (type === "Pin") {
      navigate("/createPin"); // Pin 타입일 때는 createPin으로 이동
    } else {
      navigate("/createField"); // 다른 경우에는 createField로 이동
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
