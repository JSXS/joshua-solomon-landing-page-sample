import React from "react";
import Form from "./form";
import "./index.css";

const HEADER_TEXT = "Subscribe Now"
const TAGLINE_TEXT = "Help us solve fusion :) Or something smaller like a good hot sauce recipe.."

const FormSection = () => {

    return <div className="form-section p-4 d-flex flex-column justify-content-center align-items-start w-100">
        <h1>{HEADER_TEXT}</h1>
        <h2>{TAGLINE_TEXT}</h2>
        <Form />
    </div>
}

export default FormSection;