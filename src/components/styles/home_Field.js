import styled from "@emotion/styled";

export const Dev = styled.div`
  background-color: #3f3f3f;
  width: 24%;
  height: 70vh;
`;

export const Home_Feld_Name = styled.div`
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  font-size: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  :hover {
    cursor: pointer;
  }
`;

export const Home_Todo_Box = styled.div`
  background-color: black;
  margin-top: 8px;
  border-radius: 20px;
  height: 64vh;
  width: 100%;
`;

export const Home_Todo_Box_Topber_Box = styled.div`
  width: 88%;
  border-bottom: solid white 4px;
  margin: auto;
  padding-top: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;

  :hover {
    cursor: pointer;
  }
`;

export const Home_Todo_Box_Topber_spean = styled.span`
  color: #fff;
  font-size: 20px;
  font-weight: 300px;
  padding-bottom: 8px;
`;

export const Home_Todo_Box_Topber_create = styled.span`
  color: #fff;
  font-size: 24px;
`;

export const Home_Todo_Box_Display_Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow-y: auto;
  max-height: 58vh;
`;
