import { customAlphabet } from "nanoid";
import Toastify from "toastify-js";

export const generateId = () => {
  const nanoid = customAlphabet("1234567890abcdef", 6);
  return nanoid().toString();
};

export const toast = (text) => {
  Toastify({
    text,
  }).showToast();
};
