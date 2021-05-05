import React from "react";
import "./index.css";

const popover = props => {

    const { canDisplay, children, error, isValid } = props;

    const isVisible = (canDisplay && !isValid) || error;

    return <div className={"validation-message text-danger"}>
        {isVisible ? children : <>&nbsp;</>}
    </div>;
}

export default popover;