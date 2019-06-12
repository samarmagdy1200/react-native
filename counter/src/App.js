import React, { Component } from "react";
import { View } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Reducers from "./reducers";
import Counter from "./components/Counter";

const store = createStore(Reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Counter />
        </View>
      </Provider>
    );
  }
}

export default App;
