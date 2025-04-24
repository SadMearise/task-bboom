import { User } from "../types";
import { AccessLevel } from "../types/enums";

export const PROJECT_NAME = "task-bboom";

export const LINKS = {
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

export const PASSWORD_EXAMPLE = import.meta.env.VITE_CTP_PASSWORD_EXAMPLE;

export const EMAIL_EXAMPLE = import.meta.env.VITE_CTP_EMAIL_EXAMPLE;

export const INITIAL_USERS: User[] = [
  {
    id: "1",
    name: "Иван Иванов",
    email: "ivan@example.com",
    role: "Аналитик",
    accessLevel: AccessLevel.Analyst,
  },
  {
    id: "2",
    name: "Анна Смирнова",
    email: "anna@example.com",
    role: "Оператор",
    accessLevel: AccessLevel.User,
  },
  {
    id: "3",
    name: "Пётр Кузнецов",
    email: "petr@example.com",
    role: "Разработчик",
    accessLevel: AccessLevel.Developer,
  },
  {
    id: "4",
    name: "Елена Морозова",
    email: "elena@example.com",
    role: "Тестировщик",
    accessLevel: AccessLevel.User,
  },
  {
    id: "5",
    name: "Алексей Волков",
    email: "aleksey@example.com",
    role: "Администратор",
    accessLevel: AccessLevel.Admin,
  },
  {
    id: "6",
    name: "Мария Федорова",
    email: "maria@example.com",
    role: "Аналитик",
    accessLevel: AccessLevel.Analyst,
  },
  {
    id: "7",
    name: "Николай Сидоров",
    email: "nikolay@example.com",
    role: "Оператор",
    accessLevel: AccessLevel.User,
  },
  {
    id: "8",
    name: "Ольга Никитина",
    email: "olga@example.com",
    role: "Разработчик",
    accessLevel: AccessLevel.Developer,
  },
  {
    id: "9",
    name: "Дмитрий Захаров",
    email: "dmitriy@example.com",
    role: "Тестировщик",
    accessLevel: AccessLevel.User,
  },
  {
    id: "10",
    name: "Светлана Белова",
    email: "svetlana@example.com",
    role: "Администратор",
    accessLevel: AccessLevel.Admin,
  },
];
