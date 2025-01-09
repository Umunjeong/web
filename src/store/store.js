import { create } from "zustand";

const auth = create((set, get) => ({
  EmailData: "",
  PasswordData: "",

  setEmailData: (Data) => set(() => ({ EmailData: Data })),
  setPasswordData: (Data) => set(() => ({ PasswordData: Data })),

  getEmailData: () => get().EmailData,
  getPasswordData: () => get().PasswordData,
}));

export default auth;
