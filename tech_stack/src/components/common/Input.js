import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Input = props => {
  const {
    label,
    value,
    onChangeText,
    autoCorrect,
    placeholder,
    secureTextEntry
  } = props
  const { containerStyle, labelStyle, textInputStyle } = styles

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
      <TextInput
        style={textInputStyle}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={autoCorrect}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    marginLeft: 20,
    fontSize: 18,
    color: '#000',
    flex: 1
  },
  textInputStyle: {
    fontSize: 18,
    lineHeight: 23,
    flex: 2,
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5
  }
})

export { Input }
