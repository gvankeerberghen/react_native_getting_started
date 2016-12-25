import React, { Component } from 'react';
import { AppRegistry, Text, Image, View } from 'react-native';

class HelloWorld extends Component {
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}

class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{alignItems: 'center'}}>
        <Image source={pic} style={{width: 193, height: 110}}/>
        <Greeting name='Rexxar' />
        <Greeting name='Guillaume' />
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => Bananas);

// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);