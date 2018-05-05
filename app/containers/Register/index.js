'use strict';
import React, { Component, } from 'react';
import { StatusBar,View,TextInput, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import LinearGradient from 'react-native-linear-gradient';
var _navigator,_this,_state,_props;
import GradientBox from "../../components/common/GradientBox";
import { register } from '../../services/accont';

export default class Register extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSee:true,
      repeat:"",
      password:"",
      tel:this.props.navigation.state.params.telphone,
    }
  }
repeatChange(text){
    _this.setState({repeat:text})
}
passwordChange(text){
    _this.setState({password:text})
}
registerAction(){
      var resultFu = function(response){
         if(response.success){
            _navigator.navigate("MineCompany")
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
            console.log(!_this.state.repeat==_this.state.password);
            ToastAndroid.show('两次密码不一致', ToastAndroid.SHORT);
            return false;
          }else{
            console.log(_this.state.tel);
            register({telephone: _this.state.tel, password: _this.state.password},resultFu);
          }
}
  render() {
    _this = this;
    _state=_this.state;
    _navigator = _this.props.navigation;
    return (
      <View style={styles.main}>
          <LinearGradient colors={['#5c99ff' ,'#5460ff']} style={styles.header}>
              <StatusBar
                translucent={true}
                backgroundColor={"transparent"}
                barStyle="dark-content"
              />
          </LinearGradient>
          <View style={styles.list_box}>
            <View style={styles.list_a}>
                {_state.password.length?
                  <Image style={{width: 17, height: 17,marginRight:10,}} source={require('../../images/login_g.png')}></Image>
                  :
                  <Image style={{width: 17, height: 17,marginRight:10,}} source={require('../../images/login_c.png')}></Image>

                }
                <View style={styles.list_b}>
                    <TextInput maxLength={20} underlineColorAndroid="transparent" style={styles.list_input}
                    onChangeText={(text)=> _this.passwordChange(text)} value={_this.state.password} secureTextEntry={true}
                    placeholder="请输入您的密码" placeholderTextColor='#dddddd' />
                </View>
            </View>
            <View style={styles.list_a}>
                {_state.repeat.length?
                  <Image style={{width: 17, height: 17,marginRight:10,}} source={require('../../images/login_g.png')}></Image>
                  :
                  <Image style={{width: 17, height: 17,marginRight:10,}} source={require('../../images/login_c.png')}></Image>

                }
                <View style={styles.list_b}>
                    <TextInput maxLength={20} underlineColorAndroid="transparent" style={styles.list_input}
                    onChangeText={(text)=> _this.repeatChange(text)} value={_this.state.repeat}  secureTextEntry={true}
                    placeholder="请再次输入密码" placeholderTextColor='#dddddd'/>
                </View>
            </View>
            <TouchableOpacity  style={styles.list_c}>
                <Text style={styles.list_font_text}>密码长度为8~20位，采用字母、数字、特殊符号任意两种方式组合</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>_this.registerAction()}>
                <GradientBox title={"注册"} styles={styles.list_button}/>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.list_d} onPress={()=>_navigator.navigate("LoginCode")}>
                <Text style={styles.list_font_text}>已有账号？</Text>
                <Text style={styles.list_font_a}>去登录</Text>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.list_e}>
                <Text style={styles.list_font_a}>注册表示已阅读并同意《...协议》</Text>
            </TouchableOpacity>
          </View>
      </View>
    );
  }

};
