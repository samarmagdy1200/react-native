import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = props => <View style={styles.container}>{props.children}</View>

const styles = StyleSheet.create({
  container: {
    margin: 5,
    borderColor: '#000',
    borderWidth: 1,
    borderBottomWidth: 0,
    borderRadius: 3,
    marginTop: 15
  }
})

export { Card }
