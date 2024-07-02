import axios from "axios";

const axiosErrorHandler = (error: unknown) => {
    if (axios.isAxiosError(error)) {
        return error.response?.data.error.message || error.response?.data.error || error.message
    }
    else {
        return "An unexpected error";
    }
}


export default axiosErrorHandler