'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import GradientBox from "../../components/common/GradientBox";
import {commoditydetail} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';

var _navigator,_this,_state,_props;

let list = {
  name:'美国西北车厘子',
  code:'465564',
  maozhong:0.99,
  address:'美国',
  zhongliang:'1kg-2kg',
  feilei:'其他',
  jifen:10000,
  pictureUrl:require('../../images/matter_l.png'),
}

export default class CommodityDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:'',
      loading:true,
    }
  }
  componentDidMount(){
    commoditydetail({page:1},_this.commodityDetail,_this.commodityDetailFail)
  }
  commodityDetail(result){
    if(result.success){
      _this.setState({
        data:result.data,
        loading:false,
      })
    }
  }
  commodityDetailFail(){
    // ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
    _this.setState({
      data:list,
      loading:false,
    })
  }
  render() {
    _this = this;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "商品详情",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
    }

    return (
      <View style={{flex:1}}>
      <NavigatorTopBar {...NavigatorTopBarProps}/>
      {_this.state.loading?<NavWait/>:
          <View style={styles.main}>

              <View style={styles.up}>
                <Image style={{height:160,width:width}} source={_this.state.data.pictureUrl}></Image>
              </View>
              <View style={styles.middle}>
                 <Text style={styles.middle_font}>商品简介</Text>
                 <View style={styles.middle_list}>
                     <View style={styles.middle_a}>
                        <Text style={styles.middle_font_a}>商品名称：</Text>
                        <Text numberOfLines={1} style={styles.middle_font_a}>{_this.state.data.name}</Text>
                     </View>
                     <View style={styles.middle_b}>
                        <Text style={styles.middle_font_a}>商品编号：</Text>
                        <Text numberOfLines={1} style={styles.middle_font_a}>{_this.state.data.code}</Text>
                     </View>
                 </View>
                 <View style={styles.middle_list}>
                     <View style={styles.middle_a}>
                        <Text style={styles.middle_font_a}>商品毛重：</Text>
                        <Text numberOfLines={1} style={styles.middle_font_a}>{_this.state.data.maozhong}kg </Text>
                     </View>
                     <View style={styles.middle_b}>
                        <Text style={styles.middle_font_a}>商品产地：</Text>
                        <Text numberOfLines={1} style={styles.middle_font_a}>{_this.state.data.address}</Text>
                     </View>
                 </View>
                 <View style={styles.middle_list}>
                     <View style={styles.middle_a}>
                        <Text style={styles.middle_font_b}>重量</Text>
                        <Text style={styles.middle_font_a}>重量：</Text>
                        <Text numberOfLines={1} style={styles.middle_font_a}>{_this.state.data.zhongliang}</Text>
                     </View>
                     <View style={styles.middle_b}>
                        <Text style={styles.middle_font_b}>分类</Text>
                        <Text style={styles.middle_font_a}>分类：</Text>
                        <Text numberOfLines={1} style={styles.middle_font_a}>{_this.state.data.feilei}</Text>
                     </View>
                 </View>

              </View>
              <View style={styles.down}>
                 <Text style={styles.down_font}>温馨提示：不支持7天无理由退货</Text>
              </View>
              <View style={styles.button}>
                 <View style={styles.button_a}>
                     <Text style={styles.button_font_a}>单价：</Text>
                     <Text style={styles.button_font}>{_this.state.data.jifen}积分</Text>
                 </View>
                 <TouchableOpacity onPress={()=>_navigator.navigate('ExchangeConfirmation')} style={{flex:2}}>
                      <GradientBox title={"立即兑换"} styles={styles.button_b}/>
                 </TouchableOpacity>
              </View>

          </View>
        }
      </View>
    );
  }

};
