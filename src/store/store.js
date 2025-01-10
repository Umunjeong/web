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
  TodoGropData: "",
  TodoNameData: "",
  TodoStartDateData: "",
  TodoEndDateData: "",
  TodoStateData: "",

  setTodoGropData: (TodoGropData) => set({ TodoGropData }),
  setTodoNameData: (TodoNameData) => set({ TodoNameData }),
  setTodoStartDateData: (TodoStartDateData) => set({ TodoStartDateData }),
  setTodoEndDateData: (TodoEndDateData) => set({ TodoEndDateData }),
  setTodoStateData: (TodoStateData) => set({ TodoStateData }),

  getTodoGropData: () => get().TodoGropData,
  getTodoNameData: () => get().TodoNameData,
  getTodoStartDateData: () => get().TodoStartDateData,
  getTodoEndDateData: () => get().TodoEndDateData,
  getTodoStateData: () => get().TodoStateData,
}));
