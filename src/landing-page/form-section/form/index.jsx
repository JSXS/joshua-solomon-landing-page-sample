import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clickSignUpButton, setEmail, toggleTermsAndConditions } from "../../../redux/actions";
import { emailSelector, termsAndConditionsSelector } from "../../../redux/selectors";
import "./index.css";

const Form = () => {

    const dispatch = useDispatch();
    const emailValue = useSelector(emailSelector);
    const onEmailChange = (event) => dispatch(setEmail(event?.target?.value));
    const termsAndConditionsChecked = useSelector(termsAndConditionsSelector);
    const onTermsAndConditionsChange = (event) => dispatch(toggleTermsAndConditions(event?.target?.checked));
    const onClickSignUpButton = (event) => { event.preventDefault(); dispatch(clickSignUpButton()); };

    return <form>
        <div className={"d-flex mb-3 flex-column"}>
            <label htmlFor={"email"}>Email address</label>
            <input
                className={"email-input w-100 border border-1 p-2"}
                type={"email"}
                name={"email"}
                value={emailValue}
                onChange={onEmailChange} />
        </div>
        <div className="mb-3">
            <input
                className={"terms-and-conditions-checkbox mr-2"}
                type={"checkbox"}
                name={"terms_and_conditions"}
                value={"terms_and_conditions"}
                checked={termsAndConditionsChecked}
                onChange={onTermsAndConditionsChange} />
            <label htmlFor={"terms_and_conditions"}>I agree to the terms and conditions</label>
        </div>
        <input
            className={"sign-up-button w-100 border-0 p-2"}
            type={"submit"}
            value={"Sign Up"}
            onClick={onClickSignUpButton} />
    </form>
}

export default Form;