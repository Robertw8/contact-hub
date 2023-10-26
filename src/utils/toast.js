import toast from "react-hot-toast";

export const successToast = text => {
  toast.success(text);
};

export const errorToast = text => {
  toast.error(text);
};
