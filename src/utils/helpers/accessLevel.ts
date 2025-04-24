import { AccessLevel } from "../../types/enums";

export const getAccessLevelValues = () =>
  Object.values(AccessLevel).filter((value): value is AccessLevel => typeof value === "number");
