import React from "react";

import { Dev, Home_Todo_Work_spen } from "../../components/styles/home_Todo";

function Home_Todo(name, startDate, endDate) {
  return (
    <Dev>
      <Home_Todo_Work_spen>{"웹 스터디 과제"}</Home_Todo_Work_spen>
      <Home_Todo_Work_spen>{`${11.1}~${11.12}`}</Home_Todo_Work_spen>
    </Dev>
  );
}

export default Home_Todo;
