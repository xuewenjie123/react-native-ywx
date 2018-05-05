'use strict';
import React, { Component, } from 'react';
import { StyleSheet, View, Image,Text } from 'react-native';


class NavWait extends Component {
  render() {
    return (
      <View style={styles.bar}>
        <Image style={{width: 16, height: 16,margin:20}} source={require('../../images/clear.gif')} />
        <Text style={styles.title}>
          {"  加载中..."}
        </Text>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  bar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
    marginBottom:20,
  },
  title: {
    fontSize: 13,
    color: "#999",
  },
});

export default NavWait
