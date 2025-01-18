import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { Dev, Home_Todo_Work_spen } from "../../styles/home_Todo";

function Home_Todo({
  id,
  Todo_Name,
  Todo_WtartDate,
  Todo_EndDate,
  name,
  state,
}) {
  const Navigat = useNavigate();

  const goTo_UpDate_Todo_Heldle = () => {
    localStorage.setItem("Todo_id", id);
    localStorage.setItem("Todo_Name", Todo_Name);
    localStorage.setItem("Todo_StartDate", Todo_WtartDate);
    localStorage.setItem("Todo_EndDate", Todo_EndDate);
    localStorage.setItem("Group", name);
    localStorage.setItem("ToodoState", state);
    Navigat("/updateTodo");
  };

  return (
    <Dev
      onClick={() => {
        goTo_UpDate_Todo_Heldle();
      }}
    >
      <Home_Todo_Work_spen>
        <span>{Todo_Name}</span>
        <span>{`(${state})`}</span>
      </Home_Todo_Work_spen>
      <Home_Todo_Work_spen>
        <span>{Todo_WtartDate}</span>
        <span>{Todo_EndDate}</span>
      </Home_Todo_Work_spen>
    </Dev>
  );
}

Home_Todo.propTypes = {
  Todo_Name: PropTypes.string.isRequired,
  Todo_WtartDate: PropTypes.string.isRequired,
  Todo_EndDate: PropTypes.string.isRequired,
};

export default Home_Todo;
