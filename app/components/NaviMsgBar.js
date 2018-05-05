'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
import color from './../constant/color';
var _props,_this;

class NavigatorTopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 1,
    }
  }
  _onPushRouter(){
    global.getMsgSign = false;
    _props.navigator.push({
      title:"MessageNotice",
      id:"MessageNotice",
    });
  }
  componentDidMount(){
    this._timego = setInterval(timeUpNew,3000);
    function timeUpNew (){
      _this.setState({key:_this.state.key+1})
    }
  }
  componentWillUnmount(){
    clearInterval(this._timego);
  }
  render() {
    _this = this;
    _props = _this.props;
    return (
      <TouchableOpacity style={{flex: 1}}
        underlayColor='transparent'
        onPress={() => _this._onPushRouter()}>
        <View style={{flex: 1, paddingRight: 10,flexDirection: 'row',justifyContent: 'flex-end', alignItems: 'center',}}>
          <Image style={{width: 23, height: this.state.key?23:23,}} source={global.getMsgSign?require('./../images/icon_d.png'):require('./../images/icon_d.png')}></Image>
        </View>
      </TouchableOpacity>
    )
  }
};

module.exports = NavigatorTopBar
