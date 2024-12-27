import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import {
  Dev,
  Home_Feld_Name,
  Home_Todo_Box,
  Home_Todo_Box_Topber_Box,
  Home_Todo_Box_Topber_spean,
  Home_Todo_Box_Topber_create,
  Home_Todo_Box_Display_Box,
} from "../../components/styles/home_Field";

import Home_Todo from "../home_Todo/home_Todo";

function Home_Field({ name, count }) {
  const Navigat = useNavigate();

  const goToF_ield_Heldle = (name) => {
    if (name === "web" || name === "server" || name === "app") {
      localStorage.setItem("Grop", name);
      Navigat("/field");
    }
  };

  const goTo_UpdateToDo_Heldle = (name) => {
    localStorage.setItem("Grop", name);
    Navigat("/createTodo");
  };

  return (
    <Dev>
      <Home_Feld_Name onClick={() => goToF_ield_Heldle(name)}>
        <span>{name}</span>
        <span>{">"}</span>
      </Home_Feld_Name>
      <Home_Todo_Box>
        <Home_Todo_Box_Topber_Box onClick={() => goTo_UpdateToDo_Heldle(name)}>
          <Home_Todo_Box_Topber_spean>할일</Home_Todo_Box_Topber_spean>
          <Home_Todo_Box_Topber_create>+</Home_Todo_Box_Topber_create>
        </Home_Todo_Box_Topber_Box>
        <Home_Todo_Box_Display_Box>
          {Array.from({ length: Number(count) }).map((_, index) => (
            <Home_Todo
              key={index} // key를 소문자로 변경
              Todo_Name="웹 과제"
              Todo_WtartDate="11.11"
              Todo_EndDate="12.11"
              name={name}
            />
          ))}
        </Home_Todo_Box_Display_Box>
      </Home_Todo_Box>
    </Dev>
  );
}

Home_Field.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Home_Field;
