
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Toast = (type, msg) => {

    if (type === 'error'){
        toast.error(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition:Bounce                 
        });
    } else {
        toast.success(msg, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition:Bounce                 
        });
    }
    
        
}