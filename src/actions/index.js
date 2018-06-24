'use strict';
import axios from 'axios';

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

export const checkDomain= () => async(dispatch, getState) => {
	dispatch(showLoader());

	const {domain} = getState();

	try {
		const {data} = await axios.get(`https://htmlweb.ru/analiz/api.php?whois&url=${domain}&json`);
		if (data.error) {
			return dispatch(showError(data.error))
		}
		if (!data.creation) {
			return dispatch(showOccurenceResult('not-ok'));
		}
		return dispatch(showOccurenceResult('ok'));

	} catch (error) {
		dispatch(showError(error));
	}
};
