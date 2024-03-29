// just created this component so i can simply use 
// i have tried to use single with different types like using toast[type] but in this it didn't work

import { toast } from "react-toastify";
export const toaster = {
    show: (type: string, message: any,) => {
        switch (type) {
            case 'success':
                toast.success(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                break;
            case 'warn':
                toast.warn(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                });
                break;
            case 'error':
                toast.error(message, {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                break;

            default:
                break;
        }
    }
}