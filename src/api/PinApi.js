import axios from "axios";

//추가
export const PinPost = async (grop, field, pin, link, img, token) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/pin/post",
      {
        grop,
        field,
        pin,
        link,
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
export const PinPatch = async (
  id,
  afterGrop,
  afterField,
  afterPin,
  afterLink,
  img,
  token
) => {
  try {
    const response = await axios.patch(
      "http://localhost:3000/pin/patch",
      {
        id: id,
        afterGrop,
        afterField,
        afterPin,
        afterLink,
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
export const PinDelete = async (id, token) => {
  try {
    const response = await axios.delete("http://localhost:3000/pin/delete", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        id: id,
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
