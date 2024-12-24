import styled from "styled-components";

export const Dev = styled.div`
  background-color: #f4f4f4;
  border-radius: 20px;
  scroll-snap-align: start; /* 세로 스냅 위치 설정 */
  display: grid;
  grid-template-columns: 30% 70%;
  background-color: black;
  border: white 4px solid;
  height: 10vh;
`;

export const Img_Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  width: 90%;
  height: 90%;
`;

export const Info_Box = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "Inter", sans-serif;
  font-size: 24px;
  font-weight: bold;
`;

export const Update_Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  margin-top: 12px;

  > :first-child {
    background-color: white;
    color: black;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24%;
    margin-right: 24px;
    &:hover {
      cursor: Pointer;
    }
  }

  > :last-child {
    background-color: black;
    color: white;
    border: solid 2px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24%;
    &:hover {
      cursor: Pointer;
    }
  }
`;
