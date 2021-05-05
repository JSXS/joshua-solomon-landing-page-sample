import React from "react";
import { useSelector } from "react-redux";
import { responseMessageSelector, responseStatusSelector } from "../../redux/selectors";
import "./index.css";

const ResponseMessage = () => {

    const message = useSelector(responseMessageSelector);
    const status = useSelector(responseStatusSelector);
    const className = `respsone-message alert alert-${status} ${message ? "visible" : "hidden"}`;

    return <div className={className} role={"alert"}>
        {message}
    </div>
}

export default ResponseMessage;