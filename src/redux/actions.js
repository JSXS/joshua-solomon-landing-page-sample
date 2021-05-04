export const ActionTypes = {
    "CLICK_SIGN_UP_BUTTON": "CLICK_SIGN_UP_BUTTON",
    "DISPLAY_SUCCESS": "DISPLAY_SUCCESS",
    "SET_EMAIL": "SET_EMAIL",
    "TOGGLE_TERMS_AND_CONDITIONS": "TOGGLE_TERMS_AND_CONDITIONS"
}

export const clickSignUpButton = () => ({ type: ActionTypes.CLICK_SIGN_UP_BUTTON });

export const displaySuccess = () => ({ type: ActionTypes.DISPLAY_SUCCESS });

export const setEmail = (value) => ({ type: ActionTypes.SET_EMAIL, value });

export const toggleTermsAndConditions = (checked) => ({ type: ActionTypes.TOGGLE_TERMS_AND_CONDITIONS, checked });