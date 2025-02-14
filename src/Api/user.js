//유저정보 가져오는 API(배열)
import axiosInstance from "./Token/Intersaptor.js";
const apiUrl = import.meta.env.VITE_API_URL;

export const getUserInfo = async () => {
  try {
    const response = await axiosInstance.get(`${apiUrl}/user/`);
    return response.data.userInfo[0].interest;
  } catch (error) {
    console.error("Failed to fetch user info:", error);
  }
};
