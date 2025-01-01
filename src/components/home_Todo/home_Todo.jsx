import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Dev, Home_Todo_Work_spen } from "../../components/styles/home_Todo";

function Home_Todo({ Todo_Name, Todo_WtartDate, Todo_EndDate, name, state }) {
  const Navigat = useNavigate();

  const goTo_UpDate_Todo_Heldle = () => {
    localStorage.setItem("Todo_Name", Todo_Name);
    localStorage.setItem("Todo_StartDate", Todo_WtartDate);
    localStorage.setItem("Todo_EndDate", Todo_EndDate);
    localStorage.setItem("Grop", name);
    localStorage.setItem("ToodoState", state);
    Navigat("/updateTodo");
  };

  return (
    <Dev
      onClick={() => {
        goTo_UpDate_Todo_Heldle();
      }}
    >
      <Home_Todo_Work_spen>{`${Todo_Name}-(${state})`}</Home_Todo_Work_spen>
      <Home_Todo_Work_spen>{`${Todo_WtartDate}~${Todo_EndDate}`}</Home_Todo_Work_spen>
    </Dev>
  );
}

Home_Todo.propTypes = {
  Todo_Name: PropTypes.string.isRequired,
  Todo_WtartDate: PropTypes.string.isRequired,
  Todo_EndDate: PropTypes.string.isRequired,
};

export default Home_Todo;
