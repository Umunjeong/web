import React from "react";

import {
  Dev,
  Home_Feld_Name,
  Home_Todo_Box,
  Home_Todo_Box_Topber_Box,
  Home_Todo_Box_Topber_spean,
  Home_Todo_Box_Topber_create
} from "../../components/styles/home_Field";

import Home_Todo from "../home_Todo/home_Todo";

function Home_Field({ name }) {
  return (
    <Dev>
      <Home_Feld_Name>{name}</Home_Feld_Name>
      <Home_Todo_Box>
        <Home_Todo_Box_Topber_Box>
          <Home_Todo_Box_Topber_spean>할일</Home_Todo_Box_Topber_spean>
          <Home_Todo_Box_Topber_create>+</Home_Todo_Box_Topber_create>
        </Home_Todo_Box_Topber_Box>
        <div>
          <Home_Todo></Home_Todo>
          <Home_Todo></Home_Todo>
        </div>
      </Home_Todo_Box>
    </Dev>
  );
}

export default Home_Field;
