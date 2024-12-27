import { StyleHeader, StyleLogo, StyleMemu, StyleSpen } from "../styles/header";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/img/umunjeong-w.png";

function Header() {
  const Navigate = useNavigate();

  const goTo_Main_handle = () => {
    Navigate("/home");
  };

  const goTo_Field_Web = () => {
    localStorage.setItem("Grop", "web");
    Navigate("/field");
  };

  const goTo_Field_Server = () => {
    localStorage.setItem("Grop", "srver");
    Navigate("/field");
  };

  const goTo_Field_App = () => {
    localStorage.setItem("Grop", "app");
    Navigate("/field");
  };

  return (
    <StyleHeader>
      <StyleLogo src={Logo} onClick={goTo_Main_handle}></StyleLogo>
      <StyleMemu>
        <StyleSpen onClick={goTo_Field_Web}>web</StyleSpen>
        <StyleSpen onClick={goTo_Field_Server}>server</StyleSpen>
        <StyleSpen onClick={goTo_Field_App}>app</StyleSpen>
      </StyleMemu>
    </StyleHeader>
  );
}

export default Header;
