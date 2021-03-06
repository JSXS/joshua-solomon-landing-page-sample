import { clone } from "lodash";
import { ActionTypes } from "./actions";

const reducer = (state, action) => {

    switch (action.type) {

        case ActionTypes.SET_EMAIL:
            return setEmail(state, action);
        case ActionTypes.SET_RESPONSE:
            return setResponse(state, action);
        case ActionTypes.TOGGLE_EMAIL_ERROR:
            return toggleEmailError(state, action);
        case ActionTypes.TOGGLE_IS_PENDING:
            return toggleIsPending(state, action);
        case ActionTypes.TOGGLE_TERMS_AND_CONDITIONS:
            return toggleTermsAndConditions(state);
        case ActionTypes.TOGGLE_TERMS_AND_CONDITIONS_ERROR:
            return toggleTermsAndConditionsError(state, action);
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

const setResponse = (state, action) => {

    const newState = clone(state);
    newState.responseMessage = action.message;
    newState.responseStatus = action.status;
    return newState;
}

const toggleEmailError = (state, action) => {

    const newState = clone(state);
    newState.emailError = Boolean(action.error ?? false);
    return newState;
}

const toggleIsPending = (state, action) => {

    const newState = clone(state);
    newState.isPending = action.isPending ?? !newState.isPending;
    return newState;
}

const toggleTermsAndConditions = (state) => {

    const newState = clone(state);
    newState.termsAndConditions = !newState.termsAndConditions;
    return newState;
}

const toggleTermsAndConditionsError = (state, action) => {

    const newState = clone(state);
    newState.termsAndConditionsError = Boolean(action.error ?? false);
    return newState;
}