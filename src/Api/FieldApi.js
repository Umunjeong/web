import axiosInstance from "./Token/Intersaptor.js";
const apiUrl = process.env.REACT_APP_API_URL;

//추가
export const FieldPost = async (group, name, img) => {
  try {
    const formData = new FormData();
    formData.append("group", group);
    formData.append("field", name);
    if (img) {
      formData.append("img", img); // 이미지 파일을 FormData에 추가
    }

    const response = await axiosInstance.post(
      `${apiUrl}/field/post`,
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
export const FieldPatch = async (id, afterGroup, afterField, img) => {
  try {
    const formData = new FormData();
    formData.append("id", id);
    formData.append("afterGroup", afterGroup);
    formData.append("afterField", afterField);
    if (img) {
      formData.append("img", img); // 이미지 파일을 FormData에 추가
    }

    const response = await axiosInstance.patch(
      `${apiUrl}/field/patch`,
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
export const FieldDelete = async (id) => {
  try {
    const response = await axiosInstance.delete(`${apiUrl}/field/delete`, {
      data: {
        id,
      },
    });

    if (response.data.type === "success") {
      return "success";
    }
  } catch (error) {
    console.error("Error in toDoDelete:", error);
    return "error";
  }
};
