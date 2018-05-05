'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import Dimensions from 'Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
var { width, height } = Dimensions.get('window');

var _navigator,_this,_state,_props;


export default class MyOrderLogisticsDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    _this = this;
    _navigator = _this.props.navigator;
    let NavigatorTopBarProps = {
      visible: true,
      title: "物流详情",
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
              <ScrollView style={{flex:1,backgroundColor:'#ffffff',marginTop:10}}>
                  <View style={styles.list_up}>
                      <Image source={require('../../images/repair_f.png')} style={{height:80,width:80}} />
                      <View style={styles.list_up_right}>
                          <View style={styles.list_up_line}>
                            <Text style={styles.list_font}>物流状态：<Text style={styles.list_font_a}>已签收</Text></Text>
                            <Text style={styles.list_font_b}>顺丰速递</Text>
                          </View>
                          <View style={styles.list_up_line}>
                            <Text style={styles.list_font}>配送单号：<Text style={styles.list_font_a}>1234567890</Text></Text>
                          </View>
                      </View>
                  </View>
                  <View style={styles.list_kong}></View>
                  <View style={styles.list_middle}>
                      <View style={styles.list_middle_a}>
                         <Text style={styles.list_font}>物流跟踪</Text>
                      </View>
                      <View style={styles.list_middle_box}>
                          <View style={styles.list_middle_b}>
                              <View style={styles.list_info}>
                                 <Text style={styles.list_font}>【北京市】  北京市海淀分公司</Text>
                                 <Text style={[styles.list_font_c,{marginTop:3}]}>已收件  派件员：李四</Text>
                                 <View style={[styles.list_middle_one,{marginTop:3}]}>
                                     <Text style={styles.list_font_c}>联系方式：</Text>
                                     <Text style={styles.list_font_e}>123456890</Text>
                                 </View>
                                 <Text style={[styles.list_font_d,{marginTop:3}]}>2017-08-05 14:20:00</Text>
                              </View>
                              <View style={styles.list_line}>
                              </View>
                              <View style={styles.yuan_a}>
                              </View>

                          </View>
                          <View style={styles.list_middle_b}>
                              <View style={styles.list_info}>
                                 <Text style={styles.list_font}>【北京市】  快件已到达 北京海淀分公司</Text>
                                 <Text style={[styles.list_font_d,{marginTop:3}]}>2017-08-05 14:20:00</Text>
                              </View>
                              <View style={styles.list_line}>
                              </View>
                              <View style={styles.yuan}>
                              </View>

                          </View>
                          <View style={styles.list_middle_b}>
                              <View style={styles.list_info}>
                                 <Text style={styles.list_font}>【深圳市】 深圳转运中心 快件已发出</Text>
                                 <Text style={[styles.list_font_d,{marginTop:3}]}>2017-08-05 14:20:00</Text>
                              </View>
                              <View style={styles.list_line}>
                              </View>
                              <View style={styles.yuan}>
                              </View>

                          </View>
                          <View style={styles.list_middle_b_a}>
                              <View style={styles.list_info}>
                                 <Text style={styles.list_font}>【深圳市】  快件已到达 深圳转运中心</Text>
                                 <Text style={[styles.list_font_d,{marginTop:3}]}>2017-08-05 14:20:00</Text>
                              </View>

                              <View style={styles.yuan}>
                              </View>

                          </View>
                      </View>
                  </View>

              </ScrollView>
          </View>
      </View>
    );
  }

};
