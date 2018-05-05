'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import Dimensions from 'Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
var { width, height } = Dimensions.get('window');
import {getStorage,removeStorage} from '../../constant/storage'
var _navigator,_this,_state,_props;
import { connect } from 'react-redux';
import Logout from './../../components/setting/Logout';

import { NavigationActions,createAction } from '../../utils';
@connect(({ app }) => ({ ...app }))
export default class MySetting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible:false
    }
  }
  _NavgateRouter(str){
    getStorage("login",function(error,data){
        if(data){
          _navigator.navigate(str)
        }else {
          ToastAndroid.show('请先登录',ToastAndroid.SHORT)
          _navigator.navigate('LoginPassword')
        }
    })
  }
  render() {
    _this = this;
    _navigator = _this.props.navigation;
    _state = this.state
    let NavigatorTopBarProps = {
      visible: true,
      title: "设置",
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
    let LogoutProps = {
      visible: _this.state.modalVisible,
      onClose: function(){
        _this.setState({
          modalVisible: false,
        })
      },
      onOk:function(){
        _this.setState({
          modalVisible: false,
        })
        removeStorage('login',function(error){
        _this.props.dispatch(createAction('app/save')({'headImg': "",'isManager':"",'userName':"立即登录"}))
         var resetAction = NavigationActions.reset({
           index: 0,
           actions: [
             NavigationActions.navigate({routeName: 'Mine'}),
           ]
         })
         _navigator.dispatch(resetAction)
        ToastAndroid.show('退出登录成功',ToastAndroid.SHORT)
        })
      },
    };
    return (
      <View style={{flex:1}}>
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
              <ScrollView>
              <TouchableOpacity style={styles.list_up} onPress={()=>_this._NavgateRouter("ModifyPassword")}>
                <Text style={styles.list_font}>修改密码</Text>
                <Image style={{width: 30*width/750, height: 30*width/750,}} source={require('../../images/icon_c.png')}></Image>
              </TouchableOpacity>

              <View style={styles.list_middle}>
                  <View style={styles.list_a}>
                    <Text style={styles.list_font}>字体大小</Text>
                    <View style={styles.list_b}>
                        <Text style={styles.list_font_a}>中</Text>
                        <Image style={{width: 30*width/750, height: 30*width/750,}} source={require('../../images/icon_c.png')}></Image>
                    </View>
                  </View>
                  <View style={styles.list_line}></View>

                  <View style={styles.list_a}>
                    <Text style={styles.list_font}>新消息通知</Text>
                    <TouchableOpacity style={{padding:10,paddingRight:0}} onPress={
                      ()=>_this.props.dispatch(createAction('app/save')({globalMessage:!_this.props.globalMessage}))}>
                     {this.props.globalMessage?<Image style={{width: 80*width/750, height: 40*width/750,}} source={require('../../images/address_g.png')}/>:<Image style={{width: 80*width/750, height: 40*width/750,}} source={require('../../images/address_f.png')}/>}
                    </TouchableOpacity>
                  </View>

                  <View style={styles.list_line}></View>
                  <View style={styles.list_a}>
                    <Text style={styles.list_font}>声音</Text>
                    <TouchableOpacity style={{padding:10,paddingRight:0}} onPress={
                      ()=>_this.props.dispatch(createAction('app/save')({globalSound:!_this.props.globalSound}))}>
                    {this.props.globalSound?<Image style={{width: 80*width/750, height: 40*width/750,}} source={require('../../images/address_g.png')}/>:<Image style={{width: 80*width/750, height: 40*width/750,}} source={require('../../images/address_f.png')}/>}
                    </TouchableOpacity>
                  </View>
                  <View style={styles.list_line}></View>
                    <View style={styles.list_a}>
                      <Text style={styles.list_font}>震动</Text>
                          <TouchableOpacity style={{padding:10,paddingRight:0}} onPress={
                              ()=>_this.props.dispatch(createAction('app/save')({globalshock:!_this.props.globalshock}))}>
                              {this.props.globalshock?<Image style={{width: 80*width/750, height: 40*width/750,}} source={require('../../images/address_g.png')}/>:<Image style={{width: 80*width/750, height: 40*width/750,}} source={require('../../images/address_f.png')}/>}
                          </TouchableOpacity>
                    </View>


              </View>
              <View style={styles.list_middle}>
                  <TouchableOpacity style={styles.list_a}>
                    <Text style={styles.list_font}>关于中科慧勤</Text>
                    <Image style={{width: 30*width/750, height: 30*width/750,}} source={require('../../images/icon_c.png')}></Image>
                  </TouchableOpacity>

                  <View style={styles.list_line}></View>

                  <View style={styles.list_a}>

                    <Text style={styles.list_font}>允许自动更新</Text>
                    <TouchableOpacity style={{padding:10,paddingRight:0}} onPress={
                            ()=>_this.props.dispatch(createAction('app/save')({globalUpdate:!_this.props.globalUpdate}))}>
                    {this.props.globalUpdate?<Image style={{width: 80*width/750, height: 40*width/750,}} source={require('../../images/address_g.png')}/>:<Image style={{width: 80*width/750, height: 40*width/750,}} source={require('../../images/address_f.png')}/>}
                    </TouchableOpacity>
                  </View>

                  <View style={styles.list_line}></View>

                  <TouchableOpacity style={styles.list_a}>
                    <Text style={styles.list_font}>清理缓存</Text>
                    <Text style={styles.list_font_b}>40M</Text>
                  </TouchableOpacity>
              </View>

              <TouchableOpacity style={styles.list_button} onPress={() =>_this.setState({modalVisible:true})}>
                <Text style={styles.font_button}>退出登录</Text>
              </TouchableOpacity>
              </ScrollView>
          </View>
          <Logout {...LogoutProps}/>
      </View>
    );
  }

};
