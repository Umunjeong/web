// 핀 추가

import {
  Dev,
  CreatePin_Box,
  From_Box,
  Button_Box,
  From_name_Box,
  From_else_Box,
  Submit_Button,
} from "../../../../styles/createPin";

import Header from "../../../../components/header/header";
import All_check from "../../../../components/Field_ Pin_check/Field_ Pin_check";

function CreatePin() {
  return (
    <Dev>
      <Header></Header>
      <CreatePin_Box>
        <All_check></All_check>
        <From_Box>
          <From_name_Box></From_name_Box>
          <From_else_Box></From_else_Box>
        </From_Box>
        <Button_Box>
          <Submit_Button></Submit_Button>
        </Button_Box>
      </CreatePin_Box>
    </Dev>
  );
}

export default CreatePin;
