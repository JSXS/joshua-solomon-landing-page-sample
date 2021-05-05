import { createSelector } from "reselect";
import validator from "validator";

export const stateSelector = (state) => state;

const emailCombiner = (state) => state.email;
export const emailSelector = createSelector(stateSelector, emailCombiner);

const emailErrorCombiner = (state) => state.emailError;
export const emailErrorSelector = createSelector(stateSelector, emailErrorCombiner);

const isPendingCombiner = (state) => state.isPending;
export const isPendingSelector = createSelector(stateSelector, isPendingCombiner);

const responseMessageCombiner = (state) => state.responseMessage;
export const responseMessageSelector = createSelector(stateSelector, responseMessageCombiner);

const responseStatusCombiner = (state) => state.responseStatus;
export const responseStatusSelector = createSelector(stateSelector, responseStatusCombiner);

const termsAndConditionsCombiner = (state) => state.termsAndConditions;
export const termsAndConditionsSelector = createSelector(stateSelector, termsAndConditionsCombiner);

const termsAndConditionsErrorCombiner = (state) => state.termsAndConditionsError;
export const termsAndConditionsErrorSelector = createSelector(stateSelector, termsAndConditionsErrorCombiner);

const requestBodyCombiner = (email, terms_and_conditions) => JSON.stringify({ email, terms_and_conditions });
export const requestBodySelector = createSelector(emailSelector, termsAndConditionsSelector, requestBodyCombiner);

export const emailIsValidSelector = createSelector(emailSelector, validator.isEmail);

const signUpButtonIsDisabledCombiner = (emailIsValid, termsAndConditions) => !(emailIsValid && termsAndConditions);
export const signUpButtonIsDisabledSelector = createSelector(emailIsValidSelector, termsAndConditionsSelector, signUpButtonIsDisabledCombiner);