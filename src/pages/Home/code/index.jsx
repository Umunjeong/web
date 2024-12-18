// 메인 페이지

import React from "react";

import { Dev, Field_Box } from "../../../styles/Home";

import Header from "../../../components/header/header";
import Home_Field from "../../../components/home_ Field/home_Field";

function Home() {
  return (
    <Dev>
      <Header></Header>
      <Field_Box>
        <Home_Field name="web"></Home_Field>
        <Home_Field name="server"></Home_Field>
        <Home_Field name="app"></Home_Field>
      </Field_Box>
    </Dev>
  );
}

export default Home;
