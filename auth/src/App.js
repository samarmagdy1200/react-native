import React, { Component } from 'react'
import { View } from 'react-native'
import firebase from '@firebase/app'
import '@firebase/auth'

import { Header, Button, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

class App extends Component {
  state = {
    loggedIn: undefined
  }

  componentWillMount() {
    // Replace config with your own firebse credentials
    const config = {
      apiKey: 'AIzaSyDKujh7LX_yv1A4hBC6usaMd2m3SHtpW64',
      authDomain: 'auth-50b78.firebaseapp.com',
      databaseURL: 'https://auth-50b78.firebaseio.com',
      projectId: 'auth-50b78',
      storageBucket: 'auth-50b78.appspot.com',
      messagingSenderId: '1034536955378'
    }

    firebase.initializeApp(config)

    firebase.auth().onAuthStateChanged(user => {
      if (user) this.setState({ loggedIn: true })
      else this.setState({ loggedIn: false })
    })
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={{ height: 50 }}>
            <Button onPress={() => firebase.auth().signOut()}>Logout</Button>
          </View>
        )
      case false:
        return <LoginForm />
      default:
        return <Spinner size="large" />
    }
  }

  render() {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Header title="Authentication" />

        {this.renderContent()}
      </View>
    )
  }
}

export default App
