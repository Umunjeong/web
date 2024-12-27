// 메인 페이지
import { Dev, Field_Box } from "../../../styles/Home";

import Header from "../../../components/header/header";
import Home_Field from "../../../components/home_ Field/home_Field";

function Home() {
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
