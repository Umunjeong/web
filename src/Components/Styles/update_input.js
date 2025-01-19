import styled from "styled-components";

export const Dev = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Update_input_span = styled.span`
  border: none;
  border-radius: 20px;
  width: 29vw;
  font-size: 20px;
  color: white;
  display: flex;
  justify-content: start;
  margin-bottom: 10px;
`;

export const Update_input_input_Box = styled.div`
  border: none;
  border-radius: 20px;
  height: 6vh;
  width: 30vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

export const Update_input_input = styled.input`
  border: none;
  height: 90%;
  width: 90%;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

export const CustomFileUpload = styled.label`
  display: inline-block;
  background-color: #007bff;
  color: white;

  border-radius: 5px;
  text-align: center;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;
