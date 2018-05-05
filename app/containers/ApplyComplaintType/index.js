'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, DeviceEventEmitter,ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import Dimensions from 'Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
var { width, height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
import {getDicValue} from '../../services/maintenanceTeam'
var _navigator,_this,_state,_props;

var list=[
  {title:"费用问题"},
  {title:"废物不满意"},
  {title:"丢了东西"},
  {title:"其他"},

]
export default class ApplyComplaintType extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list:[],
      isChoose:undefined,
      type:{},
      COMPLAINT:"COMPLAINT"
    }
  }
  componentDidMount(){
       getDicValue({dicKey:"COMPLAINT"},_this.getDicValueResult)
  }
  getDicValueResult(response){
    if (response.success) {
      _this.setState({
        list:response.data
      })
    }
  }
  onOk(){
    if (_state.valueCode) {
      _navigator.goBack();
      DeviceEventEmitter.emit("ApplyRepairType",{valueCode:_state.valueCode,typeName:_state.typeName})
    }else {
      ToastAndroid.show("请选择投诉类型", ToastAndroid.SHORT);
      return false;
    }
  }
  render() {
    _this = this;
    _state= this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "投诉类型",
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
          onPress={()=>_this.onOk()}>
          <View style={{flex: 1,flexDirection: 'row-reverse',alignItems: 'center'}}>
            <Text style={{fontSize:17,color:'#5986ff', marginRight: 15}}>确定</Text>
          </View>
        </TouchableOpacity>
      ),
    }

    return (
        <View style={styles.main}>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            <View style={styles.list}>
                {_this.state.list.map((d,index)=>(
                  _state.isChoose==index?
                  <LinearGradient key={index} colors={['#5460ff','#5c99ff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.button_a}>
                      <Text style={styles.list_font}>{d.name}</Text>
                  </LinearGradient>
                  :
                  <TouchableOpacity key={index} style={styles.button} onPress={()=>{_this.setState({isChoose:index,typeName:d.name,valueCode:d.valueCode})}}>
                     <Text style={styles.list_font_a}>{d.name}</Text>
                  </TouchableOpacity>
                ))}
            </View>
        </View>
    );
  }

};
