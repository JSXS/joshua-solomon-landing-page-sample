import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTermsAndConditions } from "../../../redux/actions";
import { termsAndConditionsErrorSelector, termsAndConditionsSelector } from "../../../redux/selectors";
import ValidationMessage from "../../validation-message";
import "./index.css";

const TermsAndConditionsField = () => {

    const dispatch = useDispatch();
    const checked = useSelector(termsAndConditionsSelector);
    const error = useSelector(termsAndConditionsErrorSelector);
    const onChange = (event) => dispatch(changeTermsAndConditions(event?.target?.checked));
    const [hasBlurred, setHasBlurred] = React.useState(false);
    const onBlur = () => setHasBlurred(true);

    return <>
        <input
            className={"terms-and-conditions-checkbox mr-2"}
            type={"checkbox"}
            name={"terms_and_conditions"}
            value={"terms_and_conditions"}
            checked={checked}
            onChange={onChange}
            onBlur={onBlur} />
        <label htmlFor={"terms_and_conditions"}>I agree to the terms and conditions</label>
        <ValidationMessage
            canDisplay={hasBlurred}
            error={error}
            isValid={checked}>
            Please accept the terms and conditions.
            </ValidationMessage>
    </>;
}

export default TermsAndConditionsField;