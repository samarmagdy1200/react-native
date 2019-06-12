import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableHighlight } from "react-native";
import { connect } from "react-redux";

import { increment, decrement } from "../actions";

class Counter extends Component {
  render() {
    const { container, operatorStyle, counterStyle } = styles;

    return (
      <View style={container}>
        <TouchableHighlight onPress={() => this.props.increment(1)}>
          <Text style={operatorStyle}>+</Text>
        </TouchableHighlight>

        <Text style={counterStyle}>{this.props.counter}</Text>

        <TouchableHighlight onPress={() => this.props.decrement(1)}>
          <Text style={operatorStyle}>-</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  operatorStyle: {
    fontSize: 100
  },
  counterStyle: {
    fontSize: 100
  }
});

// globalState is state ** just renaming
const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

export default connect(
  mapStateToProps,
  { increment: increment, decrement: decrement }
)(Counter);
