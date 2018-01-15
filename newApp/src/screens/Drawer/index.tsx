// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';

import CounterView from '../components/Counter';

export default class Drawer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Drawer
        </Text>

        <CounterView
          // count={Counter.count}
          // onPlus={() => Counter.onPlus()}
          // onMinus={() => Counter.onMinus()}
        />

        <Button
          title={`Push new screen in Tab 1`}
          onPress={() => {
         
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
