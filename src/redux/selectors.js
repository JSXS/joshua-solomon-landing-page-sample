import { createSelector } from "reselect";

export const stateSelector = (state) => state;

const emailCombiner = (state) => state.email;
export const emailValueSelector = createSelector(stateSelector, emailCombiner);

const termsAndConditionsCombiner = (state) => state.terms_and_conditions;
export const termsAndConditionsSelector = createSelector(stateSelector, termsAndConditionsCombiner);