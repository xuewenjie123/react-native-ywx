'use strict';
import React, { Component, } from 'react';
import { StatusBar,StyleSheet,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
import NavigatorTopBar from '../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import SendRecommend from '../../components/Recommend/SendRecommend';
import {sendsuccess} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';
var styles =require('./styles');

var _navigator,_this,_state,_props;

var list = {
  address: "凤娇小区5号楼102",
  time:"2017-07-20 10:02:32",
  imgurl: require('../../images/repair_f.png'),
  tuijian:[
    {imgurl: require('../../images/repair_f.png'),title:"约车一次",integral:"20000积分"},
    {imgurl: require('../../images/repair_f.png'),title:"星巴克圣代",integral:"20000积分"},
    {imgurl: require('../../images/repair_f.png'),title:"约车一次",integral:"20000积分"},
    {imgurl: require('../../images/repair_f.png'),title:"约车一次",integral:"20000积分"},
  ]
}
export default class ApplySuccess extends Component {

  constructor(props) {
    super(props);
    this.state = {
        data:'',
        list:[],
        loading:true,
        // params:this.props.navigation.state.params.datas,
        // types:this.props.navigation.state.params.types,
        router:''
    }
  }
  componentDidMount(){
    sendsuccess({page:1},_this.getSend,_this.getSendFail)}
  getSend(result){
    if(result.success){
      _this.setState({
        data:result.data,
        list:result.data.records,
        loading:false,
      })
    }
  }
  getSendFail(){
    _this.setState({
      data:list,
      list:list.tuijian,
      router:false,
      loading:false,
    })
  }

  render() {
    _this = this;
    _state= _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "提交成功",
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
    let RecommendProps = {
      navigator: _navigator,
      list:_this.state.list,
    }
    return (
      <View style={styles.main}>
          <NavigatorTopBar {...NavigatorTopBarProps}/>
          {_this.state.loading?<NavWait/>:
          <ScrollView>
          <View style={styles.up}>
              <View style={styles.up_a}>
                <Image style={{width: 60, height: 60,marginRight:10}} source={_state.data.imgurl}></Image>
                <View style={styles.up_b}>
                    <Text  style={{fontSize:13,color:'#303030'}}>{_state.data.address}</Text>
                    <Text  style={{fontSize:12,color:'#999999'}}>{_state.data.time}</Text>
                </View>
              </View>
              <View style={styles.middle}>
                  <Image style={{width: 22, height: 22,marginRight:10}} source={require('../../images/setting_c.png')}></Image>
                  <Text  style={{fontSize:15,color:'#999999'}}>提交成功！</Text>
              </View>
              {_this.state.router=="ApplyRepair"?
              <View style={styles.middle}>
                  <TouchableOpacity>
                      <View style={styles.button}>
                        <Text  style={styles.font}>取消工单</Text>
                      </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                     <View style={styles.button}>
                        <Text  style={styles.font}>再提一单</Text>
                     </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                     <View style={styles.button_a}>
                       <Text  style={styles.font_a}>回首页</Text>
                     </View>
                  </TouchableOpacity>
              </View>:
              <View style={styles.middle}>
                <TouchableOpacity>
                  <View style={styles.button_a}>
                    <Text  style={styles.font_a}>回首页</Text>
                  </View>
                </TouchableOpacity>
              </View>
              }
          </View>
          <SendRecommend {...RecommendProps}/>
          </ScrollView>
         }
      </View>
    );
  }

};
