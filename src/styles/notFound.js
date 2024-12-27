import styled from "styled-components";

export const Dev = styled.div`
  background-color: #3f3f3f;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const NotFound_Box = styled.div`
  height: 88vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Span1 = styled.span`
  color: white;
  font-size: 800%;
  font-weight: bold;
`;

export const Span2 = styled.span`
  color: white;
  font-size: 250%;
`;

export const Spen_Goto_Box = styled.div`
  height: 10vh;
  width: 34%;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const GotoBehind = styled.span`
  color: white;
  font-size: xx-large;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
  &:hover {
    /* :hover 상태에 필요한 다른 스타일 추가 */
    transform: scale(1.3); /* 크기 30% 확대 */
    transition: transform 0.2s ease; /* 부드러운 애니메이션 추가 */
  }
`;

export const GotoHome = styled.span`
  color: white;
  font-size: xx-large;
  font-weight: bold;
  cursor: pointer;
  display: inline-block; /* transform을 적용하기 위해 inline-block사용 */

  &:hover {
    /* :hover 상태에 필요한 다른 스타일 추가 */
    transform: scale(1.3); /* 크기 30% 확대 */
    transition: transform 0.2s ease; /* 부드러운 애니메이션 추가 */
  }
`;
