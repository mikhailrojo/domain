import {Provider} from 'react-redux';
import ReduxThunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux';
import reducer from '../src/reducers'
import Layout from '../src/components/Layout';

const store = createStore(reducer, applyMiddleware(ReduxThunk));

import SearchContainer from '../src/containers/SearchContainer';

export default () => (
	<Provider store={store}>
		<SearchContainer />
	</Provider>
);
