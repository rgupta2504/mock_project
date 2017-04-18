import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './store/configureStore';
import TraderDesktopComponent from './components/trader_desktop/TraderDesktopComponent';
import App from './components/App';
import LoginComponent from './components/login/Login.component';

const store = configureStore();

render(
   <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={LoginComponent}/>
                <Route path="/trader" component={TraderDesktopComponent}></Route>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);