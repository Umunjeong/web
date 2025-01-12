import axios from "axios";

//추가
export const FieldPost = async (grop, name, img, token) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/field/post",
      {
        grop,
        field: name,
        img,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.type === "success") {
      return "success";
    }
  } catch {
    return "error";
  }
};

//수정
export const FieldPatch = async (id, afterGrop, afterField, img, token) => {
  try {
    const response = await axios.patch(
      "http://localhost:3000/field/patch",
      {
        id,
        afterGrop,
        afterField,
        img,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.data.type === "success") {
      return "success";
    }
  } catch {
    return "error";
  }
};

//삭제
export const FieldDelete = async (id, token) => {
  try {
    const response = await axios.delete("http://localhost:3000/field/delete", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
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
