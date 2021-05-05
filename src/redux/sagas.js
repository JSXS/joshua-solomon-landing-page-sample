import "core-js";
import { call, debounce, delay, put, select, takeEvery } from "redux-saga/effects";
import "regenerator-runtime/runtime";
import validator from "validator";
import { ActionTypes, setEmail, setResponse, toggleEmailError, toggleIsPending, toggleTermsAndConditions, toggleTermsAndConditionsError } from "./actions";
import { emailErrorSelector, emailIsValidSelector, emailSelector, requestBodySelector, signUpButtonIsDisabledSelector, termsAndConditionsErrorSelector, termsAndConditionsSelector } from "./selectors";

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

const ERROR_MESSAGES = {
    "EMAIL_INVALID": "You must supply a valid email address.",
    "EMAIL_NOT_SUPPLIED": "You must supply an email.",
    "TERMS_AND_CONDITIONS": "You must agree to the terms and conditions."
}

function* clickSignUpButtonWatcher() {
    yield debounce(DEBOUNCE_MS, ActionTypes.CLICK_SIGN_UP_BUTTON, clickSignUpButtonWorker);
}

function* clickSignUpButtonWorker() {

    const buttonIsDisabled = yield select(signUpButtonIsDisabledSelector);
    if (buttonIsDisabled) {

        const email = yield select(emailSelector);
        const emailIsValid = yield select(emailIsValidSelector);
        const emailError = email ? emailIsValid ? null : ERROR_MESSAGES.EMAIL_INVALID : ERROR_MESSAGES.EMAIL_NOT_SUPPLIED;

        const termsAndConditions = yield select(termsAndConditionsSelector);
        const termsAndConditionsError = termsAndConditions ? null : ERROR_MESSAGES.TERMS_AND_CONDITIONS;

        yield call(displayFormErrorMessage, emailError, termsAndConditionsError);

    } else {

        yield call(postForm);
    }
}

function* postForm() {

    yield put(toggleIsPending(true));

    const body = yield select(requestBodySelector);

    const response = yield call(fetch, "https://defero.dev/api/test/josh", { method: "post", headers: { "Content-Type": "application/json" }, body });

    const data = yield call(response.json.bind(response));

    if (response.status === 200) {

        yield call(displayResponse, "Thank You.", "success");

    } else {

        if (data.errors) {

            yield call(displayFormErrorMessage, data.errors.email, data.errors.terms_and_conditions);

        } else {

            yield call(displayResponse, "There was an error submitting the form.", "danger");
        }
    }

    yield put(toggleIsPending(false));
}

function* displayFormErrorMessage(emailError, termsAndConditionsError) {
    yield call(toggleErrors, emailError, termsAndConditionsError);
    yield call(displayResponse, `${emailError ?? ""} ${termsAndConditionsError ?? ""}`, "warning");
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