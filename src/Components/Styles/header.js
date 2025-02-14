import styled from "@emotion/styled";

export const StyleHeader = styled.header`
  background-color: black;
  width: 100vw;
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
  display: flex;
  justify-content: space-evenly;
  width: 10%;
  height: 22%;
`;

export const StyleSpen = styled.span`
  height: 100%;
  color: white;
  font-size: 140%;
  margin-right: 50%;
  font-family: "Quicksand", sans-serif;
  :hover {
    cursor: pointer;
  }
`;
