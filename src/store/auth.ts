import { create } from "zustand";
import { EMAIL_EXAMPLE, PASSWORD_EXAMPLE } from "../utils/constants";

export interface AuthState {
  isAuth: boolean;
  signIn: (email: string, password: string) => boolean;
  signOut: () => void;
  error: string;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  signIn: (email, password) => {
    const isSignInSuccessful = email === EMAIL_EXAMPLE && password === PASSWORD_EXAMPLE;

    if (isSignInSuccessful) {
      set({ isAuth: true });
    } else {
      set({ error: "Account not found" });
    }

    return isSignInSuccessful;
  },
  signOut: () => set({ isAuth: false }),
  error: "",
}));

export default useAuthStore;
