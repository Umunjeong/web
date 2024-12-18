import styled from "@emotion/styled";

export const Style_Auth_Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Style_Button = styled.div`
  width: 32vw;
  height: 10vh;
  background-color: black;
  border-radius: 20px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: x-large;
  font-family: "Pretendard", sans-serif;
`;

export const Style_Link_Text = styled.span`
  color: gray;
  font-size: medium;
  font-family: "Pretendard", sans-serif;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: black;
    text-decoration: underline;
  }
`;
