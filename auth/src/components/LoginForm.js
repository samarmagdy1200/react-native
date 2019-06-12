import React, { Component } from 'react'
import { Text, StyleSheet } from 'react-native'
import firebase from '@firebase/app'
import '@firebase/auth'

import { Card, CardSection, Button, Input, Spinner } from './common'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false
  }

  onLoginPress() {
    const { email, password } = this.state

    // reset error and loading
    this.setState({ error: '', loading: true })

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      error: '',
      loading: false
    })
  }

  onLoginFail() {
    this.setState({
      error: 'Authentication Failed.',
      loading: false
    })
  }

  renderButton() {
    if (this.state.loading) return <Spinner size="large" />

    return <Button onPress={this.onLoginPress.bind(this)}>Login</Button>
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            value={this.state.email}
            onChangeText={x => this.setState({ email: x })}
            label="Email"
            placeholder="test@gmail.com"
            autoCorrect={false}
          />
        </CardSection>

        <CardSection>
          <Input
            value={this.state.password}
            onChangeText={x => this.setState({ password: x })}
            label="Password"
            placeholder="password"
            autoCorrect={false}
            secureTextEntry
          />
        </CardSection>

        <Text style={styles.errorStyle}>{this.state.error}</Text>

        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  errorStyle: {
    fontSize: 20,
    color: 'red',
    alignSelf: 'center'
  }
})

export default LoginForm
