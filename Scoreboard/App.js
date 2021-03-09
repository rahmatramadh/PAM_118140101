import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createStore } from "redux";
import { Provider } from "react-redux";

import reducers from "./Components/Timer/reducers";

import Timer from "./Components/Timer";

const store = createStore(reducers);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Timer />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
