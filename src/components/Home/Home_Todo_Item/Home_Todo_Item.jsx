import useNavigation from "../../../router/router";
import { Dev, Home_Todo_Work_spen } from "../../styles/home_Todo";

function Home_Todo({
  id,
  Todo_Name,
  Todo_WtartDate,
  Todo_EndDate,
  name,
  state,
}) {
  const { navigateUpdateTodo } = useNavigation();

  const goTo_UpDate_Todo_Heldle = () => {
    localStorage.setItem("Todo_id", id);
    localStorage.setItem("Todo_Name", Todo_Name);
    localStorage.setItem("Todo_StartDate", Todo_WtartDate);
    localStorage.setItem("Todo_EndDate", Todo_EndDate);
    localStorage.setItem("Group", name);
    localStorage.setItem("ToodoState", state);
    navigateUpdateTodo();
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

export default Home_Todo;
