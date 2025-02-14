// 메인 페이지
import { Dev, Field_Box } from "../../styles/Home.js";
import { useEffect } from "react";

import Header from "../../Components/Header/Header.jsx";
import Home_Field from "../../Components/Home/Home_Field_Box/Home_Field_Box.jsx";
import { getUserInfo } from "../../Api/user.js";

import useNavigation from "../../router/router.js";
import {
  Sotre_auth,
  Sotre_Todo,
  Sotre_Field,
  Sotre_Pin,
  Sotre_User,
} from "../../store/store.js";

function Home() {
  const { navigateSignin } = useNavigation();

  const { setEmailData, setPasswordData } = Sotre_auth();

  const {
    setTodoGroupData,
    setTodoNameData,
    setTodoStartDateData,
    setTodoEndDateData,
    setTodoStateData,
  } = Sotre_Todo();

  const { setFieldGroupData, setFieldNameData, setFetchFieldsData } =
    Sotre_Field();

  const { setPinFieldData, setPinNameData, setPinLinkData, setFetchPinsData } =
    Sotre_Pin();

  const { setUserInfo, UserInfo } = Sotre_User();

  const Fun_serUserInfo = async () => {
    const interests = await getUserInfo();
    setUserInfo(interests);
  };

  useEffect(() => {
    localStorage.removeItem("changeStartDate");
    localStorage.removeItem("changeEndDate");
    localStorage.removeItem("Pin_Name");
    localStorage.removeItem("Todo_EndDate");
    localStorage.removeItem("Todo_Name");
    localStorage.removeItem("filed");
    localStorage.removeItem("ToodoState");
    localStorage.removeItem("Todo_StartDate");
    localStorage.removeItem("Group");
    localStorage.removeItem("Pin_Src");
    localStorage.removeItem("img");
    localStorage.removeItem("Field_id");
    localStorage.removeItem("Pin_id");
    localStorage.removeItem("Field");
    setEmailData("");
    setPasswordData("");
    setTodoGroupData("");
    setTodoNameData("");
    setTodoStartDateData("");
    setTodoEndDateData("");
    setTodoStateData("");
    setFieldGroupData("");
    setFieldNameData("");
    setPinFieldData("");
    setPinNameData("");
    setPinLinkData("");
    setFetchFieldsData([]);
    setFetchPinsData([]);

    if (
      !localStorage.getItem("accessToken") ||
      !localStorage.getItem("refreshToken")
    ) {
      navigateSignin();
    }

    Fun_serUserInfo();
  }, []);

  //web,app,server,walk,outer
  return (
    <Dev>
      <Header></Header>
      <Field_Box>
        <Field_Box>
          {UserInfo.map((name, index) => (
            <Home_Field key={index} name={name} />
          ))}
        </Field_Box>
      </Field_Box>
    </Dev>
  );
}

export default Home;
