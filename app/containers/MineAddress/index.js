'use strict';
import React, { Component, } from 'react';
import {View, Text,Image, ScrollView, TouchableOpacity,DeviceEventEmitter, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import {NavigationActions} from 'react-navigation';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import { queryAddressList,delAddress,setDefault } from '../../services/MyAddress';
import NavWait from '../../components/common/NavWait';
import ModalDelete from '../../components/common/ModalDelete';
var _navigator,_this,_state,_props;

var addressList=[
    {name:"陈鸿宇",phone:"1234567890",address:"北京市海淀区中关村大街256号",isDefault:true,},
    {name:"陈鸿宇",phone:"1234567890",address:"北京市海淀区中关村大街256号北京市海淀区中关村大街256号北京市海淀区中关村大街256号",isDefault:false,},
    {name:"陈鸿宇",phone:"1234567890",address:"北京市海淀区中关村大街256号",isDefault:true,},
    {name:"陈鸿宇",phone:"1234567890",address:"北京市海淀区中关村大街256号北京市海淀区中关村大街256号北京市海淀区中关村大街256号",isDefault:false,},
];
export default class MineAddress extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
    this.state = {
      dataSource: ds,
      addressList:addressList,
      loading:true,
      loadContinue:true,
      addressInfo: [],
      addressId:'',
      visible:false,
      router:""
    }
  }

  componentDidMount(){
    // this.subscription=DeviceEventEmitter.addListener("MineAddress",function(data){
    //  })
    if(this.props.navigation.state.params){
      _this.setState({router:this.props.navigation.state.params.router})
    }
     queryAddressList({},_this.queryResult,_this.queryFail)
  }
  nextAction(d){
      if (_state.router=="ExchangeConfirmation") {
        _navigator.goBack();
        DeviceEventEmitter.emit("ExchangeConfirmation",{name:d.name,phone:d.phone,address:d.address})
      }
  }
  // componentWillUnmount() {
  //   this.subscription.remove();
  // }
  queryResult(response){
    if(response.success){
       _this.setState({
         dataSource: _this.state.dataSource.cloneWithRows(response.data),
         addressInfo:response.data,
       })
       if(!response.data.length){
         _this.setState({
           loading:false
         })
       }
    }else{
        _this.queryFail()
    }
  }
  queryFail(){
    _this.setState({
      loadContinue:false,
    })
  }
  rendNoneView(){
     return(
      <View style={{flex:1}}>
         <View style={styles.repair_loadbox}>
          <Image source={require('../../images/address_e.png')} style={styles.load_img} />
          <Text style={styles.load_text}>暂无收货地址~</Text>
         </View>
      </View>
     )
   }
   isShowChange(addressId){

     var resultFu=function (response){
       if(response.success){
         ToastAndroid.show('设为默认成功', ToastAndroid.SHORT);
         queryAddressList({},_this.queryResult,_this.queryFail)
       }else{
         ToastAndroid.show('网络请求失败', ToastAndroid.SHORT);
       }
     }
     setDefault({addressId},resultFu)
   }
  deleteRow(){
    _this.setState({
      visible:false
    })
    var resultFu=function (response){
      if(response.success){
        ToastAndroid.show('删除成功', ToastAndroid.SHORT);
        queryAddressList({},_this.queryResult,_this.queryFail)
      }else{
        ToastAndroid.show('请稍后再试', ToastAndroid.SHORT);
      }
    }
    delAddress({addressId:_this.state.addressId},resultFu)
   }
   deleteAction(index,id){
      _this.setState({
        visible:true,
        addressId:id
      })
   }
   closeModal(){
     _this.setState({
       visible:false
     })
   }
   backRouter(){
     _navigator.goBack()
   }

  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "地址管理",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_this.backRouter()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      )
    };
    let ModalDeleteProps={
      visible:_state.visible,
      closeModal:function(){
        _this.closeModal()
      },
      deleteRow:function(){
        _this.deleteRow()
      }
    }

    return (
      <View style={styles.main}>
          <ModalDelete {...ModalDeleteProps}/>
          <NavigatorTopBar {...NavigatorTopBarProps}/>
          <View style={{paddingBottom:100}}>
              {
                _this.state.addressInfo.length?
                <ListView
                  alwaysBounce={true}
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow.bind(this)}
                  initialListSize={10}
                  enableEmptySections={true}
                  contentContainerStyle={{width:width,alignItems:"center"}}
                />
                :_this.state.loading?<NavWait />
                :_this.rendNoneView()
              }
            </View>


          <TouchableOpacity style={styles.add} onPress={()=>_navigator.navigate("MineAddressAdd",{id:false})}>
            <LinearGradient colors={['#5460ff','#5c99ff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.button_box}>
                <Image source={require('../../images/address_d.png')} style={styles.address_c} />
                <Text style={styles.button_font}>添加地址</Text>
            </LinearGradient>
          </TouchableOpacity>


      </View>
    );
  }
  _renderRow(rowContent,sectionID,rowID,){
    return(
      <View style={styles.list_a} key={rowID}>
          <TouchableOpacity onPress={()=>{_this.nextAction(rowContent)}}>
              <View style={styles.list_up}>
                  <Text style={styles.list_font}>{rowContent.name}</Text>
                  <Text style={styles.list_font}>{rowContent.phone}</Text>
              </View>
              <Text style={styles.list_font} numberOfLines={3}>{rowContent.address}</Text>
          </TouchableOpacity>
          <View style={styles.list_line}></View>
          <View style={styles.list_set}>
              <TouchableOpacity onPress={()=>{_this.isShowChange(rowContent.id)}}>
                  {rowContent.isDefault=="1"?
                    <View style={styles.list_set_a}>
                        <Image source={require('../../images/address_a.png')} style={styles.address_a} />
                        <Text style={styles.list_set_font}>默认地址</Text>
                    </View>
                    :
                    <View style={styles.list_set_a}>
                        <Image source={require('../../images/address_b.png')} style={styles.address_a} />
                        <Text style={styles.list_set_font}>设为默认地址</Text>
                    </View>
                  }
              </TouchableOpacity>
                <View style={styles.list_set_a}>
                    <TouchableOpacity style={[styles.list_set_a,{marginRight: 30,}]}
                     onPress={()=>{_navigator.navigate('MineAddressAdd',{id:rowContent.id,isDefault:rowContent.isDefault})}}>
                        <Image source={require('../../images/address_c.png')} style={styles.address_c} />
                        <Text style={styles.list_set_font}>编辑</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.list_set_a} onPress={()=>{_this.deleteAction(rowID,rowContent.id)}}>
                        <Image source={require('../../images/address_c.png')} style={styles.address_c} />
                        <Text style={styles.list_set_font}>删除</Text>
                    </TouchableOpacity >
                </View>
          </View>
      </View>
    )
  }

};
