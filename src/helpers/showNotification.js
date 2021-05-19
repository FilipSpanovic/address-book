import { toast } from "react-toastify";

export const showNotification = (msg, redirect) => (e) => {
  toast.success(msg);
  redirect();
};
