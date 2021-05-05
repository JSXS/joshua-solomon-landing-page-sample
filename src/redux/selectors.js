import { createSelector } from "reselect";
import validator from "validator";

export const stateSelector = (state) => state;

const emailCombiner = (state) => state.email;
export const emailSelector = createSelector(stateSelector, emailCombiner);

const emailErrorCombiner = (state) => state.emailError;
export const emailErrorSelector = createSelector(stateSelector, emailErrorCombiner);

const successMessageIsVisibleCombiner = (state) => state.successMessageIsVisible;
export const successMessageIsVisibleSelector = createSelector(stateSelector, successMessageIsVisibleCombiner);

const termsAndConditionsCombiner = (state) => state.termsAndConditions;
export const termsAndConditionsSelector = createSelector(stateSelector, termsAndConditionsCombiner);

const termsAndConditionsErrorCombiner = (state) => state.termsAndConditionsError;
export const termsAndConditionsErrorSelector = createSelector(stateSelector, termsAndConditionsErrorCombiner);

const requestBodyCombiner = (email, terms_and_conditions) => JSON.stringify({ email, terms_and_conditions });
export const requestBodySelector = createSelector(emailSelector, termsAndConditionsSelector, requestBodyCombiner);

export const emailIsValidSelector = createSelector(emailSelector, validator.isEmail);

const signUpButtonIsDisabledCombiner = (emailIsValid, termsAndConditions) => !(emailIsValid && termsAndConditions);
export const signUpButtonIsDisabledSelector = createSelector(emailIsValidSelector, termsAndConditionsSelector, signUpButtonIsDisabledCombiner);