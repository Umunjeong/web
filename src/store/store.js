import { create } from "zustand";

export const Sotre_auth = create((set) => ({
  EmailData: "",
  PasswordData: "",

  setEmailData: (Data) => set(() => ({ EmailData: Data })),
  setPasswordData: (Data) => set(() => ({ PasswordData: Data })),
}));

export const Sotre_Todo = create((set) => ({
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

export const Sotre_Field = create((set) => ({
  FieldGropData: "",
  FieldNameData: "",
  FieldImgData: null,
  FetchFieldsData: [],
  FiledSearchData: "",

  setFieldGropData: (FieldGropData) => set({ FieldGropData }),
  setFieldNameData: (FieldNameData) => set({ FieldNameData }),
  setFieldImgData: (FieldImgData) => set({ FieldImgData }),
  setFetchFieldsData: (FetchFieldsData) => set({ FetchFieldsData }),
  setFieldSearchDara: (FiledSearchData) => set({ FiledSearchData }),
}));

export const Sotre_Pin = create((set) => ({
  PinFieldData: "",
  PinNameData: "",
  PinLinkData: "",
  PinImgData: null,
  FetchPinsData: [],
  PinSearchData: "",

  setPinFieldData: (PinFieldData) => set({ PinFieldData }),
  setPinNameData: (PinNameData) => set({ PinNameData }),
  setPinLinkData: (PinLinkData) => set({ PinLinkData }),
  setPinImgData: (PinImgData) => set({ PinImgData }),
  setFetchPinsData: (FetchPinsData) => set({ FetchPinsData }),
  setPinSearchDara: (PinSearchData) => set({ PinSearchData }),
}));
