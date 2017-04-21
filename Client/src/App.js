import React, { Component } from 'react';
import { View, Text, NavigatorIOS } from 'react-native';
import Login from './components/Login';

class App extends Component {
  constructor() {
    super();

    this.state = { loggedIn: false };
  }

  logIn() {
    this.setState({ loggedIn: true });
  }

  render() {
    return (
      <NavigatorIOS
        initailRoute={{
          title: 'Login',
          component: Login,
          //passProps: { logIn: this.logIn.bind(this) }
        }}
        style={{flex:1}}
      />
    );
    // return (
    //   <Login />
    // );
  }
}

export default App;
