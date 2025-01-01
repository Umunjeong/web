import styled from "@emotion/styled";

export const Dev = styled.div`
  position: fixed;
  background-color: #3f3f3f;
  width: 100%;

  display: flex;
  flex-direction: column;
`;

export const Pin_Box = styled.div`
  width: 100%;
  height: 88vh;
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
`;

export const Pin_Grid_Box = styled.div`
  margin-top: 220px;
  width: 88%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 20px;
  overflow-y: auto;
`;
