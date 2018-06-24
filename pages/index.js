import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import reducer from '../src/client/reducers'

const store = createStore(reducer, applyMiddleware(ReduxThunk));

import SearchContainer from '../src/client/containers/SearchContainer';

export default () => (
	<Provider store={store}>
		<SearchContainer />
	</Provider>
);
