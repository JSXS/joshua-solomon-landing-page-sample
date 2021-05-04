export const ActionTypes = {
    "CLICK_SIGN_UP_BUTTON": "CLICK_SIGN_UP_BUTTON",
    "SET_EMAIL": "SET_EMAIL",
    "TOGGLE_DISPLAY_SUCCESS_IS_VISIBLE": "TOGGLE_DISPLAY_SUCCESS_IS_VISIBLE",
    "TOGGLE_TERMS_AND_CONDITIONS": "TOGGLE_TERMS_AND_CONDITIONS"
}

export const clickSignUpButton = () => ({ type: ActionTypes.CLICK_SIGN_UP_BUTTON });

export const setEmail = (value) => ({ type: ActionTypes.SET_EMAIL, value });

export const toggleDisplaySuccessIsVisible = (isVisible) => ({ type: ActionTypes.TOGGLE_DISPLAY_SUCCESS_IS_VISIBLE, isVisible });

export const toggleTermsAndConditions = (checked) => ({ type: ActionTypes.TOGGLE_TERMS_AND_CONDITIONS, checked });