export const ActionTypes = {
    "TOGGLE_TERMS_AND_CONDITIONS": "TOGGLE_TERMS_AND_CONDITIONS",
    "SET_EMAIL": "SET_EMAIL"
}

export const setEmail = (value) => ({ type: ActionTypes.SET_EMAIL, value });

export const toggleTermsAndConditions = (checked) => ({ type: ActionTypes.TOGGLE_TERMS_AND_CONDITIONS, checked });