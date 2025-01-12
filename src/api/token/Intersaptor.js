// axios의 인스턴스 객체이므로 라우터 함수를 사용할수 없음
import axios from "axios";
import { IssuanceToken, CheckToken } from "./Token";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // 로그인 관련 URL은 인터셉터를 거치지 않도록 예외 처리
    if (config.url === "/auth/signin" || config.url === "/auth/signup") {
      return config;
    }

    const accessToken = localStorage.getItem("accessToken");

    // accessToken이 없으면 로그인 페이지로 리디렉션
    if (!accessToken) {
      window.location.href = "/signin";
      return config;
    }

    // accessToken이 유효하지 않으면 토큰 발급 요청
    if (!(await CheckToken(accessToken))) {
      await IssuanceToken(() => (window.location.href = "/signin"));
      const newAccessToken = localStorage.getItem("accessToken");
      console.log(newAccessToken);
      config.headers["Authorization"] = `Bearer ${newAccessToken}`;
    } else {
      console.log(accessToken);
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/signin"; // 401 에러 발생 시 로그인 페이지로 리디렉션
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
