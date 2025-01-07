// 메인 페이지
import { Dev, Field_Box } from "../../styles/Home";

import Header from "../../components/header/header";
import Home_Field from "../../components/home_ Field/home_Field";

function Home() {
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

  return (
    <Dev>
      <Header></Header>
      <Field_Box>
        <Field_Box>
          {["web", "server", "app"].map((name, index) => (
            <Home_Field key={index} name={name} count={index + 1} />
          ))}
        </Field_Box>
      </Field_Box>
    </Dev>
  );
}

export default Home;
