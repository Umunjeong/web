import { StyleHeader, StyleLogo, StyleMemu, StyleSpen } from "../Styles/header";

import Logo from "../../Assets/Img/Logos/Img_umunjeong-White_logo.png";
import useNavigation from "../../router/router.js";
import { Sotre_User } from "../../store/store.js";

function Header({ setGroup }) {
  const { navigateHome, navigateField } = useNavigation();
  const { UserInfo } = Sotre_User();

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
      <StyleLogo src={Logo} onClick={goTo_Main_handle} />
      <StyleMemu style={{ marginRight: `${UserInfo.length * 4}%` }}>
        {UserInfo.map((name, index) => (
          <StyleSpen key={index} onClick={() => goTo_Field(name)}>
            {name}
          </StyleSpen>
        ))}
      </StyleMemu>
    </StyleHeader>
  );
}

export default Header;
