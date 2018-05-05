'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import Dimensions from 'Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
var { width, height } = Dimensions.get('window');
import LinearGradient from 'react-native-linear-gradient';
var _navigator,_this,_state,_props;

export default class WorkOrderDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderState:"3",
      score:3.5,
      imglist:[],
    }
  }
  componentDidMount(){
        _this._getimglist();

      // InteractionManager.runAfterInteractions(() => {
      // });
  }
  _getimglist(){
    var quan = Math.floor(_this.state.score);
    var ban =  _this.state.score-quan
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
    if (ban>1) {
      imglist.push(<Image key={5} style={styles.repair_b} source={require('../../images/repair_c.png')}></Image>)
    }
    if (kong>0) {
      for(var y = 0; y < kong; y++){
        imglist.push(<Image key={6+y} style={styles.repair_b} source={require('../../images/repair_b.png')}></Image>)
      }
    }
    _this.setState({imglist:imglist})
    return imglist

  }
  render() {
    _this = this;
    _navigator = _this.props.navigator;
    let NavigatorTopBarProps = {
      visible: true,
      title: "工单详情1",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.pop()}}>
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
      <View style={{flex:1}}>
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
              <ScrollView>
              {_this.state.orderState==1?
                <View style={styles.list_up}>
                    <Text style={styles.list_font}>工单状态：您的工单审核已通过，正在派单</Text>
                    <Image style={styles.icon_b} source={require('../../images/icon_b.png')}></Image>
                </View>
                :_this.state.orderState==2?
                <View>
                     <View style={styles.list_track}>
                         <Text style={styles.list_font}>地图</Text>
                     </View>
                     <View style={styles.list_up_a}>
                         <Text style={styles.list_font}>工单状态：彭于晏已接单，正在火速前来</Text>
                         <Text style={styles.list_font}><Text style={styles.list_font_no}>工单状态：</Text>
                         预计到达时间：10:00</Text>
                         <Image style={styles.icon_b} source={require('../../images/icon_b.png')}></Image>
                     </View>
               </View>
               :_this.state.orderState==3?
               <View>
                    <View style={styles.list_track}>
                        <Text style={styles.list_font}>地图</Text>
                    </View>
                    <View style={styles.list_up_a}>
                        <Text style={styles.list_font}>工单状态：彭于晏已到达正在为您解决问题</Text>
                        <Image style={styles.icon_b} source={require('../../images/icon_b.png')}></Image>
                    </View>
              </View>
               :_this.state.orderState==4?
                   <View style={styles.list_up}>
                       <Text style={styles.list_font}>工单状态：已确认，工单结束</Text>
                       <Image style={styles.icon_b} source={require('../../images/icon_b.png')}></Image>
                   </View>
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
                          <View style={styles.list_middle_t}>
                              <Text style={styles.list_font}>报修图片</Text>
                          </View>
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


                  </View>
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

                  </View>

                  {_this.state.orderState==3?
                    <View style={styles.list_down}>
                        <Text style={styles.list_font_a}></Text>
                        <View style={styles.list_box}>
                            <Text style={styles.list_font_c}>取消订单</Text>
                        </View>
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
                                      <Text style={styles.list_font_e}>5.0</Text>
                                    </View>
                                    <View style={styles.list_right_b}>
                                      <Text style={styles.list_font_f}>月成交量75单</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {_this.state.orderState==4?
                          <View style={styles.list_box_down}>
                              <View style={styles.list_box}>
                                  <Text style={styles.list_font_c}>取消订单</Text>
                              </View>
                              <View style={styles.list_box_a}>
                                  <Text style={styles.list_font_g}>联系Ta</Text>
                              </View>
                          </View>
                          :_this.state.orderState==3?
                            <View style={styles.list_box_down}>
                                <View style={styles.list_box}>
                                    <Text style={styles.list_font_c}>评价</Text>
                                </View>
                                <View style={styles.list_box_a}>
                                    <Text style={styles.list_font_g}>投诉</Text>
                                </View>
                            </View>
                          :
                          <View style={styles.list_down_c}>
                            <Text style={styles.list_font_a}>“完美无瑕”</Text>
                            <View style={styles.list_down_b}>
                              <Image  style={styles.repair_n} source={require('../../images/repair_l.png')}></Image>
                              <Image  style={styles.repair_n} source={require('../../images/repair_l.png')}></Image>
                              <Image  style={styles.repair_n} source={require('../../images/repair_l.png')}></Image>
                              <Image  style={styles.repair_n} source={require('../../images/repair_l.png')}></Image>
                              <Image  style={styles.repair_n} source={require('../../images/repair_l.png')}></Image>
                            </View>
                            <Text style={styles.list_font_b}>感谢评价，您的满意是我们前进的最大动力</Text>
                            <View style={styles.list_box_up}>
                                <LinearGradient  start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}}
                                colors={['#5460ff','#5c99ff' ]}
                                style={styles.list_button}>
                                    <Text style={styles.list_button_font}>中国好维修工</Text>
                                </LinearGradient>
                                <LinearGradient  start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}}
                                colors={['#5460ff','#5c99ff' ]}
                                style={styles.list_button}>
                                    <Text style={styles.list_button_font}>维修大师</Text>
                                </LinearGradient>
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
