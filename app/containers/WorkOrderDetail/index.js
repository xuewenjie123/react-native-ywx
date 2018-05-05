'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import WorkConfirm from '../../components/common/WorkOrderConfirm';
import WorkPay from '../../components/common/WorkOrderPay';
import WorkEvaluate from '../../components/common/WorkOrderEvaluate';
import ShowImg from '../../components/common/ShowImg';
import NavWait from '../../components/common/NavWait';
import {workorderdetail} from '../../services/myDetail';
var _navigator,_this,_state,_props;
import JPushModule from 'jpush-react-native'

var suggesimg = [require('../../images/bootImg1.png'),require('../../images/bootimg2.png'),require('../../images/bootimg3.png')]

export default class WorkOrderDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      orderState:"4",
      score:2.5,
      imglist:[],
      types:'ping',
      confirmvis:false,
      payvis:false,
      evavis:false,
      bottomdata:'',
      evaimglist:'',
      suggesimgvis:false,
      suggestimglist:[],
      code:this.props.navigation.state.params.code,
    }
  }
  componentWillUnmount() {

           JPushModule.removeReceiveCustomMsgListener();

          JPushModule.removeReceiveNotificationListener();

    //       BackAndroid.removeEventListener('hardwareBackPress');

    //       NativeAppEventEmitter.removeAllListeners();

    //      DeviceEventEmitter.removeAllListeners();

      }
  componentDidMount(){
        workorderdetail({workOrder:_this.state.code},_this.getWorkOrder,_this.getWorkOrderFail)

        _this._getimglist();
        JPushModule.notifyJSDidLoad((resultCode) => {
                console.log("这是初始"+resultCode)
            });

        JPushModule.addReceiveCustomMsgListener(
            function(msg){
                console.log("自定义")
                console.log(msg)
                console.log("自定义")
            }
        );
        
        JPushModule.addReceiveNotificationListener(
            function(msg){
                console.log("默认")
                console.log(msg)
                console.log("默认")
             }
          )
            //addReceiveOpenNotificationListener
             //点击通知进入应用的主页，相当于跳转到制定的页面
         JPushModule.addReceiveOpenNotificationListener(
            function(msg){
                console.log("跳转")
                var message = JSON.parse(msg.extras)
                _navigator.navigate(message.nav)
           }
     )
      // InteractionManager.runAfterInteractions(() => {
      // });
  }
  getWorkOrder(result){
    if(result.success){
      data:result.data
    }
  }
  getWorkOrderFail(){
    _this.setState({
      imglist:_this._getimglist(_this.state.score),
      suggestimglist:suggesimg,
      loading:false,
    })
  }
  changetype(text){
    if(text=='ping'){
      _this.setState({
        types:text,
        confirmvis:!_this.state.confirmvis,
        evavis:!_this.state.evavis
      })
    }else{
      _this.setState({
        types:text,
      })
    }
  }
  closeModal(){
    _this.setState({
      payvis:false,
      confirmvis:false,
      evavis:false,
      suggesimgvis:false,
    })
  }
  toPayModal(){
    _this.setState({
      payvis:true,
    })
  }
  _getimglist(data){
    var quan = Math.floor(data);
    var ban =  data-quan
    if (ban>0) {
      var kong = 4-quan
    }else {
      var kong = 5-quan
    }
    var imglist = [];
    if (quan>0) {
      for(var i = 0; i < quan; i++){
        imglist.push(<Image key={i} style={styles.repair_b} source={require('../../images/repair_d.png')}></Image>)
      }
    }
    if (ban>0) {
      imglist.push(<Image key={5} style={styles.repair_b} source={require('../../images/repair_c.png')}></Image>)
    }
    if (kong>0) {
      for(var y = 0; y < kong; y++){
        imglist.push(<Image key={6+y} style={styles.repair_b} source={require('../../images/repair_b.png')}></Image>)
      }
    }
    return imglist
  }
  _evaimglist(data){
    let quans = Math.floor(data);
    let imglists = [];
    let kongs = 5-quans;
    if (quans>0) {
      for(var i = 0; i < quans; i++){
        imglists.push(<Image key={i} style={styles.repair_n} source={require('../../images/repair_d.png')}></Image>)
      }
    }
    if (kongs>0) {
      for(var y = 0; y < kongs; y++){
        imglists.push(<Image key={6+y} style={styles.repair_n} source={require('../../images/repair_b.png')}></Image>)
      }
    }
    return imglists
  }
  evasuccess(datas){
    _this.setState({
      evavis:false,
      orderState:"5",
      bottomdata:datas,
      evaimglist:_this._evaimglist(datas.score),
    })
  }

  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "工单详情",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      )
    }
    let ShowImgProps={
      closeModal:function(){
        _this.closeModal()
      },
       visible:_state.suggesimgvis,
       title:"报修图片",
       imgList:_state.suggestimglist
    }
    return (
      _this.state.loading?<NavWait/>:
      <View style={{flex:1}}>
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
              <ScrollView>
              {_this.state.orderState==1?
                <TouchableOpacity onPress={()=>_navigator.navigate('WorkOrderState')}>
                <View style={styles.list_up}>
                    <Text style={styles.list_font}>工单状态：您的工单审核已通过，正在派单</Text>
                    <Image style={styles.icon_b} source={require('../../images/icon_b.png')}></Image>
                </View>
                </TouchableOpacity>
                :_this.state.orderState==2?
                <View>
                     <View style={styles.list_track}>
                         <Text style={styles.list_font}>地图</Text>
                     </View>
                     <TouchableOpacity onPress={()=>_navigator.navigate('WorkOrderState')}>
                     <View style={styles.list_up_a}>
                         <Text style={styles.list_font}>工单状态：彭于晏已接单，正在火速前来</Text>
                         <Text style={styles.list_font}><Text style={styles.list_font_no}>工单状态：</Text>
                         预计到达时间：10:00</Text>
                         <Image style={styles.icon_b} source={require('../../images/icon_b.png')}></Image>
                     </View>
                     </TouchableOpacity>
               </View>
               :_this.state.orderState==3?
               <View>
                    <View style={styles.list_track}>
                        <Text style={styles.list_font}>地图</Text>
                    </View>
                    <TouchableOpacity onPress={()=>_navigator.navigate('WorkOrderState')}>
                    <View style={styles.list_up_a}>
                        <Text style={styles.list_font}>工单状态：彭于晏已到达正在为您解决问题</Text>
                        <Image style={styles.icon_b} source={require('../../images/icon_b.png')}></Image>
                    </View>
                    </TouchableOpacity>
              </View>
               :_this.state.orderState>=4?
               <TouchableOpacity onPress={()=>_navigator.navigate('WorkOrderState')}>
                   <View style={styles.list_up}>
                       <Text style={styles.list_font}>工单状态：已确认，工单结束</Text>
                       <Image style={styles.icon_b} source={require('../../images/icon_b.png')}></Image>
                   </View>
                </TouchableOpacity>
               :null
              }


                  <View style={styles.list_middle}>
                      <View style={styles.list_middle_a}>
                          <Text style={styles.list_font_a}>工  单  号：</Text>
                          <Text style={styles.list_font_b}>GD820022</Text>
                      </View>
                      <View style={styles.list_middle_b}>
                          <View style={styles.list_middle_type}>
                              <Text style={styles.list_font_a}>问题描述：</Text>
                              <Text style={styles.list_font_b}>水龙头漏水，请尽快解决一下</Text>
                          </View>
                          <TouchableOpacity onPress={()=>_this.setState({suggesimgvis:true})}>
                            <ShowImg {...ShowImgProps}/>
                            <View style={styles.list_middle_t}>
                              <Text style={styles.list_font}>报修图片</Text>
                            </View>
                          </TouchableOpacity>
                      </View>
                      <View style={styles.list_middle_c}>
                          <View style={styles.list_middle_type}>
                              <Text style={styles.list_font_a}>地        点：</Text>
                              <Text style={styles.list_font_b}>风景小区5号楼1202</Text>
                          </View>
                          <View style={styles.list_middle_type}>
                              <Text style={styles.list_font_a}>报修时间：</Text>
                              <Text style={styles.list_font_b}>2016年6月12日  09:00</Text>
                          </View>
                      </View>
                  </View>
                  {_this.state.orderState==3?
                  <View style={styles.list_cost_box}>
                      <View style={styles.list_cost_a}>
                          <View style={styles.list_middle_type}>
                              <Text style={styles.list_font_a}>预计工时：</Text>
                              <Text style={styles.list_font_b}>一小时</Text>
                          </View>
                          <View style={styles.list_middle_type}>
                              <Text style={styles.list_font_a}>预估费用：</Text>
                              <Text style={styles.list_font_d}>￥20</Text>
                          </View>
                      </View>
                      <View style={styles.list_cost_b}>
                          <Text style={styles.list_font_i}>事项一（电工）：</Text>
                          <View style={[styles.list_cost_d,{marginLeft:50}]}>
                              <View style={styles.list_cost_g}>
                                  <Text style={styles.list_font_h}>材料预估：</Text>
                                  <View style={styles.list_cost_d}>
                                      <Text style={styles.list_font_h}>电工-灯泡 2个 ￥10</Text>
                                      <Text style={styles.list_font_h}>电工-电线 1米 ￥10</Text>
                                  </View>
                              </View>
                              <View style={styles.list_cost_g}>
                                  <Text style={styles.list_font_h}>人工预估：</Text>
                                  <Text style={styles.list_font_h}>￥0</Text>
                              </View>
                          </View>
                      </View>
                      <View style={styles.list_cost_b}>
                          <Text style={styles.list_font_i}>事项一（电工）：</Text>
                          <View style={[styles.list_cost_d,{marginLeft:50}]}>
                              <View style={styles.list_cost_g}>
                                  <Text style={styles.list_font_h}>材料预估：</Text>
                                  <View style={styles.list_cost_d}>
                                      <Text style={styles.list_font_h}>电工-灯泡 2个 ￥10</Text>
                                      <Text style={styles.list_font_h}>电工-电线 1米 ￥10</Text>
                                  </View>
                              </View>
                              <View style={styles.list_cost_g}>
                                  <Text style={styles.list_font_h}>人工预估：</Text>
                                  <Text style={styles.list_font_h}>￥0</Text>
                              </View>
                          </View>
                      </View>
                  </View>:null
                }
                  {_this.state.orderState>=4?
                  <View style={styles.list_cost_box}>
                      <View style={styles.list_cost_f}>
                          <View style={styles.list_cost_e}>
                              <Text style={styles.list_font_a}>工           时：</Text>
                              <Text style={styles.list_font_b}>一小时</Text>
                          </View>
                      </View>
                      <View style={styles.list_line}></View>
                      <View style={styles.list_cost_bb}>
                          <Text style={styles.list_font_i}>材 料 明 细：</Text>
                          <View style={styles.list_cost_dd}>
                              <Text style={styles.list_font_h}>电工-灯泡 2个 ￥10</Text>
                              <Text style={styles.list_font_h}>电工-电线 1米 ￥10</Text>
                          </View>
                      </View>
                      <View style={styles.list_cost_f}>
                          <View style={styles.list_cost_e}>
                              <Text style={styles.list_font_a}>材    料    费：</Text>
                              <Text style={styles.list_font_b}>￥20</Text>
                          </View>
                          <View style={styles.list_cost_e}>
                              <Text style={styles.list_font_a}>人    工    费：</Text>
                              <Text style={styles.list_font_b}>￥0</Text>
                          </View>
                          <View style={styles.list_cost_e}>
                              <Text style={styles.list_font_a}>其 他 费 用 ：</Text>
                              <Text style={styles.list_font_b}>￥0</Text>
                          </View>
                      </View>
                      <View style={styles.list_line}></View>
                      <View style={styles.list_cost_f}>
                          <View style={styles.list_cost_e}>
                              <Text style={styles.list_font_a}>费 用 总 额 ：</Text>
                              <Text style={styles.list_font_b}>￥20</Text>
                          </View>
                          <View style={styles.list_cost_e}>
                              <Text style={styles.list_font_d}>结 算 总 额：</Text>
                              <Text style={styles.list_font_d}>￥0 (服务费内结算)</Text>
                          </View>
                      </View>
                  </View>:null
                }

                  {_this.state.orderState==1?
                    <View style={styles.list_down}>
                        <Text style={styles.list_font_a}></Text>
                        <TouchableOpacity>
                          <View style={styles.list_box}>
                            <Text style={styles.list_font_c}>取消订单</Text>
                          </View>
                        </TouchableOpacity>
                    </View>
                    :<View style={styles.list_down_a}>
                        <View style={styles.list_box_up}>
                            <LinearGradient colors={['#5460ff','#5c99ff' ]} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.list_headImg}>
                                <Image style={styles.repair_f} source={require('../../images/repair_f.png')}></Image>
                            </LinearGradient>
                            <View style={styles.list_right}>
                                <View style={styles.list_right_up}>
                                   <Text style={styles.list_font_a}>彭于晏</Text>
                                   <Text style={styles.list_font_b}>30级</Text>
                                </View>
                                <View style={styles.list_right_middle}>
                                   <Text style={styles.list_font_d}>￥229</Text>
                                </View>
                                <View style={styles.list_right_down}>
                                    <View style={styles.list_right_a}>
                                      {_this.state.imglist.map((d,index)=>(
                                        <View style={styles.require_c} key={index}>
                                          {d}
                                        </View>
                                      ))}
                                      <Text style={styles.list_font_e}>{_this.state.score}</Text>
                                    </View>
                                    <View style={styles.list_right_b}>
                                      <Text style={styles.list_font_f}>月成交量75单</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {_this.state.orderState==2?
                          <View style={styles.list_box_down}>
                              <TouchableOpacity onPress={()=>this.changetype("ping")}>
                                <View style={_this.state.types=='ping'?styles.list_box_a_a:styles.list_box}>
                                  <Text style={_this.state.types=='ping'?styles.list_font_g:styles.list_font_c}>取消工单</Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={()=>this.changetype("tou")}>
                                <View style={_this.state.types=='tou'?styles.list_box_a:styles.list_box}>
                                   <Text style={_this.state.types=='tou'?styles.list_font_g:styles.list_font_c}>联系ta</Text>
                                </View>
                              </TouchableOpacity>
                          </View>
                          :_this.state.orderState==3?
                            <View style={styles.list_box_down}>
                              <WorkConfirm _navigator={_navigator} closeModal={this.closeModal.bind(this)} toPayModal={this.toPayModal.bind(this)} visible={_this.state.confirmvis}/>
                              <WorkPay _navigator={_navigator} closeModal={this.closeModal.bind(this)} visible={_this.state.payvis}/>
                              <TouchableOpacity onPress={()=>this.changetype("ping")}>
                                <View style={_this.state.types=='ping'?styles.list_box_a_a:styles.list_box}>
                                    <Text style={_this.state.types=='ping'?styles.list_font_g:styles.list_font_c}>评价</Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={()=>this.changetype("tou")}>
                                <View style={_this.state.types=='tou'?styles.list_box_a:styles.list_box}>
                                    <Text style={_this.state.types=='tou'?styles.list_font_g:styles.list_font_c}>投诉</Text>
                                </View>
                              </TouchableOpacity>
                            </View>
                          :_this.state.orderState==4?
                          <View style={styles.list_box_down}>
                              <WorkEvaluate evasuccess={this.evasuccess.bind(this)} closeModal={this.closeModal.bind(this)} visible={_this.state.evavis}/>
                              <TouchableOpacity onPress={()=>this.changetype("ping")}>
                                <View style={_this.state.types=='ping'?styles.list_box_a_a:styles.list_box}>
                                    <Text style={_this.state.types=='ping'?styles.list_font_g:styles.list_font_c}>评价</Text>
                                </View>
                              </TouchableOpacity>
                              <TouchableOpacity onPress={()=>this.changetype("tou")}>
                                <View style={_this.state.types=='tou'?styles.list_box_a:styles.list_box}>
                                  <Text style={_this.state.types=='tou'?styles.list_font_g:styles.list_font_c}>投诉</Text>
                                </View>
                              </TouchableOpacity>
                          </View>
                         :<View style={styles.list_down_c}>
                            <Text style={styles.list_font_a}>{_this.state.bottomdata.title}</Text>
                            <View style={styles.list_down_b}>
                              {_this.state.evaimglist.map((d,index)=>(
                                <View key={index}>
                                  {d}
                                </View>
                              ))}
                            </View>
                            <Text style={styles.list_font_b}>感谢评价，您的满意是我们前进的最大动力</Text>
                            <View style={styles.list_box_up}>
                                {_this.state.bottomdata.tags.map((d,index)=>(
                                  <LinearGradient key={index}  start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}}
                                  colors={['#5460ff','#5c99ff' ]}
                                  style={styles.list_button}>
                                    <Text style={styles.list_button_font}>{d}</Text>
                                  </LinearGradient>
                                ))}
                            </View>
                          </View>
                        }

                    </View>
                  }

              </ScrollView>
          </View>

      </View>
    );
  }

};
