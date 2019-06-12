import React from 'react'
import { View, StyleSheet } from 'react-native'

const CardSection = props => (
  <View style={styles.container}>{props.children}</View>
)

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderColor: '#000',
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: "center"
  }
});

export { CardSection }
