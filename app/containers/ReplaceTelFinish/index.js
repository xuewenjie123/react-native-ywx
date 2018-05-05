'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, TextInput,Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import GradientBox from "../../components/common/GradientBox";
import {changeTelephone ,sendChangeCode} from '../../services/accont';
var _navigator,_this,_state,_props;


export default class ReplaceTelFinish extends Component {

  constructor(props) {
    super(props);
    this.timer=null;
    this.state = {
      oneValue:"",
      twoValue:"",
      threeValue:"",
      fourValue:"",
      randNum:"60",
      telephone:this.props.navigation.state.params.telephone,

    }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      var _this = this;
          var stadus=60;
              _this.stateTimeChange(60);
              _this.timer=setInterval(function(){
                  stadus-=1;
                  _this.stateTimeChange(stadus);
                  if(stadus<0){
                    clearInterval(_this.timer)
                  }
              },1000)
    });
  }
  componentWillUnmount(){
    this.timer&&clearInterval(this.timer)
  }
  reSendChangeCode(){
      var sendChangeCodeResult = function(response){
        if (response.success) {
              var stadus=60;
                  _this.stateTimeChange(60);
                  _this.timer=setInterval(function(){
                      stadus-=1;
                      _this.stateTimeChange(stadus);
                      if(stadus<0){
                        clearInterval(_this.timer)
                      }
                  },1000)
        }else {
          ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
          return false;
        }

      }
      sendChangeCode({telephone:_this.state.telephone},sendChangeCodeResult);
  }
  finish(){
    var finishResult = function(response){
      if (response.success) {
        _navigator.navigate("MineAccount")
      }else {
        ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
        return false;
      }
    }
    if(!_this.state.oneValue || !_this.state.twoValue || !_this.state.threeValue || !_this.state.fourValue ){
      ToastAndroid.show('请输入验证码', ToastAndroid.SHORT);
      return false;
    }else{
      var msgCode = _this.state.oneValue+_this.state.twoValue+_this.state.threeValue+_this.state.fourValue
      changeTelephone({userId:_this.state.userId,telephone:_this.state.telephone,msgCode:msgCode},finishResult);
    }
  }
  stateTimeChange(stadus){
      this.setState({
          randNum:stadus
      })
  }

  render() {
    _this = this;
    _state=_this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "身份认证",
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
              <Text style={styles.up_font}>我们已将验证码发送至您的新手机</Text>
              <Text style={styles.up_font}>{_state.telephone}</Text>
              <View style={styles.middle_box}>
                    <View style={_state.oneValue?styles.middle_num_box:styles.middle_no_box}>
                          <TextInput maxLength={1} keyboardType={"numeric"} underlineColorAndroid="transparent" style={styles.middle_input}
                          onChangeText={(text) => _this.setState({oneValue:text})} value={_this.state.oneValue}
                          placeholder="—" placeholderTextColor='#dddddd'/>
                    </View>
                    <View style={_state.twoValue?styles.middle_num_box:styles.middle_no_box}>
                          <TextInput maxLength={1} keyboardType={"numeric"} underlineColorAndroid="transparent" style={styles.middle_input}
                          onChangeText={(text) => _this.setState({twoValue:text})} value={_this.state.twoValue}
                           placeholder="—" placeholderTextColor='#dddddd'/>
                    </View>
                    <View style={_state.threeValue?styles.middle_num_box:styles.middle_no_box}>
                          <TextInput maxLength={1} keyboardType={"numeric"} underlineColorAndroid="transparent" style={styles.middle_input}
                          onChangeText={(text) => _this.setState({threeValue:text})} value={_this.state.threeValue}
                          placeholder="—" placeholderTextColor='#dddddd'/>
                    </View>
                    <View style={_state.fourValue?styles.middle_num_box:styles.middle_no_box}>
                          <TextInput maxLength={1} keyboardType={"numeric"} underlineColorAndroid="transparent" style={styles.middle_input}
                          onChangeText={(text) => _this.setState({fourValue:text})} value={_this.state.fourValue}
                          placeholder="—" placeholderTextColor='#dddddd'/>
                    </View>
              </View>
              {_state.randNum>=0?
                <View style={styles.down_box}>
                      <Text style={styles.down_time}>{_state.randNum}</Text>
                      <Text style={styles.up_font}>秒后收不到可重新获取</Text>
                </View>
                :
                <TouchableOpacity style={styles.down_box} onPress={()=>_this.reSendChangeCode()}>
                      <Text style={styles.down_time}>重新获取</Text>
                </TouchableOpacity>
              }

          </View>
          <TouchableOpacity onPress={()=>_this.finish()}>
              <GradientBox title={"完成"} styles={styles.button_box}/>
          </TouchableOpacity>
      </View>
    );
  }

};
