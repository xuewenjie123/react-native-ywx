'use strict';
import React, { Component, } from 'react';
import {View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import GradientBox from "../../components/common/GradientBox";
import { queryTelephone } from '../../services/accont';

var _navigator,_this,_state,_props;


export default class ReplaceTel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      telephone:"",
    }
  }
  componentDidMount(){
     queryTelephone({},_this.queryTelephoneResult);
  }
  queryTelephoneResult(response){
    if(response.success){
        _this.setState({telephone:response.data})
    }else {
        ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
        return false;
    }
  }

  render() {
    _this = this;
    _state=_this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "更改手机号",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
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
      <View style={styles.main}>
          <NavigatorTopBar {...NavigatorTopBarProps}/>
          <View style={styles.up_box}>
              <Text style={styles.up_font}>当前手机号:</Text>
              <Text style={styles.up_font_a}>{_state.telephone}</Text>
          </View>
          <View style={styles.up_box_a}>
              <Text style={styles.up_font_b}>更换手机号后，请使用新手机号登录</Text>
          </View>
          <TouchableOpacity onPress={()=>_navigator.navigate("ReplaceTelNext")}>
              <GradientBox title={"更换手机号"} styles={styles.up_box_b}/>
          </TouchableOpacity>

      </View>
    );
  }

};
