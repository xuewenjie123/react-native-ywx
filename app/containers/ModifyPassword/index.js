'use strict';
import React, { Component, } from 'react';
import {View, Text,Image,TextInput, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import GradientBox from "../../components/common/GradientBox";
import { updatePassword } from '../../services/accont';
import PasswordSuccess from './../../components/setting/PasswordSuccess';
import PasswordFail from './../../components/setting/PasswordFail';
var _navigator,_this,_state,_props;


export default class ModifyPassword extends Component {

  constructor(props) {
    super(props);
    this.state = {
      oldPassword:"",
      newPassword:"",
      repeatPassword:"",
      modalVisible: false,
      modalVisible2: false,
    }
  }
  modifyPasswordAction(){
          var resultFu = function(response){
             if(response.success){
               _this.setState({modalVisible2: false,modalVisible: true,})
            }else if(response.status=="404"){
               _this.setState({modalVisible: false,modalVisible2: true,})
            }else {
              ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
                return false;
            }
          }
        if(!_this.state.oldPassword){
              ToastAndroid.show('请输入原密码', ToastAndroid.SHORT);
              return false;
            }else if(!(/^\d{6}$/.test(_this.state.oldPassword))){
               ToastAndroid.show('密码格式不正确', ToastAndroid.SHORT);
               return false;
            }else if(!_this.state.newPassword){
              ToastAndroid.show('请输入新密码', ToastAndroid.SHORT);
              return false;
            }else if(!_this.state.repeatPassword){
              ToastAndroid.show('请输入确认密码', ToastAndroid.SHORT);
              return false;
            }else if(_this.state.newPassword!==_this.state.repeatPassword){
              ToastAndroid.show('两次新密码不一致', ToastAndroid.SHORT);
              return false;
            }else{
                updatePassword({oldPassword: _this.state.oldPassword, newPassword: _this.state.newPassword},resultFu);
            }
  }

  render() {
    _this = this;
    _navigator = _this.props.navigation;
    let PasswordFailProps = {
      visible: _this.state.modalVisible2,
      onClose: function(){
        _this.setState({
          modalVisible2: false,
          oldPassword:"",
          newPassword:"",
          repeatPassword:"",
        })
      },
    };
    let PasswordSuccessProps = {
      visible: _this.state.modalVisible,
      onClose: function(){
        _this.setState({
          modalVisible: false,
          oldPassword:"",
          newPassword:"",
          repeatPassword:"",
        })
        _navigator.navigate("MySetting")
      },
    };
    let NavigatorTopBarProps = {
      visible: true,
      title: "修改密码",
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
          <View style={styles.list}>
              <View style={styles.list_a}>
                  <Text style={styles.list_input_a}>原密码：</Text>
                  <View style={styles.list_b}>
                      <TextInput maxLength={20} underlineColorAndroid="transparent" style={styles.list_input}
                      onChangeText={(text)=> _this.setState({oldPassword:text})} value={_this.state.oldPassword}  secureTextEntry={true}
                      placeholder="请输入原密码" placeholderTextColor='#dddddd'/>
                  </View>
              </View>
              <View style={styles.list_a}>
                  <Text style={styles.list_input_a}>新密码：</Text>
                  <View style={styles.list_b}>
                      <TextInput maxLength={20} underlineColorAndroid="transparent" style={styles.list_input}
                      onChangeText={(text)=>_this.setState({newPassword:text})} value={_this.state.newPassword}  secureTextEntry={true}
                      placeholder="请输入新密码" placeholderTextColor='#dddddd'/>
                  </View>
              </View>
              <View style={styles.list_a}>
                  <Text style={styles.list_input_a}>新密码：</Text>
                  <View style={styles.list_b}>
                      <TextInput maxLength={20} underlineColorAndroid="transparent" style={styles.list_input}
                      onChangeText={(text)=> _this.setState({repeatPassword:text})} value={_this.state.repeatPassword}  secureTextEntry={true}
                      placeholder="请再输入一次" placeholderTextColor='#dddddd'/>
                  </View>
              </View>
              <Text style={styles.list_font_text}>密码长度为8~20位，采用字母、数字、特殊符号任意两种方式组合</Text>
              <TouchableOpacity onPress={()=>_this.modifyPasswordAction()}>
              <GradientBox title={"修改"} styles={styles.button_box}/>
              </TouchableOpacity>
          </View>
          <PasswordSuccess {...PasswordSuccessProps}/>
          <PasswordFail {...PasswordFailProps}/>
      </View>
    );
  }

};
