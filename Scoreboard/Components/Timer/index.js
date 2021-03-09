import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

// redux

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators as actions } from "./actions";

import Button from "../Button/index";

class Timer extends Component {
  state = {
    counter: 0
  };

  _increment = () => {
    alert("Increment Button Pressed");
  };

  _decrement = () => {
    alert("Decrement Button Pressed");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Counter : {this.props.counter} </Text>
        <Button onPressOut={this.props.addCounter}> Increment </Button>
        <Button onPressOut={this.props.subCounter}> Decrement </Button>
        <Button onPressOut={this.props.zeroCounter}> Zero </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center"
  }
});

function mapStateToProps(state) {
  const { counter } = state;
  return { counter };
}

function mapDispatchToProps(dispatch) {
  return {
    addCounter: bindActionCreators(actions.addCounter, dispatch),
    subCounter: bindActionCreators(actions.subCounter, dispatch),
    zeroCounter: bindActionCreators(actions.zeroCounter, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);