import "core-js";
import fetch from 'cross-fetch';
import { call, debounce, put, select } from "redux-saga/effects";
import "regenerator-runtime/runtime";
import { ActionTypes, displaySuccess } from "./actions";
import { stateSelector } from "./selectors";

const DEBOUNCE_MS = 500;

const watchers = {
    clickSignUpButtonWatcher
}
export default watchers;

function* clickSignUpButtonWatcher() {
    yield debounce(DEBOUNCE_MS, ActionTypes.CLICK_SIGN_UP_BUTTON, clickSignUpButtonWorker);
}

function* clickSignUpButtonWorker() {

    const state = yield select(stateSelector);
    const body = JSON.stringify(state);

    const response = yield call(fetch, "https://defero.dev/api/test/josh", { method: "post", headers: { "Content-Type": "application/json" }, body });

    if (response?.status === 200) {

        yield put(displaySuccess());

    } else {

        console.warn(response);
    }
}