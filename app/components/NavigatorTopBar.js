'use strict';
import React, { Component, } from 'react';
import { StatusBar,StyleSheet, Text, View, Image, TextInput, TouchableOpacity,  } from 'react-native';
import { width, height } from '../components/common/Dimensions'
import color from './../constant/color';

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
             {_props.centerView?_props.centerView:
              <Text style={styles.title}>
                  {_props.title?_props.title:null}
                </Text>
              }
            </View>
            <View style={styles.rightbar}>
              {_props.rightView?_props.rightView:(
               null
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
    height: 44,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: color.bar,
  },
  leftbar: {
    height: 44,
    flex: 1,
  },
  titlebar: {
    height: 44,
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 17,
    color: color.font1C,
    textAlign: 'center',
  },
  rightbar: {
    height: 44,
    flex: 1,
  },
});

module.exports = NavigatorTopBar
