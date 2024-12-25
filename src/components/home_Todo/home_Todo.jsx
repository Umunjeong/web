import PropTypes from "prop-types";

import { Dev, Home_Todo_Work_spen } from "../../components/styles/home_Todo";

function Home_Todo(name, startDate, endDate) {
  return (
    <Dev>
      <Home_Todo_Work_spen>{name}</Home_Todo_Work_spen>
      <Home_Todo_Work_spen>{`${startDate}}~${endDate}`}</Home_Todo_Work_spen>
    </Dev>
  );
}

Home_Todo.propTypes = {
  name: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
};

export default Home_Todo;
