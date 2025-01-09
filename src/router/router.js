import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  return {
    navigateHome: () => navigate("/home"),
    navigateFirstPage: () => navigate("/firstPage"),
    navigateSignin: () => navigate("/signin"),
    navigateSignupSignup: () => navigate("/signup"),
    navigateField: () => navigate("/field"),
    navigatePin: () => navigate("/pin"),
    navigateCreatePin: () => navigate("/createPin"),
    navigateUpdatePin: () => navigate("/updatePin"),
    navigateCreateField: () => navigate("/createField"),
    navigateUpdateField: () => navigate("/updateField"),
    navigateCreateTodo: () => navigate("/createTodo"),
    navigateUpdateTodo: () => navigate("/updateTodo"),
  };
};

export default useNavigation;
