import React, { Component } from "react";
import { View } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";

import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";
import reducers from "./reducers";

const store = createStore(reducers);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <Header title="Tech Stack" />

                    <LibraryList />
                </View>
            </Provider>
        );
    }
}

export default App;