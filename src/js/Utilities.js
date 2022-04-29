import { customAlphabet } from "nanoid";

export const generateId = () => {
  const nanoid = customAlphabet("1234567890abcdef", 6);
  return nanoid().toString();
};
