import { User } from "../types";
import { AccessLevel } from "../types/enums";

export const PROJECT_NAME = "task-bboom";

const isProd = import.meta.env.MODE === "production";

export const BASENAME = isProd ? `/${PROJECT_NAME}` : "/";

export const LINKS = {
  home: {
    route: "/",
  },
  signin: {
    route: "signin",
  },
  admin: {
    route: "admin",
  },
  error: {
    route: "*",
  },
};

export const PASSWORD_EXAMPLE = "example@example.com";

export const EMAIL_EXAMPLE = "12345678";

export const INITIAL_USERS: User[] = [
  {
    id: "1",
    name: "Ivan Ivanov",
    email: "ivan@example.com",
    role: "Analyst",
    accessLevel: AccessLevel.Analyst,
  },
  {
    id: "2",
    name: "Anna Smirnova",
    email: "anna@example.com",
    role: "Operator",
    accessLevel: AccessLevel.User,
  },
  {
    id: "3",
    name: "Petr Kuznetsov",
    email: "petr@example.com",
    role: "Developer",
    accessLevel: AccessLevel.Developer,
  },
  {
    id: "4",
    name: "Elena Morozova",
    email: "elena@example.com",
    role: "Tester",
    accessLevel: AccessLevel.User,
  },
  {
    id: "5",
    name: "Alexey Volkov",
    email: "aleksey@example.com",
    role: "Administrator",
    accessLevel: AccessLevel.Admin,
  },
  {
    id: "6",
    name: "Maria Fedorova",
    email: "maria@example.com",
    role: "Analyst",
    accessLevel: AccessLevel.Analyst,
  },
  {
    id: "7",
    name: "Nikolay Sidorov",
    email: "nikolay@example.com",
    role: "Operator",
    accessLevel: AccessLevel.User,
  },
  {
    id: "8",
    name: "Olga Nikitina",
    email: "olga@example.com",
    role: "Developer",
    accessLevel: AccessLevel.Developer,
  },
  {
    id: "9",
    name: "Dmitriy Zakharov",
    email: "dmitriy@example.com",
    role: "Tester",
    accessLevel: AccessLevel.User,
  },
  {
    id: "10",
    name: "Svetlana Belova",
    email: "svetlana@example.com",
    role: "Administrator",
    accessLevel: AccessLevel.Admin,
  },
];
