import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = props => {
  const { color, title } = props;
  const { dasani, dasaniText } = styles;

  return (
    <View style={[dasani, { backgroundColor: color || "#09C" }]}>
      <Text style={dasaniText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dasani: {
    height: 60,
    // backgroundColor: '#09C',
    justifyContent: 'center',
    alignItems: 'center'
  },
  dasaniText: {
    fontSize: 20
  }
});

export { Header };
