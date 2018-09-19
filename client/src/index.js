import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';
import rootSaga from './sagas';
import {Provider} from 'react-redux';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, compose(applyMiddleware(sagaMiddleware), reduxDevTools));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
            <Routes />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
