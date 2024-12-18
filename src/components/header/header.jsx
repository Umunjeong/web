import React from "react";
import { StyleHeader, StyleLogo, StyleMemu, StyleSpen} from "../styles/header";

import Logo from "../../assets/img/umunjeong-w.png"

function Header() {
  return (
    <StyleHeader>
      <StyleLogo src={Logo}></StyleLogo>
      <StyleMemu>
        <StyleSpen>web</StyleSpen>
        <StyleSpen>server</StyleSpen>
        <StyleSpen>app</StyleSpen>
      </StyleMemu>
    </StyleHeader>
  );
}

export default Header;
