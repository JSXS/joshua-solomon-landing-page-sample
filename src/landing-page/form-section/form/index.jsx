import React from "react";
import "./index.css";

const Form = props => {

    return <form>
        <label htmlFor={"email"}>Email address</label>
        <input type={"email"} name={"email"} />
        <input type={"checkbox"} name={"terms_and_conditions"} value={"terms_and_conditions"} />
        <label htmlFor={"terms_and_conditions"}>I agree to the terms and conditions</label>
        <input type={"submit"} value={"Sign Up"} />
    </form>
}

export default Form;