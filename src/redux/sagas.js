import "core-js";
import fetch from 'cross-fetch';
import { call, debounce, delay, put, select, takeEvery } from "redux-saga/effects";
import "regenerator-runtime/runtime";
import validator from "validator";
import { ActionTypes, setEmail, toggleDisplaySuccessIsVisible, toggleEmailError, toggleTermsAndConditions, toggleTermsAndConditionsError } from "./actions";
import { emailErrorSelector, emailIsValidSelector, requestBodySelector, signUpButtonIsDisabledSelector, termsAndConditionsErrorSelector, termsAndConditionsSelector } from "./selectors";

const DEBOUNCE_MS = 500;
const DISPLAY_SUCCESS_MS = 5000;

const watchers = {
    changeEmailWatcher,
    changeTermsAndConditionsWatcher,
    clickSignUpButtonWatcher,
}
export default watchers;

// change email

function* changeEmailWatcher() {
    yield takeEvery(ActionTypes.CHANGE_EMAIL, changeEmailWorker);
}

function* changeEmailWorker(action) {

    const valueIsValid = validator.isEmail(action.value);
    const emailError = yield select(emailErrorSelector);

    if (valueIsValid && emailError) {

        // The email error has been fixed.
        yield put(toggleEmailError(false));
    }

    yield put(setEmail(action.value));
}

// change terms and conditions

function* changeTermsAndConditionsWatcher() {
    yield takeEvery(ActionTypes.CHANGE_TERMS_AND_CONDITIONS, changeTermsAndConditionsWorker);
}

function* changeTermsAndConditionsWorker(action) {

    const termsAndConditionsError = yield select(termsAndConditionsErrorSelector);

    if (action.value && termsAndConditionsError) {

        // The terms and conditions error has been fixed.
        yield put(toggleTermsAndConditionsError(false));
    }

    yield put(toggleTermsAndConditions(action.value));
}

// click sign up button

function* clickSignUpButtonWatcher() {
    yield debounce(DEBOUNCE_MS, ActionTypes.CLICK_SIGN_UP_BUTTON, clickSignUpButtonWorker);
}

function* clickSignUpButtonWorker() {

    const buttonIsDisabled = yield select(signUpButtonIsDisabledSelector);
    if (buttonIsDisabled) {

        // Toggle errors to display the error messages
        const emailIsValid = yield select(emailIsValidSelector);
        const termsAndConditions = yield select(termsAndConditionsSelector);
        yield call(toggleErrors, !emailIsValid, !termsAndConditions);

    } else {

        yield call(postForm);
    }
}

function* postForm() {

    const body = yield select(requestBodySelector);
    const response = yield call(fetch, "https://defero.dev/api/test/josh", { method: "post", headers: { "Content-Type": "application/json" }, body });

    if (response?.status === 200) {

        const errors = null; //TODO: Get errors from response.

        if (errors) {

            const emailError = false; //TODO Get email error from errors.
            const termsAndConditionsError = false; //TODO Get terms and conditions error from errors.
            yield call(toggleErrors, emailError, termsAndConditionsError);

        } else {

            yield call(displaySuccess);
        }

    } else {

        //TODO Display error message.
        console.warn(response);
    }
}

function* displaySuccess() {
    yield put(toggleDisplaySuccessIsVisible(true));
    yield delay(DISPLAY_SUCCESS_MS);
    yield put(toggleDisplaySuccessIsVisible(false));
}

function* toggleErrors(emailError, termsAndConditionsError) {
    yield put(toggleEmailError(emailError));
    yield put(toggleTermsAndConditionsError(termsAndConditionsError));
}