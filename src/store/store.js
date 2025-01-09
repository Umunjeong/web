import { create } from "zustand";

export const auth = create((set, get) => ({
  EmailData: "",
  PasswordData: "",

  setEmailData: (Data) => set(() => ({ EmailData: Data })),
  setPasswordData: (Data) => set(() => ({ PasswordData: Data })),

  getEmailData: () => get().EmailData,
  getPasswordData: () => get().PasswordData,
}));

export const Todo = create((set, get) => ({
  GropData: "",
  TodoNameData: "",
  TodoStartDateData: "",
  TodoEndDateData: "",
  TodoStateData: "",

  setGropData: (Data) => set(() => ({ GropData: Data })),
  setTodoNameData: (Data) => set(() => ({ TodoNameData: Data })),
  setTodoStartDateData: (Data) => set(() => ({ TodoStartDateData: Data })),
  setTodoStateData: (Data) => set(() => ({ TodoStateData: Data })),

  getGropData: () => get().GropData,
  getTodoNameData: () => get.TodoNameData,
  getTodoStartDateData: () => get.TodoStartDateData,
  getTodoEndDateData: () => get.TodoEndDateData,
  getTodoStateData: () => get.TodoStateData,
}));
