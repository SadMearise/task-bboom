import { create } from "zustand";
import { User } from "../types";
import { INITIAL_USERS } from "../utils/constants";
import { AccessLevel } from "../types/enums";

export interface UserState {
  users: User[];
  removeUser: (userId: User["id"]) => void;
  changeRole: (userId: User["id"], role: string) => void;
  changeAccessLevel: (userId: User["id"], accessLevel: AccessLevel) => void;
}

export const useUserStore = create<UserState>((set) => ({
  users: INITIAL_USERS,
  removeUser: (userId) => {
    set((state) => ({
      users: state.users.filter((user) => user.id !== userId),
    }));
  },
  changeRole: (userId, role) => {
    set((state) => ({
      users: state.users.map((user) => (user.id === userId ? { ...user, role } : user)),
    }));
  },
  changeAccessLevel: (userId, accessLevel) => {
    set((state) => ({
      users: state.users.map((user) => (user.id === userId ? { ...user, accessLevel } : user)),
    }));
  },
}));

export default useUserStore;
