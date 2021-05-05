import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail } from "../../../redux/actions";
import { emailErrorSelector, emailIsValidSelector, emailSelector } from "../../../redux/selectors";
import ValidationMessage from "../../validation-message";
import "./index.css";

const EmailField = () => {

    const dispatch = useDispatch();
    const value = useSelector(emailSelector);
    const error = useSelector(emailErrorSelector);
    const onChange = (event) => dispatch(changeEmail(event?.target?.value));
    const isValid = useSelector(emailIsValidSelector);
    const [hasBlurred, setHasBlurred] = React.useState(false);
    const onBlur = () => setHasBlurred(true);

    return <>
        <label htmlFor={"email"}>Email address</label>
        <input
            className={"email-input w-100 border border-1 p-2"}
            type={"email"}
            name={"email"}
            value={value}
            onChange={onChange}
            onBlur={onBlur} />
        <ValidationMessage
            canDisplay={hasBlurred}
            error={error}
            isValid={isValid}>
            Please enter a valid email address.
            </ValidationMessage>
    </>;
}

export default EmailField;