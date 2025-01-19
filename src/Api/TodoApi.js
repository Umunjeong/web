import axiosInstance from "./Token/Intersaptor.js";

//추가
export const ToDoPost = async (
  group,
  name,
  state,
  todoStartDay,
  todoEndDay
) => {
  try {
    const response = await axiosInstance.post(
      "http://localhost:3000/todolist/post",
      {
        group,
        name,
        state,
        todoStartDay,
        todoEndDay,
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
export const ToDoPatch = async (
  id,
  afterGroup,
  afterTodo,
  state,
  afterStartDay,
  afterEndDay
) => {
  try {
    const response = await axiosInstance.patch(
      "http://localhost:3000/todolist/patch",
      {
        id,
        afterGroup,
        afterTodo,
        state,
        afterStartDay,
        afterEndDay,
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
export const ToDoDelete = async (id) => {
  try {
    const response = await axiosInstance.delete(
      "http://localhost:3000/todolist/delete",
      {
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
