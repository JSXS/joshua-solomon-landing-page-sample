import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, toggleTermsAndConditions } from "../../../redux/actions";
import { emailValueSelector, termsAndConditionsSelector } from "../../../redux/selectors";
import "./index.css";

const Form = () => {

    const dispatch = useDispatch();
    const emailValue = useSelector(emailValueSelector);
    const onEmailChange = (event) => dispatch(setEmail(event?.target?.value));
    const termsAndConditionsChecked = useSelector(termsAndConditionsSelector);
    const onTermsAndConditionsChange = (event) => dispatch(toggleTermsAndConditions(event?.target?.checked));

    return <form>
        <label htmlFor={"email"}>Email address</label>
        <input type={"email"} name={"email"} value={emailValue} onChange={onEmailChange} />
        <input type={"checkbox"} name={"terms_and_conditions"} value={"terms_and_conditions"} checked={termsAndConditionsChecked} onChange={onTermsAndConditionsChange} />
        <label htmlFor={"terms_and_conditions"}>I agree to the terms and conditions</label>
        <input type={"submit"} value={"Sign Up"} />
    </form>
}

export default Form;