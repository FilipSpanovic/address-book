import { toast } from "react-toastify";

export const showNotificationAndRedirect = (msg, redirect) => (e) => {
  toast.success(msg);
  redirect();
};
