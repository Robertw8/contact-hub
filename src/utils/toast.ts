import toast from "react-hot-toast";

const successToast = (text: string) => {
  toast.success(text);
};

const errorToast = (text: string) => {
  toast.error(text);
};

export { successToast, errorToast };
