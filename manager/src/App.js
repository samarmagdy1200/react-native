import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import firebase from '@firebase/app';

import reducers from './reducers';
import Routing from './components/Routing';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCAuZf0vV2Iw61KzyYFK2euHDw_gf6QyWE",
      authDomain: "manager-b6dae.firebaseapp.com",
      databaseURL: "https://manager-b6dae.firebaseio.com",
      projectId: "manager-b6dae",
      storageBucket: "manager-b6dae.appspot.com",
      messagingSenderId: "840510985699"
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}

export default App;
