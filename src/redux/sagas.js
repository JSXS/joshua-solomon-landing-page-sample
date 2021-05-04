import "core-js";
import fetch from 'cross-fetch';
import { call, debounce, delay, put, select } from "redux-saga/effects";
import "regenerator-runtime/runtime";
import { ActionTypes, toggleDisplaySuccessIsVisible } from "./actions";
import { requestBodySelector } from "./selectors";

const DEBOUNCE_MS = 500;
const DISPLAY_SUCCESS_MS = 5000;

const watchers = {
    clickSignUpButtonWatcher
}
export default watchers;

function* clickSignUpButtonWatcher() {
    yield debounce(DEBOUNCE_MS, ActionTypes.CLICK_SIGN_UP_BUTTON, clickSignUpButtonWorker);
}

function* clickSignUpButtonWorker() {

    const body = yield select(requestBodySelector);
    const response = yield call(fetch, "https://defero.dev/api/test/josh", { method: "post", headers: { "Content-Type": "application/json" }, body });

    if (response?.status === 200) {

        yield call(displaySuccess);

    } else {

        console.warn(response);
    }
}

function* displaySuccess() {
    yield put(toggleDisplaySuccessIsVisible(true));
    yield delay(DISPLAY_SUCCESS_MS);
    yield put(toggleDisplaySuccessIsVisible(false));
}