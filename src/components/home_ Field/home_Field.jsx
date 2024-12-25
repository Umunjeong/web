import PropTypes from "prop-types";

import {
  Dev,
  Home_Feld_Name,
  Home_Todo_Box,
  Home_Todo_Box_Topber_Box,
  Home_Todo_Box_Topber_spean,
  Home_Todo_Box_Topber_create,
  Home_Todo_Box_Display_Box,
} from "../../components/styles/home_Field";

import Home_Todo from "../home_Todo/home_Todo";

function Home_Field({ name, count }) {
  return (
    <Dev>
      <Home_Feld_Name>{name}</Home_Feld_Name>
      <Home_Todo_Box>
        <Home_Todo_Box_Topber_Box>
          <Home_Todo_Box_Topber_spean>할일</Home_Todo_Box_Topber_spean>
          <Home_Todo_Box_Topber_create>+</Home_Todo_Box_Topber_create>
        </Home_Todo_Box_Topber_Box>
        <Home_Todo_Box_Display_Box>
          {Array.from({ length: count }).map((_, index) => (
            <Home_Todo key={index} />
          ))}
        </Home_Todo_Box_Display_Box>
      </Home_Todo_Box>
    </Dev>
  );
}

Home_Field.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.string.isRequired,
};

export default Home_Field;
