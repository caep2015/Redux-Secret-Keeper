//react imports
import React from 'react';
import ReactDOM from 'react-dom';

//router imports
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
//import styles
import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';

//component imports
import App from './components/App';
import NavLayout from './components/NavLayout';
import Register from './containers/Register';
import Login from './containers/Login';
import Successful from './components/Successful';
import NotAuthorized from './components/NotAuthorized';
import Logout from './components/Logout';
import Dashboard from './containers/Dashboard';
//create store for redux and apply middleware
const createStoreWithMiddleware = applyMiddleware( thunk )(createStore);

//wrap provider around router
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <BrowserRouter>
      <NavLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/success" component={Successful} />
          <Route path="/failed" component={NotAuthorized} />
          <Route path="/logout" component={Logout} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </NavLayout>
    </BrowserRouter>
  </Provider>

  , document.getElementById('root'));
