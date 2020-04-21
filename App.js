import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Index from './src/components/Index';

export default class App extends Component {

  render(){
    return (
      <Index />
    );
  }

} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text:{
    minHeight:100,
    backgroundColor: 'pink',
    padding: 5,
    marginTop: 5,
    color: 'white'
  }
});
