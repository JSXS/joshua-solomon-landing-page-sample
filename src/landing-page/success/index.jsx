import React from "react";
import { useSelector } from "react-redux";
import { successMessageIsVisibleSelector } from "../../redux/selectors";
import "./index.css";

const SuccessMessage = () => {

    const isVisible = useSelector(successMessageIsVisibleSelector);

    if (!isVisible) {
        return null;
    }

    return <div className="success">
        Thank You
    </div>
}

export default SuccessMessage;