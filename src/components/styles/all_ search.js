import styled from "@emotion/styled";

export const Dev = styled.div`
  position: fixed;
  top: 160px;
  left: 100px;
  background-color: #3f3f3f;
  width: 89%;
  height: 16vh;
`;

export const Field_search_name_Box = styled.div`
  color: white;
  width: 100%;
  position: relative;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 12px; /* 보더의 두께 */
    background-color: white;
    border-radius: 20px;
  }
`;

export const Field_search_name = styled.span`
  font-size: 40px;
  padding: 20px;
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 300px;
  display: flex;
  margin-left: 80%;
  margin-top: 16px;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 10px 10px 15px; /* 이미지 공간 확보 */
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 20px; /* 검색창 테두리 둥글게 */
  outline: none;
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
`;
