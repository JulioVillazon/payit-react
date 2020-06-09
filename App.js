//This is an example code to understand WebView//

import React, {Component} from 'react';
//import react in our code.

import {WebView} from 'react-native-webview';
//import all the components we are going to use.

export default class App extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'http://54da3e5a1750.ngrok.io/LogIn/Log'}}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{marginTop: 20}}
      />
    );
  }
}
