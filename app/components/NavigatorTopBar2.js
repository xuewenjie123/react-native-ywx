'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar, } from 'react-native';
import NaviMsgBar from './NaviMsgBar';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');


class NavigatorTopBar extends Component {
  render() {
    var _props = this.props;
    var MsgProps = {
      navigator:_props.navigator
    }
    return (_props.visible)?(
      <View style={styles.bar}>
        <View style={styles.leftbar}>
          {_props.leftView?_props.leftView:null}
        </View>
        <View style={styles.titlebar}>
          {_props.centerView?_props.centerView:null}
        </View>
        <View style={styles.rightbar}>
          {_props.rightView?_props.rightView:(
            <NaviMsgBar {...MsgProps}/>
          )}
        </View>
      </View>
    ):(
      <View style={styles.nobar}>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  nobar: {
    flex: 0,
  },
  bar: {
    width: width,
    height: 45+StatusBar.currentHeight,
    paddingTop: StatusBar.currentHeight,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
  },
  leftbar: {
    height: 45,
    flex: 1,
  },
  titlebar: {
    height: 45,
    flex: 2,
  },
  rightbar: {
    height: 45,
    flex: 1,
  },
});

module.exports = NavigatorTopBar
