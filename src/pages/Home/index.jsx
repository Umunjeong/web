// 메인 페이지
import { Dev, Field_Box } from "../../styles/Home";
import { useEffect } from "react";

import Header from "../../components/header/header";
import Home_Field from "../../components/home_ Field/home_Field";

import useNavigation from "../../router/router";
import { Todo } from "../../store/store";

function Home() {
  const { navigateSignin } = useNavigation();
  const {
    setTodoGropData,
    setTodoNameData,
    setTodoStartDateData,
    setTodoEndDateData,
    setTodoStateData,
  } = Todo();

  useEffect(() => {
    localStorage.removeItem("changeStartDate");
    localStorage.removeItem("changeEndDate");
    localStorage.removeItem("Pin_Name");
    localStorage.removeItem("Todo_EndDate");
    localStorage.removeItem("Todo_Name");
    localStorage.removeItem("filed");
    localStorage.removeItem("ToodoState");
    localStorage.removeItem("Todo_StartDate");
    localStorage.removeItem("Grop");
    localStorage.removeItem("Pin_Src");
    localStorage.removeItem("img");
    setTodoGropData("");
    setTodoNameData("");
    setTodoStartDateData("");
    setTodoEndDateData("");
    setTodoStateData("");

    if (
      !localStorage.getItem("accessToken") ||
      !localStorage.getItem("refreshToken")
    ) {
      navigateSignin();
    }
  }, []);

  return (
    <Dev>
      <Header></Header>
      <Field_Box>
        <Field_Box>
          {["web", "server", "app"].map((name, index) => (
            <Home_Field key={index} name={name} />
          ))}
        </Field_Box>
      </Field_Box>
    </Dev>
  );
}

export default Home;
