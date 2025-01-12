import { create } from "zustand";

export const auth = create((set) => ({
  EmailData: "",
  PasswordData: "",

  setEmailData: (Data) => set(() => ({ EmailData: Data })),
  setPasswordData: (Data) => set(() => ({ PasswordData: Data })),
}));

export const Todo = create((set) => ({
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
}));

export const Field = create((set) => ({
  FieldGropData: "",
  FieldNameData: "",
  FieldImgData: "",

  setFieldGropData: (FieldGropData) => set({ FieldGropData }),
  setFieldNameData: (FieldNameData) => set({ FieldNameData }),
  setFieldImgData: (FieldImgData) => set({ FieldImgData }),
}));

export const Pin = create((set) => ({
  PinFieldData: "",
  PinNameData: "",
  PinLinkData: "",
  PinImgData: "",

  setPinFieldData: (PinFieldData) => set({ PinFieldData }),
  setPinNameData: (PinNameData) => set({ PinNameData }),
  setPinLinkData: (PinLinkData) => set({PinLinkData}),
  setPinImgData: (PinImgData) => set({ PinImgData }),
}));
