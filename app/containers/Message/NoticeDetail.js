'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Picker, AsyncStorage, } from 'react-native';
import { width, height } from './../../components/common/Dimensions'
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { date2str } from './../../constant/constants';
import {noticedetail}from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';

var _navigator,_this,_state,_props;


class NoticeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      params:this.props.navigation.state.params.datas,
      loading:true,
      data:'',
    };
  }
  componentDidMount(){
    noticedetail({page:1},_this.noticeDetail,_this.noticeDetailFail)
  }
  noticeDetail(result){
    if(result.success){
      _this.setState({
        data:result.data,
        loading:false,
      })
    }
  }
  noticeDetailFail(){
    _this.setState({
      data:_this.state.params,
      loading:false,
    })
  }
  maxfont(str,da){
    if(str){
      str = str.replace(/<\/?[^>]*>/g,''); //去除HTML tag
      str = str.replace(/[ | ]*\n/g,'\n'); //去除行尾空白
      str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
      str = str.replace(/ /ig,'');//去掉
      return str
    }else{
      return "";
    }
  }
  render() {
    _this = this;
    _state = _this.state;
    _props = _this.props
    _navigator = _props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "公告",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
          <View style={{flex: 1, paddingLeft: 10,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 23, height: 23,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      rightView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'>
        </TouchableOpacity>
      ),
    }
    return (
      <View style={{flex: 1,}}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        {_this.state.loading?<NavWait/>:
        <View style={styles.main}>
          <ScrollView>
            <View style={styles.box}>
              <Text style={{fontSize:16,color:'#333',marginTop: 10, marginBottom: 10,}}>
                {_state.params.title}
              </Text>
              <Text style={{fontSize:12,color:'#999', marginBottom: 10,}}>
                {_state.params.date?_state.params.date:null}
                <Text style={{fontSize:12,color:'#0099cc',}}>
                  {_state.params.orgName?" "+_state.params.orgName:""}
                </Text>
              </Text>
              <Text style={{fontSize:12,color:'#999',marginTop: 10,}}>
                {"尊敬的业主/住户："}
              </Text>
              <Text style={{fontSize:12,color:'#666',lineHeight:22, marginBottom: 10,}}>
                {_this.maxfont(_state.params.content)}
              </Text>
              <View style={styles.boxright}>
                <Text style={{fontSize:12,color:'#999', marginTop: 10, marginBottom: 10,}}>
                  {_state.params.createTime?date2str(new Date(_state.params.createTime),"yyyy-MM-dd"):null}
                </Text>
              </View>
              <View style={styles.boxright}>
                <Text style={{fontSize:12,color:'#999', marginBottom: 10,}}>
                  {_state.params.orgName}
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f7f8fc',
    flexDirection: 'column',
  },
  box: {
    flexDirection: 'column',
    padding: 15,
  },
  boxright: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

module.exports = NoticeDetail
