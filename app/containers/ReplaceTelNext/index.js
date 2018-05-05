'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView,TextInput, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import GradientBox from "../../components/common/GradientBox";
import { queryTelephone,sendChangeCode } from '../../services/accont';
var _navigator,_this,_state,_props;


export default class ReplaceTelNext extends Component {

  constructor(props) {
    super(props);
    this.state = {
      telephone:"",
    }
  }
  telephoneChange(text){
    _this.setState({telephone:text})
  }
  nextAction(){
        var sendChangeCodeResult = function(response){
            if(response.success){
               _navigator.navigate("ReplaceTelFinish",{telephone:_this.state.telephone})
            }else {
              ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
              return false;
            }
        }
        if(!_this.state.telephone){
          ToastAndroid.show('请输入手机号码', ToastAndroid.SHORT);
          return false;
        }else if( !(/^1[3|4|5|7|8][0-9]{9}$/.test(_this.state.telephone)) ){
            ToastAndroid.show('请输入正确的手机号码', ToastAndroid.SHORT);
            return false;
        }else{
          sendChangeCode({telephone:_this.state.telephone},sendChangeCodeResult);
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
              <Text style={styles.up_font}>新的手机号:</Text>
              <TextInput underlineColorAndroid="transparent" style={styles.up_font_a}
               maxLength={11} keyboardType={"numeric"}
              onChangeText={(text)=> _this.telephoneChange(text)} value={_this.state.telephone}
               placeholder="请输入您要更换的手机号" placeholderTextColor='#dddddd'/>
          </View>
          <View style={styles.up_box_a}>
              <Text style={styles.up_font_b}>更换手机号后，请使用新手机号登录</Text>
          </View>
          <TouchableOpacity onPress={()=>_this.nextAction()}>
              <GradientBox title={"下一步"} styles={styles.up_box_b}/>
          </TouchableOpacity>
      </View>
    );
  }

};
