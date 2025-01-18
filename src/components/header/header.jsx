import { StyleHeader, StyleLogo, StyleMemu, StyleSpen } from "../Styles/header";

import Logo from "../../Assets/Img/Logos/Img_umunjeong-White_logo.png";
import useNavigation from "../../router/router";

function Header({ setGroup }) {
  const { navigateHome, navigateField } = useNavigation();

  const goTo_Main_handle = () => {
    navigateHome();
  };

  const goTo_Field = (groupValue) => {
    localStorage.setItem("Group", groupValue);
    if (setGroup) {
      setGroup(groupValue);
    }
    navigateField();
  };

  return (
    <StyleHeader>
      <StyleLogo src={Logo} onClick={goTo_Main_handle}></StyleLogo>
      <StyleMemu>
        <StyleSpen onClick={() => goTo_Field("web")}>web</StyleSpen>
        <StyleSpen onClick={() => goTo_Field("server")}>server</StyleSpen>
        <StyleSpen onClick={() => goTo_Field("app")}>app</StyleSpen>
        <StyleSpen onClick={() => goTo_Field("work")}>work</StyleSpen>
        <StyleSpen onClick={() => goTo_Field("other")}>other</StyleSpen>
      </StyleMemu>
    </StyleHeader>
  );
}

export default Header;
