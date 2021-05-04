import { clone } from "lodash";

const initialState = {
    email: "",
    successMessageIsVisible: false,
    termsAndConditions: false
}

export const getInitialState = () => clone(initialState);