'use strict';
import React, { Component, } from 'react';
import {View, Text,Image, ScrollView,TextInput,DeviceEventEmitter, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import AddressModal from '../../components/cityIndexListView/companyAddress'
import CompanyModal from '../../components/cityIndexListView/CompanyModal';
import { addUserPosition,getProjectsByCityId,getBuildingsByProjectId,getRoomsByBuildingId } from '../../services/MyCompany';
import {NavigationActions} from '../../utils'
import color from '../../constant/color';
import {queryAddressList} from '../../services/MyAddress'
import {positionList} from '../../services/MyCompany'
var _navigator,_this,_state,_props;
export default class MineAddressAdd extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name:'',
        phone:'',
        address:'',
        isDefault:false,
        provinceId:'',
        cityId:'',
        detail:'',
        userId:'',
        placeSelect:'请选择',
        visible:false,
        display:false,
        palceSelect:'',
        projectId:"",
        buildingId:"",
        roomId:"",
        complexAddress:"",
        projectList:[],
        addressList:[],
        companyList:[],
      }
    }
    isDefault(){
      _this.setState({isDefault:!_state.isDefault})
    }

    closeModal(){
      _this.setState({
        visible:false
      })
    }
    closeCompanyModal(){
      _this.setState({
        display:false
      })
    }
    getModal(){
      _this.setState({
        visible:true
      })
    }
    getCompanyModal(){
      if(!_state.cityId){
        ToastAndroid.show('请先选择地址', ToastAndroid.SHORT);
        return false
      }
      _this.setState({
        display:true
      })
    }
    getPalceSelect(place,proval,cityval){
      _this.setState({
        placeSelect:place,
        provinceId:proval,
        cityId:cityval,
        visible:false
      })
      getProjectsByCityId(cityval,_this.getProjects)
    }
    getProjects(result){
        if(result.success){
          _this.setState({
            projectList:result.data
          })
        }
    }

    getComplexAddress(complexAddress,projectId,buildingId,roomId){
       // console.log(complexAddress,projectId,buildingId,roomId)
        _this.setState({
          complexAddress:complexAddress,
          projectId:projectId,
          buildingId:buildingId,
          roomId:roomId,
          display:false
        })


    }
    componentDidMount(){
      queryAddressList({},_this.addressResult)
      positionList({},_this.projectResult)
    }
    addressResult(result){
      if(result.success){
        _this.setState({
            addressList:result.data
        })
      }
    }
    projectResult(result){
      if(result.success){
        _this.setState({
            companyList:result.data
        })
      }
    }
    finshedChange(){

        if (!_state.complexAddress) {
            ToastAndroid.show('请选择单位/小区/地址', ToastAndroid.SHORT);
            return false;
        }else {
          _navigator.goBack();
          addUserPosition({projectId:_state.projectId,buildingId:_state.buildingId,roomId:_state.roomId,complexAddress:_state.complexAddress,isDefault:0},function(result){
              if(result.success){
                DeviceEventEmitter.emit("changeApplyRepairUI",
                    {
                      complexAddress:_state.placeSelect+_state.complexAddress,
                      projectId:_state.projectId,
                      buildingId:_state.buildingId,
                      roomId:_state.roomId
                    }
                )
              }
            })
          }

    }
    selectThis(d){
      _navigator.goBack();
      console.log(d);
      DeviceEventEmitter.emit("changeApplyRepairUI",
          {
            complexAddress:d.detailedAddress,
            projectId:d.projectId,
            buildingId:d.buildingId,
            roomId:d.roomId
          }
      )
    }

    render() {
      _this = this;
      _props=this.props;
      _state = _this.state;
      _navigator = _this.props.navigation;
      let NavigatorTopBarProps = {
        visible: true,
        title: "选择地址",
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
            onPress={()=>_this.finshedChange()}>
            <View style={{flex: 1,flexDirection: 'row-reverse',alignItems: 'center'}}>
              <Text style={{fontSize:17,color:'#303030',marginRight:15}}>使用</Text>
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
      };

      let CompanyModalProps={
        visible:_state.display,
        closeModal:function(){
          _this.closeCompanyModal()
        },
        getPalceSelect:function(place,proval,cityval,counval){
          _this.getComplexAddress(place,proval,cityval,counval)
        },
        projectList:_state.projectList,
        provinceId:_state.projectId,
        cityId:_state.buildingId,
        countyId:_state.roomId
      }


      return (
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
              <ScrollView>
                  <View style={[styles.list_b,{marginTop:10}]}>
                    <View style={{width:width-30,height:100*width/750,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                      <Text style={styles.list_font}>省/市</Text>
                      <TouchableOpacity style={{height:50,paddingLeft:12,flex:1,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}} onPress={()=>_this.getModal()}>
                        <View style={{alignItems:"flex-end",justifyContent:"center",paddingRight:5,flex:1}}>
                          <Text style={[styles.text]} numberOfLines={1}>{_state.placeSelect}</Text>
                        </View>
                        <Image source={require('../../images/icon_c.png')} style={{height:15,width:15}}/>
                      </TouchableOpacity>
                    </View>
                    <View style={{width:width-30,height:100*width/750,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                        <Text style={styles.list_font}>小区/门牌号</Text>
                        <TouchableOpacity style={{height:50,paddingLeft:12,flex:1,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}} onPress={()=>_this.getCompanyModal()}>
                          <View style={{alignItems:"flex-end",paddingRight:10,justifyContent:"center",flex:1}}>
                            <Text style={styles.text} numberOfLines={1}>{_state.complexAddress}</Text>
                          </View>
                          <Image source={require('../../images/icon_c.png')} style={{height:15,width:15}}/>
                        </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{height:width*76/750,paddingLeft:15,width:width,justifyContent:"center"}}>
                     <Text style={{fontSize:15,color:color.font2C,marginTop:2}} numberOfLines={1}>所在小区/单位</Text>
                  </View>
                  {_state.companyList.length?_state.companyList.map((d,index)=>(
                    <TouchableOpacity key={index} style={styles.list_b} onPress={()=>_this.selectThis(d)}>
                      <View style={index==0?styles.list_address_a:styles.list_address}>
                          <Text style={styles.text} numberOfLines={2}>{d.detailedAddress}</Text>
                      </View>
                    </TouchableOpacity>
                  ))
                  :
                  <View style={styles.list_no}>
                      <Text style={styles.text} numberOfLines={2}>暂无地址</Text>
                  </View>
                }
                  <View style={{height:width*76/750,paddingLeft:15,width:width,justifyContent:"center"}}>
                     <Text style={{fontSize:15,color:color.font2C,marginTop:2}} numberOfLines={1}>我的地址</Text>
                  </View>

                  {_state.addressList.length?_state.addressList.map((d,index)=>(
                    <View key={index} style={styles.list_b}>
                      <View style={index==0?styles.list_address_a:styles.list_address}>
                          <Text style={styles.text} numberOfLines={2}>{d.address}</Text>
                      </View>
                    </View>
                  ))
                  :
                  <View style={styles.list_no}>
                      <Text style={styles.text} numberOfLines={2}>暂无地址</Text>
                  </View>}


              <AddressModal {...AddressModalProps}/>
              <CompanyModal {...CompanyModalProps}/>
              </ScrollView>
          </View>
      );
    }
  };
