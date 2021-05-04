import React from "react";
import { useSelector } from "react-redux";
import { successMessageIsVisibleSelector } from "../../redux/selectors";
import "./index.css";

const SuccessMessage = () => {

    const isVisible = useSelector(successMessageIsVisibleSelector);
    const className = `success alert alert-success ${isVisible ? "visible" : "hidden"}`;

    return <div className={className}>
        Thank You
    </div>
}

export default SuccessMessage;