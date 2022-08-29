import { useSelector } from "react-redux";

const Hook = () => {
    const { alert, message, status } = useSelector((state) => state.alertMessage);

    return {
        alert,
        message,
        status
    }
}

export default Hook;
