'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, AsyncStorage, BackAndroid, ToastAndroid } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator,_this,_state,_props;
import LinearGradient from 'react-native-linear-gradient';

class workOrderDetailAppraiseModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      orderState:"3",
      score:"5.0",
      imglist:[],
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


  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props;
    _navigator = _props.navigator;

    return (
        <View style={{flex: 1,}}>
            <View style={styles.main}>
                <View style={styles.list_box}>
                    <View style={styles.list_up}>
                        <LinearGradient colors={['#5460ff','#5c99ff' ]} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.list_headImg}>
                            <Image style={styles.list_img} source={require('../../images/repair_f.png')}></Image>
                        </LinearGradient>
                        <View style={styles.list_up_b}>
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

                    </View>
                    <View style={styles.list_middle}>
                      <Text style={styles.list_font_g}>“评分”</Text>
                      <View style={styles.list_down}>
                        <Image  style={styles.repair_n} source={require('../../images/repair_n.png')}></Image>
                        <Image  style={styles.repair_n} source={require('../../images/repair_n.png')}></Image>
                        <Image  style={styles.repair_n} source={require('../../images/repair_n.png')}></Image>
                        <Image  style={styles.repair_n} source={require('../../images/repair_n.png')}></Image>
                        <Image  style={styles.repair_n} source={require('../../images/repair_n.png')}></Image>
                      </View>
                    </View>
                    <View style={styles.list_middle}>
                      <Text style={styles.list_font_g}>“完美无瑕”</Text>
                      <View style={styles.list_down_a}>
                        <Image  style={styles.repair_n} source={require('../../images/repair_l.png')}></Image>
                        <Image  style={styles.repair_n} source={require('../../images/repair_l.png')}></Image>
                        <Image  style={styles.repair_n} source={require('../../images/repair_l.png')}></Image>
                        <Image  style={styles.repair_n} source={require('../../images/repair_l.png')}></Image>
                        <Image  style={styles.repair_n} source={require('../../images/repair_l.png')}></Image>
                      </View>
                      <Text style={styles.list_font_b}>感谢评价，您的满意是我们前进的最大动力</Text>
                      <View style={styles.list_down_b}>
                          <View style={styles.list_down_c}>

                              <LinearGradient colors={['#5460ff','#5c99ff' ]} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.list_down_e}>
                                    <Text style={styles.list_font_wight}>中国好维修工</Text>
                              </LinearGradient>
                              <View style={styles.list_down_e}>
                                    <Text style={styles.list_font_b}>服务温暖</Text>
                              </View>
                              <View style={styles.list_down_e}>
                                    <Text style={styles.list_font_b}>谈吐优雅</Text>
                              </View>
                          </View>
                          <View style={styles.list_down_c}>
                              <View style={styles.list_down_e}>
                                    <Text style={styles.list_font_b}>阳光幽默</Text>
                              </View>
                              <View style={styles.list_down_e}>
                                    <Text style={styles.list_font_b}>技术高强</Text>
                              </View>
                              <View style={styles.list_down_e}>
                                    <Text style={styles.list_font_b}>维修大师</Text>
                              </View>
                          </View>
                      </View>

                      <View style={styles.list_down_input}>
                              <TextInput underlineColorAndroid="transparent" style={styles.list_input}  placeholder="您对Ta的其他印象" placeholderTextColor={'#dddddd'}/>
                      </View>
                      <LinearGradient  start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}}
                      colors={['#5460ff','#5c99ff' ]}
                      style={styles.list_button}>
                          <Text style={styles.list_button_font}>提交</Text>
                      </LinearGradient>

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
    backgroundColor: '#000000',
    opacity: .1,
    width:width,
    height:height,
  },
  list_box:{
    width:width,
    backgroundColor:'#ffffff',
    alignItems:'center',
    flexDirection:'column',
    paddingLeft:15,
    paddingRight:15,
  },
  list_headImg:{
    width:90,
    height:90,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  list_img:{
    width:85,
    height:85,
    borderRadius:5,
  },
  list_up:{
    width:width-30,
    flexDirection:'row',
    marginTop:15,
  },
  list_font:{
    fontSize:15,
    color:'#303030',
    margin:0,
    padding:0,
    lineHeight:16,
    marginRight:15
  },
  list_font_b:{
    fontSize:13,
    color:'#999999',
    lineHeight:16,
  },
  list_font_wight:{
    fontSize:13,
    color:'#ffffff',
    lineHeight:16,
  },
  list_up_b:{
    flexDirection:'column',
    marginLeft:10,
    paddingTop:10,
  },
  list_up_a:{
    flexDirection:'row',
    height:16,
  },
  list_font_d:{
    fontSize:15,
    color:'#ef5b5b',
    marginTop:5,
  },
  list_right_down:{
    width:width-135,
    height:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:20,
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
  repair_b:{
    height:12,
    width:12,
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
  list_middle:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    marginTop:20,
  },
  list_font_g:{
    fontSize:15,
    color:'#303030',
    marginBottom:15,
  },
  list_down:{
    flexDirection:'row',
    marginBottom:50,
  },
  repair_n:{
    height:25,
    width:26,
    marginRight:8,
    marginLeft:8
  },
  list_down_a:{
    flexDirection:'row',
    marginBottom:15,
  },
  list_down_b:{
    width:width-60,
    marginTop:15,
    flexDirection:'column',
    marginBottom:5,
    justifyContent:'center',
    alignItems:'center',
  },
  list_down_c:{
    flexDirection:'row',
    marginBottom:10,
  },
  list_down_e:{
    height:25,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#dddddd',
    marginLeft:5,
    marginRight:5,
    paddingLeft:15,
    paddingRight:15,
  },
  list_down_input:{
    height:40,
    width:300,
    borderWidth:1,
    borderColor:'#999999',
    borderStyle:'dashed',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:1,
    marginBottom:15
  },
  list_input:{
    fontSize:15,
    color:'#303030',
    margin:0,
    padding:0,
    height: 40,
    width:300,
    textAlign:'center',
  },
  list_button_a:{
    justifyContent:'center',
    alignItems:'center'
  },
  list_button:{
    height:35,
    width:200,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:17,
    marginBottom:15,
  },
  list_button_font:{
    fontSize:15,
    color:'#ffffff'
  }
});

module.exports = workOrderDetailAppraiseModal
