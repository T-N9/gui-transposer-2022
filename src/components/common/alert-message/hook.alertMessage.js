import { useDispatch, useSelector } from "react-redux";

const Hook = () => {

    const dispatch = useDispatch();
    const { alert, message, status } = useSelector((state) => state.alertMessage);

    return {
        alert,
        message,
        status
    }
}

export default Hook;
