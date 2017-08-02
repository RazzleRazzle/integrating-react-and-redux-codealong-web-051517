import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import changeCount from './reducers/changeCount'
import createstore from './createStore'

const store = createstore(changeCount);

export function render() {
  ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
  );
};

store.dispatch({ type: '@@INIT' });
