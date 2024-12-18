import React from "react";

import { Auth_input_spen, Auth_inpput_input } from "../styles/auth_input";

function Auth_input({ name, type }) {
  return (
    <div>
      <Auth_input_spen>{name}</Auth_input_spen>
      <Auth_inpput_input type={type}></Auth_inpput_input>
    </div>
  );
}

export default Auth_input;
