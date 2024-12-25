import PropTypes from "prop-types";

import { Dev } from "../styles/update_submit_button";

function Update_submit_button({ type }) {
  console.log(type);
  return <Dev>{type === "create" ? "추가" : "수정"}</Dev>;
}

Update_submit_button.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Update_submit_button;
