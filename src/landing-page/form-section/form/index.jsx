import React from "react";
import EmailField from "./email-field";
import "./index.css";
import SignUpButton from "./sign-up-button";
import TermsAndConditionsField from "./terms-and-conditions-field";

const Form = () => {

    return <form>
        <div className={"d-flex mb-3 flex-column"}>
            <EmailField />
        </div>
        <div className="mb-3">
            <TermsAndConditionsField />
        </div>
        <SignUpButton />
    </form>
}

export default Form;