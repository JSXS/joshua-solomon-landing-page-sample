import "core-js";
import fetch from 'cross-fetch';
import { call, debounce, delay, put, select, takeEvery } from "redux-saga/effects";
import "regenerator-runtime/runtime";
import validator from "validator";
import { ActionTypes, setEmail, setResponse, toggleEmailError, toggleIsPending, toggleTermsAndConditions, toggleTermsAndConditionsError } from "./actions";
import { emailErrorSelector, emailIsValidSelector, requestBodySelector, signUpButtonIsDisabledSelector, termsAndConditionsErrorSelector, termsAndConditionsSelector } from "./selectors";

const DEBOUNCE_MS = 500;
const DISPLAY_RESPONSE_MESSAGE_MS = 5000;

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

    yield put(toggleIsPending(true));

    const body = yield select(requestBodySelector);
    const response = yield call(fetch, "https://defero.dev/api/test/josh", { method: "post", headers: { "Content-Type": "application/json" }, body });

    yield put(toggleIsPending(false));

    if (response?.status === 200) {

        const errors = null; //TODO: Get errors from response.

        if (errors) {

            const emailError = true; //TODO Get email error from errors.
            const termsAndConditionsError = true; //TODO Get terms and conditions error from errors.
            yield call(toggleErrors, emailError, termsAndConditionsError);
            yield call(displayResponse, "Please complete the form.", "warning");

        } else {

            yield call(displayResponse, "Thank You.", "success");
        }

    } else {

        yield call(displayResponse, "There was an error submitting the form.", "danger");
    }
}

function* displayResponse(message, status) {
    yield put(setResponse(message, status));
    yield delay(DISPLAY_RESPONSE_MESSAGE_MS);
    yield put(setResponse(null, null));
}

function* toggleErrors(emailError, termsAndConditionsError) {
    yield put(toggleEmailError(emailError));
    yield put(toggleTermsAndConditionsError(termsAndConditionsError));
}