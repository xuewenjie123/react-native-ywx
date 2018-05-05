'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions'
import NavigatorTopBar from './../../components/NavigatorTopBar';
var _navigator,_this,_state,_props;


export default class ChargesDetails extends Component {
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
      title: "费用明细",
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
              <View style={styles.list_cost_box}>
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


                  <View style={styles.list_cost_f}>
                      <View style={styles.list_cost_e}>
                          <Text style={styles.list_font_a}>费用总额 ：</Text>
                          <Text style={styles.list_font_b}>￥20</Text>
                      </View>
                      <View style={styles.list_cost_e}>
                          <Text style={styles.list_font_a}>结算总额：</Text>
                          <Text style={styles.list_font_d}>￥20</Text>
                      </View>
                  </View>
              </View>
              </ScrollView>
          </View>
      </View>
    );
  }

};
