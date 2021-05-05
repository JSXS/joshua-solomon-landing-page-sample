export const ActionTypes = {
    "CHANGE_EMAIL": "CHANGE_EMAIL",
    "CHANGE_TERMS_AND_CONDITIONS": "CHANGE_TERMS_AND_CONDITIONS",
    "CLICK_SIGN_UP_BUTTON": "CLICK_SIGN_UP_BUTTON",
    "SET_EMAIL": "SET_EMAIL",
    "TOGGLE_DISPLAY_SUCCESS_IS_VISIBLE": "TOGGLE_DISPLAY_SUCCESS_IS_VISIBLE",
    "TOGGLE_EMAIL_ERROR": "TOGGLE_EMAIL_ERROR",
    "TOGGLE_IS_PENDING": "TOGGLE_IS_PENDING",
    "TOGGLE_TERMS_AND_CONDITIONS": "TOGGLE_TERMS_AND_CONDITIONS",
    "TOGGLE_TERMS_AND_CONDITIONS_ERROR": "TOGGLE_TERMS_AND_CONDITIONS_ERROR",
}

export const changeEmail = (value) => ({ type: ActionTypes.CHANGE_EMAIL, value });

export const changeTermsAndConditions = (value) => ({ type: ActionTypes.CHANGE_TERMS_AND_CONDITIONS, value });

export const clickSignUpButton = () => ({ type: ActionTypes.CLICK_SIGN_UP_BUTTON });

export const setEmail = (value) => ({ type: ActionTypes.SET_EMAIL, value });

export const setHasClickedSignUpButton = () => ({ type: ActionTypes.SET_HAS_CLICKKED_SIGN_UP_BUTTON });

export const toggleEmailError = (error) => ({ type: ActionTypes.TOGGLE_EMAIL_ERROR, error });

export const toggleIsPending = (isPending) => ({ type: ActionTypes.TOGGLE_IS_PENDING, isPending });

export const toggleDisplaySuccessIsVisible = (isVisible) => ({ type: ActionTypes.TOGGLE_DISPLAY_SUCCESS_IS_VISIBLE, isVisible });

export const toggleTermsAndConditions = (checked) => ({ type: ActionTypes.TOGGLE_TERMS_AND_CONDITIONS, checked });

export const toggleTermsAndConditionsError = (error) => ({ type: ActionTypes.TOGGLE_TERMS_AND_CONDITIONS_ERROR, error });