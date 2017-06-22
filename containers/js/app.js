import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Container from '../component/Container';
import reduce from '../../reducers/reduce';
import configureStore from './store'
import {createStore} from 'redux';


let initialState = { 
}

let store = configureStore(initialState)

//let store = createStore(reduce)

// ReactDOM.render(
// 	<Provider store={store}>
// 		<Container />
// 	</Provider>,
// 	document.getElementById('app')
// );

ReactDOM.render(
	<Provider store={store}>
		<Container />
	</Provider>,
	 document.getElementById('app')
);
