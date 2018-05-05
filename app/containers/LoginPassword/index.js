'use strict';
import React, { Component, } from 'react';
import { StatusBar,View,TextInput, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import GradientBox from "../../components/common/GradientBox";
var _navigator,_this,_state,_props;
import { login } from '../../services/accont';
import {getStorage,setStorage} from '../../constant/storage';
import { NavigationActions,createAction } from '../../utils';
import { connect } from 'react-redux';
@connect(({ app }) => ({ ...app }))

export default class LoginPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isSee:true,
      tel:"",
      password:"",
    }
  }
telChange(text){
    _this.setState({tel:text})
}
passwordChange(text){
    _this.setState({password:text})
}
loginAction(){
      var resultFu = function(response){
         if(response.success){
          setStorage("login",{userId: response.data.id,isManager:response.data.isManager},(error)=>{
            _this.props.dispatch(createAction('app/save')({'headImg': response.data.headImg,
                                                            'isManager':response.data.isManager,
                                                            'userName':response.data.realName}))
            _navigator.navigate("Mine")
          })
        }else{
        ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
          return false;
        }
      }
      if(!_this.state.tel){
            ToastAndroid.show('请输入手机号码', ToastAndroid.SHORT);
            return false;
          }else if( !(/^1[3|4|5|7|8][0-9]{9}$/.test(_this.state.tel)) ){
              ToastAndroid.show('请输入正确的手机号码', ToastAndroid.SHORT);
              return false;
          }else if(!_this.state.password){
            ToastAndroid.show('请输入密码', ToastAndroid.SHORT);
            return false;
          }else{
            login({telephone: _this.state.tel, password: _this.state.password},resultFu);
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
                {_state.tel.length?
                  <Image style={{width: 34*width/750, height: 34*width/750,marginRight:10,}} source={require('../../images/login_b.png')}></Image>
                  :
                  <Image style={{width: 34*width/750, height: 34*width/750,marginRight:10,}} source={require('../../images/login_a.png')}></Image>

                }
                <View style={styles.list_b}>
                    <TextInput maxLength={11} keyboardType={"numeric"} underlineColorAndroid="transparent" style={styles.list_input}
                    onChangeText={(text)=> _this.telChange(text)} value={_this.state.tel}
                    placeholder="请输入您的手机号" placeholderTextColor='#dddddd'/>
                </View>
            </View>
            <View style={styles.list_a}>
                {_state.password.length?
                  <Image style={{width: 34*width/750, height: 34*width/750,marginRight:10,}} source={require('../../images/login_g.png')}></Image>
                  :
                  <Image style={{width: 34*width/750, height: 34*width/750,marginRight:10,}} source={require('../../images/login_c.png')}></Image>

                }
                <View style={styles.list_b}>
                    <TextInput maxLength={20} underlineColorAndroid="transparent" style={styles.list_input}
                    onChangeText={(text)=> _this.passwordChange(text)} value={_this.state.password}
                    placeholder="请输入密码" placeholderTextColor='#dddddd' secureTextEntry={_state.isSee?true:false}/>
                </View>
                <TouchableOpacity onPress={()=> _this.setState({isSee:!_state.isSee})} style={styles.eye}>
                    {_state.isSee?
                      <Image style={{width: 34*width/750, height: 34*width/750}} source={require('../../images/login_d.png')}></Image>
                      :
                      <Image style={{width: 34*width/750, height: 34*width/750}} source={require('../../images/login_e.png')}></Image>

                    }
                </TouchableOpacity>
            </View>
            <TouchableOpacity  style={styles.list_c}>
                <Text style={styles.list_font_a}>忘记密码？</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>_this.loginAction()}>
                <GradientBox title={"登录"} styles={styles.list_button}/>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.list_d} onPress={()=>_navigator.navigate("RegisterNext")}>
                <Text style={styles.list_font_text}>还没有账号？</Text>
                <Text style={styles.list_font_a}>去注册</Text>
            </TouchableOpacity>
            <View  style={styles.list_e}>
                <Image style={{width: 26*width/750, height: 26*width/750,marginRight:5}} source={require('../../images/icon_d.png')}></Image>
                <Text style={styles.list_font_text}>左滑使用验证码登录</Text>
            </View>
          </View>
      </View>
    );
  }

};
