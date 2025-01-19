import { useEffect, useState } from "react";
import axiosInstance from "../../../Api/Token/Intersaptor.js";

import {
  Dev,
  Home_Feld_Name,
  Home_Todo_Box,
  Home_Todo_Box_Topber_Box,
  Home_Todo_Box_Topber_spean,
  Home_Todo_Box_Topber_create,
  Home_Todo_Box_Display_Box,
} from "../../Styles/home_Field";

import Home_Todo from "../Home_Todo_Item/Home_Todo_Item.jsx";
import useNavigation from "../../../router/router.js";

function Home_Field({ name }) {
  const { navigateField, navigateCreateTodo } = useNavigation();
  const [todos, setTodos] = useState([]);
  const group = localStorage.getItem("Group")
    ? localStorage.getItem("Group")
    : name;

  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const date = getCurrentDate();
      try {
        const response = await axiosInstance.get(
          "http://localhost:3000/todolist/",
          {
            params: {
              date,
              group: group,
            },
          }
        );

        if (response.data.type === "success") {
          const todoData = Object.values(response.data.todoInfo);

          setTodos(todoData);
        } else {
          console.error("Failed to fetch todos:", response.data);
        }
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      }
    };

    fetchTodos();
  }, [group]);

  const goToF_ield_Heldle = (name) => {
    if (name === "web" || name === "server" || name === "app") {
      localStorage.setItem("Group", name);
      navigateField();
    }
  };

  const goTo_UpdateToDo_Heldle = (name) => {
    localStorage.setItem("Group", name);
    navigateCreateTodo();
  };

  return (
    <Dev>
      <Home_Feld_Name onClick={() => goToF_ield_Heldle(name)}>
        <span>{name}</span>
        <span>{">"}</span>
      </Home_Feld_Name>
      <Home_Todo_Box>
        <Home_Todo_Box_Topber_Box onClick={() => goTo_UpdateToDo_Heldle(name)}>
          <Home_Todo_Box_Topber_spean>할일</Home_Todo_Box_Topber_spean>
          <Home_Todo_Box_Topber_create>+</Home_Todo_Box_Topber_create>
        </Home_Todo_Box_Topber_Box>
        <Home_Todo_Box_Display_Box>
          {todos.map((todo) => (
            <Home_Todo
              id={todo.id}
              Todo_Name={todo.name}
              Todo_WtartDate={todo.start}
              Todo_EndDate={todo.end}
              name={name}
              state={todo.state}
            />
          ))}
        </Home_Todo_Box_Display_Box>
      </Home_Todo_Box>
    </Dev>
  );
}

export default Home_Field;
