import React, { Component } from 'react';
import { AppRegistry, Text, Image, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  bigblue: {
    color: 'powderblue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});


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
      <Text style={this.props.style}>Hello {this.props.name}!</Text>
    );
  }
}

class BlinkingText extends Component {
  constructor(props){
    super(props);
    this.state = {showText: true};

    setInterval(() => {
      this.setState({ showText: !this.state.showText })
    }, 1000);
  }

  render() {
    let display = this.state.showText ? this.props.text : ' ';
    return (
      <Text style={this.props.style}> {display} </Text>
    );
  } 
}

class Bananas extends Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    return (
      <View style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'powderblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, alignItems:'center', backgroundColor: 'steelblue'}}>
          <Image source={pic} style={{width: 193, height: 110}}/>
          <Greeting name='Rexxar' style={styles.bigblue} />
          <Greeting name='Guillaume' />
          <BlinkingText text='Whoop whoop' style={styles.red}/>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('HelloWorld', () => Bananas);

// AppRegistry.registerComponent('HelloWorld', () => HelloWorld);