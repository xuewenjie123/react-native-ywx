'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles = require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions'

var _navigator,_this,_state,_props;
export default class About extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    _this = this;
    _navigator = _this.props.navigator;
    let NavigatorTopBarProps = {
      visible: true,
      title: "关于中科慧勤",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.pop()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      rightView: (
        <TouchableOpacity  style={{flex: 1}}
          onPress={() => {}}>
        </TouchableOpacity>
      ),
    }

    return (
      <View style={{flex:1}}>
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>

          </View>
      </View>
    );
  }

};
