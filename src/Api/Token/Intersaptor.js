import axios from "axios";
import { IssuanceToken, CheckToken } from "./Token.js";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (config.url === "/auth/signin" || config.url === "/auth/signup") {
      return config;
    }

    const accessToken = localStorage.getItem("accessToken");

    if (!accessToken) {
      window.location.href = "/signin";
      return config;
    }

    if (!(await CheckToken(accessToken))) {
      await IssuanceToken(() => (window.location.href = "/signin"));
      const newAccessToken = localStorage.getItem("accessToken");

      config.headers["Authorization"] = `Bearer ${newAccessToken}`;
    } else {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    console.log(config);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      window.location.href = "/signin";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
