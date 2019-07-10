import React from 'react';
import {  
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Image
} from 'react-native';
import { WebBrowser } from 'expo';
const Beach = require('../../assets/images/Beach.jpg');

let width = Dimensions.get('window').width;
export default class LinksScreen extends React.Component {

  render() {
    return (
      <View style={{ flex:1, backgroundColor: 'transparent' }}>
        <View>
          <Image style={{ height: width, width: width, position: 'absolute', top:0, left:0 }} source={Beach} />
        </View>
        <ScrollView style={{ flex:1 }}>
          <View>
            <Text>BeachTides</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 28,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    fontSize: 19,
    marginBottom: 5,
  },
});
