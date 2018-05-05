'use strict';
import React, { Component, } from 'react';
import {View, Text,Image, ScrollView,TextInput, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import {NavigationActions} from 'react-navigation';
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import AddressModal from '../../components/cityIndexListView/AddressModal';
import { addUserAddress,getAddressById,updateAddress } from '../../services/MyAddress';
var _navigator,_this,_state,_props;


export default class MineAddressAdd extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      phone:'',
      address:'',
      default:this.props.navigation.state.params.isDefault,
      provinceId:'',
      cityId:'',
      countyId:'',
      detail:'',
      userId:'',
      placeSelect:'',
      visible:false,
      palceSelect:'',
    }
  }
  setIsDefault(value){
    _this.setState({isDefault:value})
  }
  componentDidMount(){
    var resultFu=function(response){
      if(response.success){
        _this.setState({
          name:response.data.name,
          phone:response.data.phone,
          placeSelect:response.data.provinceName+response.data.cityName+response.data.countyName,
          detail:response.data.detail,
          provinceId:response.data.provinceId,
          cityId:response.data.cityId,
          countyId:response.data.countyId,
        })
      }
    }
    if (_this.props.navigation.state.params.id) {
      getAddressById(_this.props.navigation.state.params.id,resultFu)
    }
  }

  closeModal(){
    _this.setState({
      visible:false
    })
  }
  getModal(){
    _this.setState({
      visible:true
    })
  }
  getPalceSelect(place,proval,cityval,counval){
    _this.setState({
      placeSelect:place,
      provinceId:proval,
      cityId:cityval,
      countyId:counval,
      visible:false
    })
  }

  finshedChange(){
    var resultFu = function(response){
        if(response.success){
            if(_props.navigation.state.params.id){
               ToastAndroid.show('修改成功', ToastAndroid.SHORT);
            }else{
               ToastAndroid.show('添加成功', ToastAndroid.SHORT);
            }
             _navigator.navigate("MineAddress");
        }else{
            ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
        }
    };

   if(!_state.name){
     ToastAndroid.show('请输入收货人', ToastAndroid.SHORT);
     return false;
   }else if (!_state.phone) {
     ToastAndroid.show('请输入联系电话', ToastAndroid.SHORT);
     return false;
   }else if (!_state.placeSelect) {
     ToastAndroid.show('请选择区域', ToastAndroid.SHORT);
     return false;
   }else if (!_state.detail) {
     ToastAndroid.show('请输入详细地址', ToastAndroid.SHORT);
     return false;
   }else {
     if(_props.navigation.state.params.id){
       console.log(_state.countyId,_state.cityId,_state.cityId);
       updateAddress({id:_this.props.navigation.state.params.id,
                      name: _state.name,
                      phone:_state.phone,
                      detail:_state.detail,
                      countyId:_state.countyId,
                      provinceId:_state.provinceId,
                      cityId:_state.cityId,
                      isDefault:_state.isDefault}
                      ,resultFu)
     }else{
       addUserAddress({
                       name: _state.name,
                       phone:_state.phone,
                       detail:_state.detail,
                       countyId:_state.countyId,
                       provinceId:_state.provinceId,
                       cityId:_state.cityId,
                       isDefault:_state.isDefault},resultFu)
     }

   }

  }
  backRouter(){
    // const resetAction = NavigationActions.reset({
    //   index: 1,
    //   actions: [
    //       NavigationActions.navigate({routeName: 'Mine'}),
    //     NavigationActions.navigate({routeName: 'MineAddress'})
    //   ]
    // })
    // _navigator.dispatch(resetAction)
    _navigator.goBack()
  }

  render() {
    _this = this;
    _props=this.props;
    _state = _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "添加地址",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_this.backRouter()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      rightView: (
        <TouchableOpacity  style={{flex: 1}}
          onPress={()=>_this.finshedChange()}>
          <View style={{flex: 1,flexDirection: 'row-reverse',alignItems: 'center'}}>
            <Text style={{fontSize:17,color:'#303030',marginRight:15}}>保存</Text>
          </View>
        </TouchableOpacity>
      ),
    };
    let AddressModalProps={
      visible:_state.visible,
      closeModal:function(){
        _this.closeModal()
      },
      getPalceSelect:function(place,proval,cityval,counval){
        _this.getPalceSelect(place,proval,cityval,counval)
      },
      provinceId:_state.provinceId,
      cityId:_state.cityId,
      countyId:_state.countyId,
    }

    return (
        <View style={styles.main}>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            <View style={styles.info_box}>
                <View style={styles.list_a}>
                    <Text style={styles.list_font}>收  货  人：</Text>
                    <TextInput  underlineColorAndroid="transparent" style={styles.list_input}
                    onChangeText={(text) => _this.setState({name:text})} value={_this.state.name}
                    placeholder="请输入收货人" placeholderTextColor='#dddddd'/>
                </View>
                <View style={styles.list_a}>
                    <Text style={styles.list_font}>联系电话：</Text>
                    <TextInput maxLength={11} underlineColorAndroid="transparent" style={styles.list_input}
                    onChangeText={(text) => _this.setState({phone:text})} value={_this.state.phone}
                    placeholder="请输入联系电话" placeholderTextColor='#dddddd'/>
                </View>
                <View style={styles.list_b}>
                    <Text style={styles.list_font}>地        址：</Text>
                    <TouchableOpacity style={{height:50,paddingLeft:12,flex:1,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}} onPress={()=>_this.getModal()}>
                      <Text style={styles.text}>{_state.placeSelect}</Text>
                      <Image source={require('../../images/icon_c.png')} style={{height:15,width:15}}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.list_c}>
                      <TextInput underlineColorAndroid="transparent" style={styles.list_input_a}
                      onChangeText={(text) => _this.setState({detail:text})} value={_this.state.detail}
                      placeholder='请输入详细地址' placeholderTextColor='#dddddd' multiline={true}  maxLength={200}/>
                </View>

            </View>
            {_state.default=="1"?null:
              <View style={styles.list_box_a}>
                  <Text style={styles.list_font}>设为默认</Text>
                  {_state.isDefault=="1"?
                  <TouchableOpacity
                    onPress={()=>_this.setIsDefault("0")} style={{paddingLeft:20,paddingVertical:20}}>
                    <Image style={{width: 40, height: 20,}} source={require('../../images/address_g.png')}></Image>
                  </TouchableOpacity>
                  :<TouchableOpacity
                    onPress={()=>_this.setIsDefault("1")} style={{paddingLeft:20,paddingVertical:20}}>
                    <Image style={{width: 40, height: 20,}} source={require('../../images/address_f.png')}></Image>
                  </TouchableOpacity>
                }
              </View>
            }

            <AddressModal {...AddressModalProps}/>
        </View>
    );
  }


















};
