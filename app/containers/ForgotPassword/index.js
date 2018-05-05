'use strict';
import React, { Component, } from 'react';
import { StatusBar,View,TextInput, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
var _navigator,_this,_state,_props;
import GradientBox from "../../components/common/GradientBox";
import ForgotPasswordJump from './../../components/setting/ForgotPasswordJump';
import { resetPassword } from '../../services/accont';
export default class ForgotPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      repeat:"",
      password:"",
      tel:"",
      modalVisible: false,
    }
  }
  repeatChange(text){
      _this.setState({repeat:text})
  }
  passwordChange(text){
      _this.setState({password:text})
  }
  forgotPasswordAction(){
          var resultFu = function(response){
             if(response.success){
               _this.setState({modalVisible: false,})
               _navigator.navigate("Famous") //跳转至首页
            }else{
            ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
              return false;
            }
          }
        if(!_this.state.password){
              ToastAndroid.show('请输入密码', ToastAndroid.SHORT);
              return false;
            }else if(!(/^\d{4}$/.test(_this.state.password))){
               ToastAndroid.show('密码格式不正确', ToastAndroid.SHORT);
               return false;
            }else if(!_this.state.repeat){
              ToastAndroid.show('请输入确认密码', ToastAndroid.SHORT);
              return false;
            }else if(_this.state.repeat!==_this.state.password){
              ToastAndroid.show('两次密码不一致', ToastAndroid.SHORT);
              return false;
            }else{
                 resetPassword({telephone: _this.state.tel, password: _this.state.password},resultFu);
                 _this.setState({modalVisible: true,})
            }
  }
  render() {
    _this = this;
    _state=_this.state;
    _navigator = _this.props.navigation;
    let ForgotPasswordJumpProps = {
      visible: _this.state.modalVisible,
      onClose: function(){
        _this.setState({
          modalVisible: false,
          repeat: "",
          password: "",
        })
        _navigator.navigate("Famous")
      },
    };
    let NavigatorTopBarProps = {
      visible: true,
      title: "忘记密码",
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
          <View style={styles.list_box}>
            <View style={styles.list_a}>
                {_state.password.length?
                  <Image style={{width: 17, height: 17,marginRight:10,}} source={require('../../images/login_g.png')}></Image>
                  :
                  <Image style={{width: 17, height: 17,marginRight:10,}} source={require('../../images/login_c.png')}></Image>

                }
                <View style={styles.list_b}>
                    <TextInput maxLength={16} underlineColorAndroid="transparent" style={styles.list_input}
                    onChangeText={(text)=> _this.passwordChange(text)} value={_this.state.password}  secureTextEntry={true}
                    placeholder="请输入您的密码" placeholderTextColor='#dddddd'/>
                </View>
            </View>
            <View style={styles.list_a}>
                {_state.repeat.length?
                  <Image style={{width: 17, height: 17,marginRight:10,}} source={require('../../images/login_g.png')}></Image>
                  :
                  <Image style={{width: 17, height: 17,marginRight:10,}} source={require('../../images/login_c.png')}></Image>

                }
                <View style={styles.list_b}>
                    <TextInput maxLength={16} underlineColorAndroid="transparent" style={styles.list_input}
                    onChangeText={(text)=> _this.repeatChange(text)} value={_this.state.repeat} secureTextEntry={true}
                    placeholder="请再次输入密码" placeholderTextColor='#dddddd' />
                </View>

            </View>
            <TouchableOpacity  style={styles.list_c}>
                <Text style={styles.list_font_text}>密码长度为8~20位，采用字母、数字、特殊符号任意两种方式组合</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>_this.forgotPasswordAction()}>
                 <GradientBox title={"提交"} styles={styles.list_button}/>
            </TouchableOpacity>
          </View>
          <ForgotPasswordJump {...ForgotPasswordJumpProps}/>
      </View>
    );
  }

};
