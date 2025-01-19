import styled from "styled-components";

export const DropdownWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const DropdownButton = styled.div`
  font-size: 20px;
  border-radius: 20px;
  padding: 10px;
  text-align: left;
  padding-left: 20px;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  z-index: 100;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  border-bottom: 1px solid #ccc; /* 구분선 추가 */

  &:last-child {
    border-bottom: none; /* 마지막 항목은 구분선 없음 */
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;
