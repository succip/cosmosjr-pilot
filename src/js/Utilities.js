import { customAlphabet } from "nanoid";
import Toastify from "toastify-js";

export const generateId = () => {
  const nanoid = customAlphabet("1234567890abcdef", 6);
  return nanoid().toString();
};

export const toast = ({ text, gravity = "bottom", position = "center", close = true }) => {
  Toastify({
    text,
    close,
    gravity,
    position,
    style: {
      background: "#262626",
    },
  }).showToast();
};
