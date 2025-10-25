import toast from 'react-hot-toast';

const toastMessage = {
    success: (message) => toast.success(message, { duration: 3000 }),
    error: (message) => toast.error(message, { duration: 3000 }),
};

export default toastMessage;
