'use strict';
import axios from 'axios';
import debounce from 'lodash/debounce';


import actions from '../actionTypes';

export const acceptUserInput = (value) => ({
	type: actions.ACCEPT_USER_INPUT,
	payload: value
});

export const showOccurenceResult = (value) => ({
	type: actions.SHOW_OCCURANCE_RESULT,
	payload: value
});

export const showError = (error) => ({
	type: actions.SHOW_ERROR,
	payload: error
});

export const showLoader = () => ({
	type: actions.SHOW_LOADER
});

export const checkDomain = () => async(dispatch, getState) => {
	dispatch(showLoader());
console.log(1)
	const {domain} = getState();

	try {
		const ajaxResult = await axios.get(`api/?domain=${domain}`);

		const {result, error} = ajaxResult.data;

		if (error) {
			return dispatch(showError(error))
		}
		return dispatch(showOccurenceResult(result));

	} catch (error) {
		dispatch(showError(error));
	}
};
