'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { integralList} from '../../services/myIntegral';

var _navigator,_this,_state,_props;


export default class MineIntegral extends Component {

  constructor(props) {
    super(props);
    this.state = {
        total:'',
    }
  }
  componentDidMount(){
    integralList({},_this.integralListResult)
  }
  integralListResult(response){
      if(response.success){
         _this.setState({
           total:response.data,
         })
      }else {
        ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
      }
  }

  backRouter(){
    _navigator.goBack()
  }

  render() {
    _this = this;
    _state= this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "我的积分",
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
          onPress={() => {}}>
        </TouchableOpacity>
      ),
    }

    return (
        <View style={styles.main}>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            <View style={styles.list_box}>
                <View style={styles.list_a}>
                    <Text style={styles.list_font}>我的积分</Text>
                    <Text style={styles.list_font_a}>{_state.total}</Text>
                </View>
                {_state.total=="0"?null:<View style={styles.list_line}></View>}
                {_state.total=="0"?null:
                <TouchableOpacity style={styles.list_a}  onPress={()=>_navigator.navigate("MineIntegralDetails")}>
                    <Text style={styles.list_font}>积分明细</Text>
                    <Image style={{width: 15, height: 15,}} source={require('../../images/icon_b.png')}></Image>
                </TouchableOpacity>
                }
            </View>
            <View style={styles.list_box_a}>
                <Text style={styles.list_font_b}>积分规则</Text>
            </View>
        </View>
    );
  }

};
