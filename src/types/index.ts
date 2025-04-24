import { AccessLevel } from "./enums";

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  accessLevel: AccessLevel;
};
