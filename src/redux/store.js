import { clone } from "lodash";

const initialState = {
    email: "",
    emailError: false,
    isPending: false,
    responseMessage: null,
    responseStatus: null,
    termsAndConditions: false,
    termsAndConditionsError: false
}

export const getInitialState = () => clone(initialState);