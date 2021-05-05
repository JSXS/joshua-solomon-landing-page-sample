import React from "react";
import Loader from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { clickSignUpButton } from "../../../redux/actions";
import { isPendingSelector, signUpButtonIsDisabledSelector } from "../../../redux/selectors";
import "./index.css";

const SignUpButton = () => {

    const dispatch = useDispatch();
    const disabled = useSelector(signUpButtonIsDisabledSelector);
    const inputClassName = `sign-up-button w-100 border-0 p-2 ${disabled ? "disabled" : ""}`;
    const onClick = (event) => { event.preventDefault(); dispatch(clickSignUpButton()); };
    const isPending = useSelector(isPendingSelector);
    const spinnerClassName = `spinner ${isPending ? "visible" : "hidden"} ml-3`;

    return <div className={"sign-up-button-container d-flex"}>
        <input
            className={inputClassName}
            type={"submit"}
            value={"Sign Up"}
            onClick={onClick} />
        <div className={spinnerClassName}>
            <Loader
                type="TailSpin"
                height={"2.1rem"}
                width={"2.1rem"}
                color={"#000"} />
        </div>
    </div>;
}

export default SignUpButton;