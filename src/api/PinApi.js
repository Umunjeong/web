import axiosInstance from "../api/token/Intersaptor";

//추가
export const PinPost = async (grop, field, pin, link, img) => {
  try {
    const formData = new FormData();
    console.log(img);
    formData.append("grop", grop);
    formData.append("field", field);
    formData.append("pin", pin);
    formData.append("link", link);
    if (img) {
      formData.append("img", img); // 이미지 파일을 FormData에 추가
    }

    const response = await axiosInstance.post(
      "http://localhost:3000/pin/post",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // 헤더에 multipart/form-data 명시
        },
      }
    );

    if (response.data.type === "success") {
      return "success";
    }
  } catch (error) {
    console.error(error);
    return "error";
  }
};

//수정
export const PinPatch = async (
  id,
  afterGrop,
  afterField,
  afterPin,
  afterLink,
  img
) => {
  try {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("afterGrop", afterGrop);
    formData.append("afterField", afterField);
    formData.append("afterPin", afterPin);
    formData.append("afterLink", afterLink);
    if (img) {
      formData.append("img", img); // 이미지 파일을 FormData에 추가
    }

    const response = await axiosInstance.patch(
      "http://localhost:3000/pin/patch",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // 헤더에 multipart/form-data 명시
        },
      }
    );

    if (response.data.type === "success") {
      return "success";
    }
  } catch (error) {
    console.error(error);
    return "error";
  }
};

//삭제
export const PinDelete = async (id) => {
  try {
    const response = await axiosInstance.delete(
      "http://localhost:3000/pin/delete",
      {
        data: {
          id: id,
        },
      }
    );

    if (response.data.type === "success") {
      return "success";
    }
  } catch (error) {
    console.error("Error in toDoDelete:", error);
    return "error";
  }
};
