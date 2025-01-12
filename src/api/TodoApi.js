import axios from "axios";

//추가
export const toDoPost = async (
  grop,
  name,
  state,
  todoStartDay,
  todoEndDay,
  token
) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/todolist/post",
      {
        grop,
        name,
        state,
        todoStartDay,
        todoEndDay,
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
export const toDoPatch = async (
  id,
  afterGrop,
  afterTodo,
  state,
  afterStartDay,
  afterEndDay,
  token
) => {
  try {
    const response = await axios.patch(
      "http://localhost:3000/todolist/patch",
      {
        id,
        afterGrop,
        afterTodo,
        state,
        afterStartDay,
        afterEndDay,
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
export const toDoDelete = async (id, token) => {
  try {
    const response = await axios.delete(
      "http://localhost:3000/todolist/delete",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: {
          id,
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
