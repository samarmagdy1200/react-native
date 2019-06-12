import React from 'react'
import { Text, TouchableOpacity, StyleSheet, Alert } from 'react-native'

const Button = props => {
  const { buttonStyle, textStyle } = styles

  return (
    <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
      <Text style={textStyle}>Click me!</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    borderColor: '#09C',
    borderWidth: 1,
    borderRadius: 2,
    margin: 5
  },
  textStyle: {
    fontSize: 18,
    color: '#09C',
    paddingTop: 5,
    paddingBottom: 5,
    alignSelf: 'center'
  }
})

export default Button
