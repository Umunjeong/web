import { StyleHeader, StyleLogo, StyleMemu, StyleSpen } from "../styles/header";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/img/umunjeong-w.png";

function Header({ setGrop }) {
  const Navigate = useNavigate();

  const goTo_Main_handle = () => {
    Navigate("/home");
  };

  const goTo_Field = (gropValue) => {
    localStorage.setItem("Grop", gropValue);
    if (setGrop) {
      setGrop(gropValue); // setGrop이 있으면 실행
    }
    Navigate("/field");
  };

  return (
    <StyleHeader>
      <StyleLogo src={Logo} onClick={goTo_Main_handle}></StyleLogo>
      <StyleMemu>
        <StyleSpen onClick={() => goTo_Field("web")}>web</StyleSpen>
        <StyleSpen onClick={() => goTo_Field("server")}>server</StyleSpen>
        <StyleSpen onClick={() => goTo_Field("app")}>app</StyleSpen>
      </StyleMemu>
    </StyleHeader>
  );
}

export default Header;
