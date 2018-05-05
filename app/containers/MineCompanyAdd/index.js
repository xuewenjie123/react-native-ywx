'use strict';
import React, { Component, } from 'react';
import {View, Text,Image, ScrollView,TextInput, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import AddressModal from '../../components/cityIndexListView/companyAddress'
import CompanyModal from '../../components/cityIndexListView/CompanyModal';
import { addUserPosition,getProjectsByCityId,getBuildingsByProjectId,getRoomsByBuildingId } from '../../services/MyCompany';
import {NavigationActions} from '../../utils';
import {setStorage,getStorage} from '../../constant/storage';
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
        placeSelect:'',
        visible:false,
        display:false,
        palceSelect:'',
        projectId:"",
        buildingId:"",
        roomId:"",
        complexAddress:"",
        projectList:[]
      }
    }
    isDefault(){
      _this.setState({isDefault:!_state.isDefault})
    }
    componentDidMount(){

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
      console.log(complexAddress,projectId,buildingId,roomId)
        _this.setState({
          complexAddress:complexAddress,
          projectId:projectId,
          buildingId:buildingId,
          roomId:roomId,
          display:false
        })
    }


    finshedChange(){
      var resultFu = function(response){

          let resetAction = NavigationActions.reset({
            index: 1,
            actions: [
              NavigationActions.navigate({routeName: 'Mine'}),
              NavigationActions.navigate({routeName: 'MineCompany'}),
            ]
          })

          if(response.success){
            getStorage("login",(error,data)=>{
                if(data){
                    data.partAcode=response.data;
                    setStorage("login",data,(error)=>{
                      _navigator.dispatch(resetAction)
                    })
            }
          })
          }else{
              ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
          }
      };

        if (!_state.complexAddress) {
            ToastAndroid.show('请选择单位/小区', ToastAndroid.SHORT);
            return false;
        }else {
          addUserPosition({projectId:_state.projectId,
                          buildingId:_state.buildingId,
                          roomId:_state.roomId,
                          complexAddress:_state.placeSelect+_state.complexAddress,
                          isDefault:_state.isDefault},resultFu)
          }

    }

    render() {
      _this = this;
      _props=this.props;
      _state = _this.state;
      _navigator = _this.props.navigation;
      let NavigatorTopBarProps = {
        visible: true,
        title: "添加单位小区",
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
                  <View style={styles.list_b}>
                      <Text style={styles.list_font}>地址</Text>
                      <TouchableOpacity style={{height:50,paddingLeft:12,flex:1,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}} onPress={()=>_this.getModal()}>
                        <View style={{alignItems:"flex-end",justifyContent:"center",paddingRight:5,flex:1}}>
                          <Text style={[styles.text]} numberOfLines={1}>{_state.placeSelect}</Text>
                        </View>
                        <Image source={require('../../images/icon_c.png')} style={{height:15,width:15}}/>
                      </TouchableOpacity>
                  </View>

                  <View style={styles.list_b}>
                      <Text style={styles.list_font}>所在单位/小区</Text>
                      <TouchableOpacity style={{height:50,paddingLeft:12,flex:1,justifyContent:"space-between",flexDirection:"row",alignItems:"center"}} onPress={()=>_this.getCompanyModal()}>
                        <View style={{alignItems:"flex-end",paddingRight:10,justifyContent:"center",flex:1}}>
                          <Text style={styles.text} numberOfLines={1}>{_state.complexAddress}</Text>
                        </View>
                        <Image source={require('../../images/icon_c.png')} style={{height:15,width:15}}/>
                      </TouchableOpacity>
                  </View>


              <View style={styles.list_box_a}>
                  <Text style={styles.list_font}>设为默认</Text>
                  <TouchableOpacity
                    onPress={()=>_this.isDefault()} style={{paddingLeft:20,paddingVertical:20}}>
                    {_state.isDefault?
                    <Image style={{width: 40, height: 20,}} source={require('../../images/address_g.png')}></Image>
                    :
                    <Image style={{width: 40, height: 20,}} source={require('../../images/address_f.png')}></Image>}
                  </TouchableOpacity>
              </View>
              <AddressModal {...AddressModalProps}/>
              <CompanyModal {...CompanyModalProps}/>
          </View>
      );
    }
  };
