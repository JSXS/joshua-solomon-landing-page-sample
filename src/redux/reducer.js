import { clone } from "lodash";
import { ActionTypes } from "./actions";

const reducer = (state, action) => {

    switch (action.type) {

        case ActionTypes.SET_EMAIL:
            return setEmail(state, action);
        case ActionTypes.TOGGLE_DISPLAY_SUCCESS_IS_VISIBLE:
            return toggleDisplaySuccessIsVisible(state, action);
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

const toggleDisplaySuccessIsVisible = (state, action) => {

    const newState = clone(state);
    newState.successMessageIsVisible = action.isVisible ?? !newState.successMessageIsVisible;
    return newState;
}

const toggleEmailError = (state, action) => {

    const newState = clone(state);
    newState.emailError = action.error ?? !newState.emailError;
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
    newState.termsAndConditionsError = action.error ?? !newState.termsAndConditionsError;
    return newState;
}