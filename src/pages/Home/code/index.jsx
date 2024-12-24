// 메인 페이지

import { Dev, Field_Box } from "../../../styles/Home";

import Header from "../../../components/header/header";
import Home_Field from "../../../components/home_ Field/home_Field";

function Home() {
  return (
    <Dev>
      <Header></Header>
      <Field_Box>
        <Home_Field name="web" count={10}></Home_Field>
        <Home_Field name="server" count={2}></Home_Field>
        <Home_Field name="app" count={3}></Home_Field>
      </Field_Box>
    </Dev>
  );
}

export default Home;
