'use strict';
import React, { Component, } from 'react';
import { StatusBar,View,TextInput, Text,Image, ScrollView, TouchableOpacity, BackHandler,ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import GradientBox from "../../components/common/GradientBox";
import LinearGradient from 'react-native-linear-gradient';
var _navigator,_this,_state,_props;
import { smslogin,validateMobileSendCode } from '../../services/accont';
import {setStorage} from '../../constant/storage';
import { NavigationActions,createAction } from '../../utils';
import { connect } from 'react-redux';
@connect(({ app }) => ({ ...app }))

export default class LoginCode extends Component {

  constructor(props) {
    super(props);
    this.timer=null;
    this.state = {
      isSee:true,
      tel:"",
      password:"",
      randNum:'发送验证码',
    }
  }



  componentWillUnmount(){
    this.timer&&clearInterval(this.timer)
  }
  telChange(text){
      _this.setState({tel:text})
  }
  passwordChange(text){
      _this.setState({password:text})
  }
  getRandNum(){
      var _this = this;
      var AlertMsg=function(response){
        if(response.success){
          ToastAndroid.show('验证码已发送至您的手机，请注意查收', ToastAndroid.SHORT);
          var stadus=60;
              _this.stateTimeChange(60);
              _this.timer=setInterval(function(){
                  stadus-=1;
                  _this.stateTimeChange(stadus);
                  if(stadus<0){
                    _this.stateTimeChange('发送验证码')
                    clearInterval(_this.timer)
                  }
              },1000)
        }else{
          //声明消息 不做操作
          ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
          return false;
        }
      }
        if(!isNaN(_this.state.randNum)){
           return false;
        }
        if(!_this.state.tel){
            ToastAndroid.show('请输入手机号码', ToastAndroid.SHORT);
            return false;
        }else if( !(/^1[34578]\d{9}$/.test(_this.state.tel)) ){
            ToastAndroid.show('请输入正确的手机号码', ToastAndroid.SHORT);
            return false;
        };
        validateMobileSendCode({telephone:_this.state.tel},AlertMsg);
  }
  stateTimeChange(stadus){
      this.setState({
          randNum:stadus
      })
  }


  loginAction(){
        var resultFu = function(response){
            let resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Famous'})
                ]
            })

           if(response.success){
             setStorage("login",{userId: response.data.id,isManager:response.data.isManager},(error)=>{
                _this.props.dispatch(createAction('app/save')({'headImg': response.data.headImg,
                                                                'isManager':response.data.isManager,
                                                                'userName':response.data.name}))

                 _navigator.dispatch(resetAction)
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
              ToastAndroid.show('请输入验证码', ToastAndroid.SHORT);
              return false;
            }else if(!(/^\d{4}$/.test(_this.state.password))){
               ToastAndroid.show('请输入有效验证码', ToastAndroid.SHORT);
               return false;
            }else{
              smslogin({telephone: _this.state.tel, msgCode: _this.state.password},resultFu);
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
                <TouchableOpacity  style={styles.eye} onPress={() => _this.getRandNum()}>
                    {
                      _this.state.randNum=="发送验证码"?null:
                      <Text style={styles.list_font_f}>s</Text>
                    }
                      <Text style={styles.list_font_f}>{_this.state.randNum}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list_a}>
                {_state.password.length?
                  <Image style={{width: 34*width/750, height: 34*width/750,marginRight:10,}} source={require('../../images/login_g.png')}></Image>
                  :
                  <Image style={{width: 34*width/750, height: 34*width/750,marginRight:10,}} source={require('../../images/login_c.png')}></Image>

                }
                <View style={styles.list_b}>
                    <TextInput maxLength={4} keyboardType={"numeric"} underlineColorAndroid="transparent" style={styles.list_input}
                    onChangeText={(text)=> _this.passwordChange(text)} value={_this.state.password}
                    placeholder="请输入验证码" placeholderTextColor='#dddddd' />
                </View>

            </View>
            <TouchableOpacity  style={styles.list_c}>
                <Text style={styles.list_font_e}>忘记密码？</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>_this.loginAction()}>
                <GradientBox title={"登录"} styles={styles.list_button}/>
            </TouchableOpacity>
            <TouchableOpacity  style={styles.list_d} onPress={()=>_navigator.navigate("RegisterNext")}>
                <Text style={styles.list_font_text}>还没有账号？</Text>
                <Text style={styles.list_font_a}>去注册</Text>
            </TouchableOpacity>
            <View  style={styles.list_e}>
                <Text style={styles.list_font_text}>右滑使用密码登录</Text>
                <Image style={{width: 26*width/750, height: 26*width/750,marginLeft:5}} source={require('../../images/icon_b.png')}></Image>
            </View>
          </View>
      </View>
    );
  }

};
