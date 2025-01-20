import axios from "axios";
const apiUrl = import.meta.env.VITE_API_URL;

export const IssuanceToken = async (navigateSignin) => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    console.log("로그인이 필요합니다, 로그인으로 이동합니다.");
    navigateSignin();
    return;
  }

  try {
    // 서버에 토큰 발급 요청
    const response = await axios.post(`${apiUrl}/token/issuance`, {
      refreshToken: refreshToken,
    });

    if (response.data.type === "success") {
      const newAccessToken = response.data.accessToken;
      localStorage.setItem("accessToken", newAccessToken);
      navigateSignin();
    } else {
      navigateSignin();
    }
  } catch (error) {
    localStorage.removeItem("accessToken");
    navigateSignin();
  }
};

// 토큰 유효성 확인 함수
export const CheckToken = async (accessToken) => {
  if (!accessToken) {
    return false; // accessToken이 없으면 false 반환
  }

  try {
    const response = await axios.post(
      `${apiUrl}/token/check`,
      {},
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    return response.data.type === "success"; // 토큰이 유효하면 true 반환
  } catch (error) {
    console.error("토큰 확인 오류:", error);
    return false; // 오류가 발생하면 false 반환
  }
};
