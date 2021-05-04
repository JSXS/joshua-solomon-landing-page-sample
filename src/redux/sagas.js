import "core-js";
import { debounce } from "redux-saga/effects";
import "regenerator-runtime/runtime";
import { ActionTypes } from "./actions";

const DEBOUNCE_MS = 500;

const watchers = {
    clickSignUpButtonWatcher
}
export default watchers;

function* clickSignUpButtonWatcher() {
    yield debounce(DEBOUNCE_MS, ActionTypes.CLICK_SIGN_UP_BUTTON, clickSignUpButtonWorker);
}

function* clickSignUpButtonWorker(initializeRootAction) {

    console.log("CLICK WORKER");

}