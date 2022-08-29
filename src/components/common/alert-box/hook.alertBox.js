import { useSelector, useDispatch } from "react-redux";

import { setCloseAlert } from "../../../store/alertBoxSlice";

const Hook = () => {

    const dispatch = useDispatch();
    const { message, alert } = useSelector((state) => state.alertBox)

    const closeAlertBox = () => {
        dispatch(setCloseAlert());
    }

    return {
        message, alert, closeAlertBox
    }
}

export default Hook;
