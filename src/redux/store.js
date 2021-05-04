import { clone } from "lodash";

const initialState = {
    email: "",
    terms_and_conditions: false
}

export const getInitialState = () => clone(initialState);