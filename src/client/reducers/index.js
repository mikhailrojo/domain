"use strict";

import actions from '../actionTypes';

export default (state = {}, action) => {
	switch(action.type) {
		case actions.ACCEPT_USER_INPUT: {
			return {
				...state,
				domain: action.payload
			}
		}
		case actions.SHOW_LOADER: {
			return {
				...state,
				isLoading: true,
				result: null,
				error: null
			};
		}
		case actions.SHOW_OCCURANCE_RESULT: {
			return {
				...state,
				isLoading: false,
				result: action.payload,
				error: null
			};
		}
		case actions.SHOW_ERROR: {
			return {
				...state,
				isLoading: false,
				error: action.payload,
				result: null
			};
		}
		default: {
			return state;
		}
	}

};