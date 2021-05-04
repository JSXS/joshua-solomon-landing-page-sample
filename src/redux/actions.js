export const ActionTypes = {
    "CLICK_SIGN_UP_BUTTON": "CLICK_SIGN_UP_BUTTON",
    "SET_EMAIL": "SET_EMAIL",
    "TOGGLE_TERMS_AND_CONDITIONS": "TOGGLE_TERMS_AND_CONDITIONS"
}

export const clickSignUpButton = (value) => ({ type: ActionTypes.CLICK_SIGN_UP_BUTTON });

export const setEmail = (value) => ({ type: ActionTypes.SET_EMAIL, value });

export const toggleTermsAndConditions = (checked) => ({ type: ActionTypes.TOGGLE_TERMS_AND_CONDITIONS, checked });