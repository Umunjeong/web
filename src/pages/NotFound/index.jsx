import { useNavigate } from "react-router-dom"; // useNavigate 훅을 가져옵니다.
import {
  Dev,
  NotFound_Box,
  Span1,
  Span2,
  Spen_Goto_Box,
  GotoBehind,
  GotoHome,
} from ".././../styles/notFound.js";

import Header from "../../Components/Header/Header.jsx"

function NotFound() {
  const navigate = useNavigate(); // navigate 함수 사용

  const handleGoBack = () => {
    navigate(-1); // 뒤로 가기 (전으로)
  };

  const handleGoHome = () => {
    navigate("/home"); // 홈으로 이동
  };

  return (
    <Dev>
      <Header />
      <NotFound_Box>
        <Span1>404!</Span1>
        <Span2>페이지를 찾을수 없습니다.</Span2>
        <Spen_Goto_Box>
          <GotoBehind onClick={handleGoBack}>전으로</GotoBehind>
          <GotoHome onClick={handleGoHome}>홈으로</GotoHome>
        </Spen_Goto_Box>
      </NotFound_Box>
    </Dev>
  );
}

export default NotFound;
