import styled from "styled-components";

export const Dev = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const SpenWrapper = styled.span`
  margin-bottom: 10px;
  font-size: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  color: white;
  border-radius: 20px;
  margin-left: 16px;
`;

export const InputWrapper = styled.div`
  position: relative;
  width: 16.5vw;
  height: 6vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  justify-content: space-between;
`;

export const StyledInput = styled.input`
  width: 80%;
  height: 100%;
  border-radius: 20px;
  padding: 10px;
  font-size: 16px;
  box-sizing: border-box;
  color: white;

  &:focus {
    outline: none;
    border-color: #555;
  }
`;

export const StyledSpan = styled.span`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: black;
  font-size: 16px;

  ${StyledInput}:focus + & {
    display: none; /* Input에 포커스가 들어오면 숨김 */
  }
`;
