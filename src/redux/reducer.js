import { clone } from "lodash";
import { ActionTypes } from "./actions";

const reducer = (state, action) => {

    switch (action.type) {

        case ActionTypes.SET_EMAIL:
            return setEmail(state, action);
        case ActionTypes.TOGGLE_TERMS_AND_CONDITIONS:
            return toggleTermsAndConditions(state);
        default:
            return state;
    }
};
export default reducer;

const setEmail = (state, action) => {

    const newState = clone(state);
    newState.email = action?.value;
    return newState;
}

const toggleTermsAndConditions = (state) => {

    const newState = clone(state);
    newState.terms_and_conditions = !newState.terms_and_conditions;
    return newState;
}