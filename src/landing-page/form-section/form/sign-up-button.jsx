import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickSignUpButton } from "../../../redux/actions";
import { signUpButtonIsDisabledSelector } from "../../../redux/selectors";
import "./index.css";

const SignUpButton = () => {

    const dispatch = useDispatch();
    const disabled = useSelector(signUpButtonIsDisabledSelector);
    const className = `sign-up-button w-100 border-0 p-2 ${disabled ? "disabled" : ""}`;
    const onClick = (event) => { event.preventDefault(); dispatch(clickSignUpButton()); };

    return <input
        className={className}
        type={"submit"}
        value={"Sign Up"}
        onClick={onClick} />;
}

export default SignUpButton;