'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import LinearGradient from 'react-native-linear-gradient';
import { detail} from '../../services/myOrder';
var _navigator,_this,_state,_props;


export default class MyOrderDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id:this.props.navigation.state.params.id,
      status:this.props.navigation.state.params.status,
      list:[],
    }
  }

  componentDidMount(){
      InteractionManager.runAfterInteractions(() => {
        detail({id:this.props.navigation.state.params.id,},_this.detailResult)
      });
  }
  detailResult(result){
    if(result.success){
      _this.setState({
            list:result.data,
      });
    }else {
      ToastAndroid.show(result.errorMsg,ToastAndroid.SHORT)
    }
  }



  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "订单详情",
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
            <ScrollView>
                {_state.status=="1"?null:
                <LinearGradient colors={['#5460ff','#5c99ff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.list_up_box}>
                    <Image source={require('../../images/order_a.png')} style={styles.order_a} />
                    <Text style={styles.list_font}>兑换成功</Text>
                </LinearGradient>
                }
                <View style={styles.list_middle_box}>
                {_state.status=="1"?
                    <View style={styles.list_middle}>
                        <Text style={[styles.list_font_a,{marginBottom:5}]}>订单待支付</Text>
                        <Text style={styles.list_font_a}>2017-08-01 12:20:00</Text>
                    </View>
                    :
                    <TouchableOpacity style={styles.list_middle} onPress={()=>{_navigator.navigate("MyOrderLogisticsDetails",{id:_state.id})}}>
                        <Text style={[styles.list_font_a,{marginBottom:5}]}>订单已签收</Text>
                        <Text style={styles.list_font_a}>2017-08-01 12:20:00</Text>
                        <Image style={styles.icon_b} source={require('../../images/icon_b.png')}></Image>
                    </TouchableOpacity>
                }
                    <View style={styles.list_middle_a}>
                        <Text style={[styles.list_font_a,{marginBottom:5}]}>收货人：{_state.list.consignee}</Text>
                        <Text style={[styles.list_font_a,{marginBottom:5}]}>联系方式：{_state.list.phone}</Text>
                        <Text style={styles.list_font_a}>收货地址：{_state.list.address} </Text>
                    </View>
                    <View style={styles.list_middle_b}>
                        <Text style={[styles.list_font_a,{marginBottom:5}]}>留言：{_state.list.leaveComments}</Text>
                    </View>
                </View>
                <View style={styles.list_down}>
                    <View style={styles.list_text}>
                       <Text style={[styles.list_font_a,{marginTop:15}]}>订单编号：{_state.list.orderCode}</Text>
                       <Text style={[styles.list_font_a,{marginTop:15}]}>{_state.list.createTime}</Text>
                    </View>
                    <View style={styles.list_up}>
                        <View style={{height:60,width:60}}>
                           <Image source={{uri:_state.list.filePath}} style={{height:60,width:60}} />
                        </View>
                        <View style={styles.list_up_a}>
                            <View style={styles.list_up_b}>
                                <View style={styles.list_up_c}>
                                  <Text numberOfLines ={2} style={styles.list_font_b}>{_state.list.goodsName}</Text>
                                </View>
                                <Text style={styles.list_font_c}>{_state.list.status==1?"待支付"
                                                                  :_state.list.status==2?"待收货"
                                                                  :_state.list.status==3?"待评价"
                                                                  :"已完成"}</Text>
                            </View>
                            <View style={styles.list_up_b}>
                                <Text style={styles.list_font_c}>{_state.list.integralPrice}积分</Text>
                                <Text style={styles.list_font_a}>x{_state.list.number}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.list_text,{paddingTop:15}]}>
                       <Text style={styles.list_font_b}>金额：</Text>
                       <View style={{flex:1,height:56}}>
                           <View style={styles.list_text_a}>
                              <Text style={styles.list_font_a}>商品</Text>
                              <Text style={styles.list_font_a}>{_state.list.integralPrice*_state.list.number}积分</Text>
                           </View>
                           <View style={styles.list_text_a}>
                              <Text style={styles.list_font_a}>运费</Text>
                              <Text style={styles.list_font_a}>￥{_state.list.shipmentFee}</Text>
                           </View>
                       </View>
                    </View>
                    <View style={styles.list_all}>
                       <Text style={styles.list_font_a}>合计：<Text style={styles.list_font_g}>{_state.list.integralPrice*_state.list.number}积分</Text>（运费：￥{_state.list.shipmentFee}）</Text>
                    </View>
                </View>
                <View style={[styles.list_middle_box,{marginBottom:70,paddingBottom:15}]}>
                    <View style={[styles.list_text,{paddingBottom:15,paddingTop:15,borderBottomColor:'#dddddd',borderBottomWidth:1}]}>
                       <Text style={styles.list_font_d}>为你推荐</Text>
                    </View>
                    <View style={styles.list_info_box}>
                        <View style={styles.list_info}>
                           <Image source={require('../../images/repair_f.png')} style={styles.list_image} />
                           <View style={styles.list_image_a}>
                              <Text style={styles.list_font_j}>约车一次</Text>
                              <Text style={styles.list_font_g}>200积分</Text>
                           </View>
                        </View>
                        <View style={styles.list_info}>
                           <Image source={require('../../images/repair_f.png')} style={styles.list_image} />
                           <View style={styles.list_image_a}>
                              <Text style={styles.list_font_j}>星巴克圣代</Text>
                              <Text style={styles.list_font_g}>200积分</Text>
                           </View>
                        </View>
                        <View style={styles.list_info}>
                           <Image source={require('../../images/repair_f.png')} style={styles.list_image} />
                           <View style={styles.list_image_a}>
                              <Text style={styles.list_font_j}>约车一次</Text>
                              <Text style={styles.list_font_g}>200积分</Text>
                           </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <View style={styles.list_bottom}>
                <View style={styles.list_bottom_a}>
                   {_state.status=="1"?
                   <TouchableOpacity style={styles.list_button}>
                      <Text style={styles.list_font_a}>支付</Text>
                   </TouchableOpacity>
                   :_state.status=="4"?null
                   :<TouchableOpacity style={styles.list_button}>
                      <Text style={styles.list_font_a}>查看物流</Text>
                   </TouchableOpacity>
                 }
                    <TouchableOpacity style={styles.list_button_a}>
                       <Text style={styles.list_button_font}>{_state.status=="1"?"取消订单":
                                                              _state.status=="2"?"确认收货":
                                                              _state.status=="3"?"评价":"删除订单"
                                                             }</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    );
  }
};
