'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text,View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, AsyncStorage, BackAndroid, ToastAndroid } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator,_this,_state,_props;
import LinearGradient from 'react-native-linear-gradient';

class WorkOrderApplyModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderState:"3",
      score:"5.0",
      imglist:[],
      isApply:true,
    }
  }
  componentDidMount(){
        _this._getimglist();

      // InteractionManager.runAfterInteractions(() => {
      // });
  }
  _getimglist(){
    var quan = _this.state.score[0];
    var ban =  _this.state.score[2];
    if (ban>1) {
      var kong = 4-quan
    }else {
      var kong = 5-quan
    }
    var imglist = [];
    if (quan>0) {
      for(var i = 0; i < quan; i++){
        imglist.push(<Image key={i} style={styles.repair_b} source={require('../../images/repair_d.png')}></Image>)
      }
    }if (ban>1) {
      imglist.push(<Image key={5} style={styles.repair_b} source={require('../../images/repair_c.png')}></Image>)
    }if (kong>0) {
      for(var y = 0; y < kong; y++){
        imglist.push(<Image key={6+y} style={styles.repair_b} source={require('../../images/repair_b.png')}></Image>)
      }
    }
    _this.setState({imglist:imglist})
    return imglist

  }
  setApply(){
    _this.setState({isApply:false})
  }

  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props;
    _navigator = _props.navigator;

    return (
        <View style={{flex: 1,}}>
            <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000000", opacity: .1,}}>
              <TouchableOpacity style={{flex:1}} onPress={() => {
                props.onClose()
              }}>
              </TouchableOpacity>
            </View>
            <View style={styles.main}>
                <View style={styles.list_box}>
                    <View style={styles.list_box_a}>
                        <View style={styles.list_up}>
                            <View style={styles.list_up_a}>
                                <Text style={styles.list_font}>彭于晏</Text>
                                <Text style={styles.list_font_b}>30级</Text>
                            </View>
                            <Text style={styles.list_font_d}>￥229</Text>
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
                        <View style={styles.list_middle}>
                            <Text style={styles.list_font}>工单号：</Text>
                            <Text style={styles.list_font_b}>GD123456</Text>
                        </View>
                        <View style={styles.list_middle}>
                            <Text style={styles.list_font}>工    时：</Text>
                            <Text style={styles.list_font_b}>1小时</Text>
                        </View>
                        <View style={styles.list_apply_box}>
                            <View style={styles.list_apply}>
                                <Text style={styles.list_apply_font}>20</Text>
                                <Text style={styles.list_apply_font_a}>￥</Text>
                            </View>
                            <TouchableOpacity>
                                <Text style={styles.list_apply_font_b}>费用明细</Text>
                            </TouchableOpacity>
                            {_state.isApply?
                                  <View style={styles.list_apply_a}>
                                      <Image style={styles.address_b} source={require('../../images/address_b.png')}></Image>
                                      <Text style={styles.list_font_b}>单位结算</Text>
                                  </View>
                              :
                              <View style={styles.list_apply_c}>
                                  <Image style={styles.address_b} source={require('../../images/address_b.png')}></Image>
                                  <Image style={styles.repair_j} source={require('../../images/repair_j.png')}></Image>
                                  <Text style={styles.list_font_b,{marginRight:15}}>微信</Text>
                                  <Image style={styles.address_b} source={require('../../images/address_b.png')}></Image>
                                  <Image style={styles.repair_j} source={require('../../images/repair_k.png')}></Image>
                                  <Text style={styles.list_font_b}>支付宝</Text>
                              </View>
                            }
                              <TouchableOpacity onPress={() => {_this.setApply()}}>
                            {_state.isApply?

                                  <LinearGradient colors={['#5460ff','#5c99ff' ]} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.list_button}>
                                        <Text style={styles.list_font_wight}>确认完工</Text>
                                  </LinearGradient>

                              :
                                  <LinearGradient colors={['#5460ff','#5c99ff' ]} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.list_button}>
                                        <Text style={styles.list_font_wight}>支付</Text>
                                  </LinearGradient>
                            }
                            </TouchableOpacity>
                        </View>



                    </View>
                    <View style={styles.list_headImg}>
                        <Image style={{width: 90, height: 90,}} source={require('../../images/repair_f.png')}></Image>
                    </View>
                </View>

            </View>
        </View>
    );
  }

};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection:'column-reverse',
  },
  list_box_a:{
    marginTop:30,
    width:width,
    backgroundColor:'#ffffff',
    alignItems:'center',
    paddingBottom:15,
  },
  list_box:{
    width:width,
    position:'relative',
    alignItems:'center'
  },
  list_headImg:{
    width:90,
    height:90,
    position:'absolute',
    top:0,
    left:15,
  },
  list_up:{
    flexDirection:'column',
    width:width-30,
    height:60,
    paddingLeft:100,
    marginBottom:10,
  },
  list_font:{
    fontSize:15,
    color:'#303030',
    margin:0,
    padding:0,
    lineHeight:16,
    marginRight:10
  },
  list_font_b:{
    fontSize:13,
    color:'#999999',
    lineHeight:16,
  },
  list_up_a:{
    flexDirection:'row',
    height:16,
    marginTop:10,
    alignItems:'center',
    width:width-135,
    justifyContent:'space-between',
  },
  list_middle:{
    flexDirection:'row',
    width:width-30,
    height:16,
    marginTop:5,
    alignItems:'center',
  },
  list_font_d:{
    fontSize:15,
    color:'#ef5b5b'
  },
  list_right_down:{
    width:width-135,
    height:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  list_right_a:{
    height:15,
    flexDirection:'row',
    alignItems:'center',
  },
  require_c:{
    height:12,
    width:12,
    marginRight:5
  },
  list_font_e:{
    fontSize:15,
    color:'#edaf37',
    margin:0,
    padding:0
  },
  list_font_f:{
    fontSize:12,
    color:'#999999'
  },
  repair_b:{
    height:12,
    width:12,
  },
  list_apply_font:{
    fontSize:35,
    color:'#ef5b5b',
    lineHeight:35,
  },
  list_apply_font_a:{
    fontSize:15,
    color:'#999999',
    lineHeight:16,
  },

  list_apply_box:{
    width:width,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:7,
  },
  list_apply:{
    height:35,
    flexDirection:'row',
    alignItems:'flex-end',
    marginBottom:15,
  },
  list_apply_font_b:{
    fontSize:13,
    color:'#5986ff',
    lineHeight:14,
  },
  address_b:{
    height:15,
    width:15,
    marginRight:10,
  },
  list_apply_a:{
    flexDirection:'row',
    marginTop:25,
    height:16,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:15,
  },
  list_button:{
    width:200,
    height:35,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:17,
  },
  list_font_wight:{
    fontSize:15,
    color:'#ffffff'
  },
  list_apply_b:{
    width:width,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center'
  },
  list_apply_c:{
    flexDirection:'row',
    justifyContent:'center',
    marginTop:15,
    alignItems:'center',
    marginBottom:15
  },
  repair_j:{
    height:30,
    width:30,
    marginRight:10
  }


});

module.exports = WorkOrderApplyModal
