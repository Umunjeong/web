import { Auth_input_spen, Auth_inpput_input } from "../styles/auth_input";
import { auth } from "../../store/store";

function Auth_input({ name, type }) {
  const { setEmailData, setPasswordData } = auth();

  const handleChange = (event) => {
    const value = event.target.value;
    if (name === "email") {
      setEmailData(value);
    } else if (name === "password") {
      setPasswordData(value);
    }
  };

  return (
    <div>
      <Auth_input_spen>{name}</Auth_input_spen>
      <Auth_inpput_input type={type} onChange={handleChange} />
    </div>
  );
}

export default Auth_input;
