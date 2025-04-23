import { create } from "zustand";
import { EMAIL_EXAMPLE, PASSWORD_EXAMPLE } from "../utils/constants";

type SignInResult = { ok: true } | { ok: false; error: string };

export interface AuthState {
  isAuth: boolean;
  signIn: (email: string, password: string) => SignInResult;
  signOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuth: false,
  signIn: (email, password) => {
    const isSignInSuccessful = email === EMAIL_EXAMPLE && password === PASSWORD_EXAMPLE;

    if (isSignInSuccessful) {
      set({ isAuth: true });

      return { ok: true };
    }

    return {
      ok: false,
      error: "Account not found",
    };
  },
  signOut: () => set({ isAuth: false }),
  error: "",
}));

export default useAuthStore;
