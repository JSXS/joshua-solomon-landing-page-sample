import { createSelector } from "reselect";

export const stateSelector = (state) => state;

const emailCombiner = (state) => state.email;
export const emailSelector = createSelector(stateSelector, emailCombiner);

const successMessageIsVisibleCombiner = (state) => state.successMessageIsVisible;
export const successMessageIsVisibleSelector = createSelector(stateSelector, successMessageIsVisibleCombiner);

const termsAndConditionsCombiner = (state) => state.termsAndConditions;
export const termsAndConditionsSelector = createSelector(stateSelector, termsAndConditionsCombiner);

const requestBodyCombiner = (email, terms_and_conditions) => JSON.stringify({ email, terms_and_conditions });
export const requestBodySelector = createSelector(emailSelector, termsAndConditionsSelector, requestBodyCombiner);