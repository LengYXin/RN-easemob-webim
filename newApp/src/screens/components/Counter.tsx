// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

export default class Counter extends Component<any> {
  render() {
    // const { count, onPlus, onMinus } = this.props;

    return (
      <View style={styles.container}>
        <Button
          // style={styles.button}
          title={`-`}
          onPress={()=>{}}
        />

      <Text style={styles.text}>
          {/* { count } */}
        </Text>

        <Button
          // style={styles.button}
          title={`+`}
          onPress={()=>{}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 10,
  },
  text: {
    margin: 10,
  },
  button: {
    height: 10,
    width: 10,
  }
});
