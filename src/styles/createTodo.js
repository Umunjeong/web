import styled from "styled-components";

export const Dev = styled.div`
  background-color: #3f3f3f;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const CreateTodo_Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const From_Box = styled.div`
  margin-top: 180px;
  height: 48vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const From_name_Box = styled.div`
  width: 88%;
  height: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
`;

export const From_else_Box = styled.div`
  margin-top: 40px;
  width: 70%;
  height: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
`;

export const Date_input_Box = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120%;
  justify-content: space-around;
  display: flex;
  justify-content: flex-start;
  gap: 14px;
`;
export const Date_input = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  & input {
    width: 12vw;
    height: 6vh;
    border-radius: 20px;
  }
`;

export const Button_Box = styled.div`
  margin-top: 10px;
  height: 12vh;
  width: 84%;
  display: flex;
  gap: 100px;
  justify-content: flex-end;
`;
