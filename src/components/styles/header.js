import styled from "@emotion/styled";

export const StyleHeader = styled.header`
  background-color: black;
  width: 100%;
  height: 12vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyleLogo = styled.img`
  width: 10%;
  height: 22%;
  margin-left: 4%;
  :hover {
    cursor: pointer;
  }
`;

export const StyleMemu = styled.div`
  width: 10%;
  height: 22%;
  margin-right: 20%;
`;

export const StyleSpen = styled.span`
  height: 100%;
  color: white;
  font-size: 140%;
  margin-right: 80%;
  font-family: "Quicksand", sans-serif;
  :hover {
    cursor: pointer;
  }
`;
