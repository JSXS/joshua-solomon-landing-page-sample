import { clone } from "lodash";

const initialState = {
    email: "",
    emailError: false,
    successMessageIsVisible: false,
    termsAndConditions: false,
    termsAndConditionsError: false,
}

export const getInitialState = () => clone(initialState);