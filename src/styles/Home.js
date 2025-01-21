import styled from "@emotion/styled";

export const Dev = styled.div`
  background-color: #3f3f3f;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Field_Box = styled.div`
  height: 88vh;
  width: 100vw;
  display: flex;
  flex-wrap: nowrap; /* 내부 아이템이 줄바꿈 없이 한 줄에 표시되도록 설정 */
  justify-content: flex-start; /* 아이템들이 왼쪽으로 정렬되게 */
  align-items: center;
  overflow-x: auto;
`;
