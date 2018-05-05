'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import {activitydetail} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';

var _navigator,_this,_state,_props,datas;

export default class ActivityDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datas:'',
      loading:true,
      params:this.props.navigation.state.params.datas,
    }
  }
  componentDidMount(){
    let obj = {
      id:_this.state.params.id,
      code:_this.state.params.code,
      partAcompanyId:_this.state.params.partACompanyId,
      propertyCompanyId:_this.state.params.propertyCompanyId,
      professionalCompanyId:_this.state.params.professionalCompanyId,
    }
    activitydetail(obj,_this.activityDetail,_this.activityDetailFail)
    // InteractionManager.runAfterInteractions(() => {
    // });
  }
  activityDetail(result){
    if(result.success){
      result.data.createTime = result.data.createTime.slice(0,result.data.createTime.indexOf(' '))
      _this.setState({
        datas:result.data,
        loading:false,
      })
    }
  }
  activityDetailFail(){
    ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
    _this.setState({
      loading:false,
    })
  }
  render() {
    _this = this;
    _state = _this.state;
    datas = _state.datas;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "活动详情",
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
        <View style={styles.main}>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            {_this.state.loading?<NavWait/>:
            <ScrollView contentContainerStyle={{width:width}}>
            <View style={styles.list}>
                <Text style={styles.list_font}>{datas.title}</Text>
                <Text style={styles.list_font}>{datas.orgName}</Text>
                <View style={styles.list_a}>
                    <Text style={[styles.list_font_a,{marginRight:10}]}>{datas.createTime}</Text>
                    <Text style={styles.list_font_b}>{datas.orgName}</Text>
                </View>
                <View style={styles.list_img}>
                    <Image style={{width: width-30, height: 140,}} source={{uri:datas.pictureUrl}}></Image>
                </View>
                <View style={styles.list_b}>
                    <Image style={{width: 12, height: 12,marginRight:5}} source={require('../../images/home_a.png')}></Image>
                    <Text style={styles.list_font_c}>时间：</Text>
                    <Text style={styles.list_font_d}>{datas.startTime}~{datas.endTime}</Text>
                </View>
                <View style={styles.list_b}>
                    <Image style={{width: 12, height: 12,marginRight:5}} source={require('../../images/inquiries_a.png')}></Image>
                    <Text style={styles.list_font_c}>地点：</Text>
                    <Text style={styles.list_font_d}>{datas.location}</Text>
                </View>
                <View style={styles.list_line}></View>
                <Text style={[styles.list_font,{marginBottom:20}]}>活动内容</Text>
                <Text style={[styles.list_font_c,{lineHeight:20}]}>{datas.content}</Text>
            </View>
            </ScrollView>
          }
        </View>
    );
  }

};
