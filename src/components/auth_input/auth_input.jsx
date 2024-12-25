import PropTypes from "prop-types";

import { Auth_input_spen, Auth_inpput_input } from "../styles/auth_input";

function Auth_input({ name, type }) {
  return (
    <div>
      <Auth_input_spen>{name}</Auth_input_spen>
      <Auth_inpput_input type={type}></Auth_inpput_input>
    </div>
  );
}

Auth_input.propTypes = {
  name: PropTypes.string.isRequired, // name은 필수이며 문자열이어야 합니다.
  type: PropTypes.string.isRequired, // name은 필수이며 문자열이어야 합니다.
};

export default Auth_input;
