'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
var _navigator,_this,_state,_props;
import GradientBox from "../../components/common/GradientBox";
import {votedetail,sendvote} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';

let idList = [];
export default class VoteDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:'',
      ids:[],
      loading:true,
      params:this.props.navigation.state.params.datas,
    }
  }
  componentDidMount(){
    let obj = {
      voteCode:_this.state.params.code,
      partAcompanyId:_this.state.params.partACompanyId,
      propertyCompanyId:_this.state.params.propertyCompanyId,
    }
    votedetail(obj,_this.voteDetail,_this.voteDetailFail)
  }

  voteDetail(result){
    if(result.success){
      result.data.createTime = result.data.vote.createTime.slice(0,result.data.vote.createTime.indexOf(' '));
      _this.setState({
        data:result.data.vote,
        loading:false,
      })
    }
  }
  voteDetailFail(){
    ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
    _this.setState({
      loading:false,
    })
  }

  setList(id){
    idList = this.state.ids;
    if(_this.state.data.selectType==1){
      if(idList.indexOf(id) == -1){
        if(idList.length<_this.state.data.multiselectNumber){
          idList.push(id)
        }else {
          ToastAndroid.show("最多只能选"+_this.state.data.multiselectNumber+"项",ToastAndroid.SHORT)
        }
      }else{
        idList.splice(idList.indexOf(id),1)
      }
    }else {
      idList = id
    }
    this.setState({
      ids:idList
    })
  }
  sendId(){
    if(_this.state.ids.length==0||_this.state.ids==''){
      ToastAndroid.show("请投票",ToastAndroid.SHORT)
      return
    }
    let obj = {
      voteId:_this.state.data.id,
      voteCode:_this.state.data.code,
      partAcompanyId:_this.state.params.partACompanyId,
      propertyCompanyId:_this.state.params.propertyCompanyId,
      voteOptions:_this.state.ids,
    }
    sendvote(obj,_this.sendVote,_this.sendVoteFail)
  }
  sendVote(result){
    if(result.success){
      _navigator.navigate("VoteResult",{datas:_this.state.params})
    }else {
      console.log(result.errorMsg);
    }
  }
  sendVoteFail(){
    ToastAndroid.show("投票失败！请确保您的网络已连接",ToastAndroid.SHORT)
  }
  render() {
    _this = this;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "投票详情",
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
            <View style={styles.main_a}>
            <ScrollView contentContainerStyle={{width:width}}>
            <View style={styles.list}>
                <Text style={styles.list_font}>{_this.state.data.title}</Text>
                <View style={styles.list_a}>
                    <Text style={[styles.list_font_a,{marginRight:10}]}>{_this.state.data.createTime}</Text>
                    <Text style={styles.list_font_b}>{_this.state.data.orgName}</Text>
                </View>
                <Text style={[styles.list_font_c,{lineHeight:20}]}>{_this.state.data.content}</Text>
                <View style={styles.list_b}>
                    <Text style={styles.list_font_c}>截止日期：</Text>
                    <Text style={styles.list_font_c}>{_this.state.data.endTime}</Text>
                </View>
                <View style={styles.list_line}></View>
                <View style={styles.list_vote}>
                  {_this.state.data.selectType==1?
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={[styles.list_font,{marginLeft:10,marginRight:10}]}>多选</Text>
                        <Text style={styles.list_font_c}>最多{_this.state.data.multiselectNumber}项</Text>
                    </View>:
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={[styles.list_font,{marginLeft:10,marginRight:10}]}>单选</Text>
                    </View>
                  }
                    {_this.state.data.isAnonymous==1?
                        <Text style={styles.list_font_c}>(匿名投票)</Text>:
                        <Text style={styles.list_font_c}>(公开投票)</Text>
                    }
                </View>
                {_this.state.data.options.map((d,index)=>(
                  _this.state.data.selectType==1?
                  _this.state.ids.indexOf(d.id)==-1?
                    <TouchableOpacity onPress={()=> this.setList(d.id)} key={index} underlayColor='transparent'>
                        <LinearGradient colors={['#ffffff','#ffffff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote}>
                            <Text style={styles.list_font_c}>{d.option}</Text>
                        </LinearGradient>
                    </TouchableOpacity>:
                  <TouchableOpacity onPress={()=> this.setList(d.id)} key={index} underlayColor='transparent'>
                      <LinearGradient colors={['#5460ff','#5c99ff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote_a}>
                          <Text style={styles.list_font_e}>{d.option}</Text>
                      </LinearGradient>
                  </TouchableOpacity>:
                  _this.state.ids==d.id?
                  <TouchableOpacity onPress={()=> this.setList(d.id)} key={index} underlayColor='transparent'>
                      <LinearGradient colors={['#5460ff','#5c99ff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote_a}>
                          <Text style={styles.list_font_e}>{d.option}</Text>
                      </LinearGradient>
                  </TouchableOpacity>:
                  <TouchableOpacity onPress={()=> this.setList(d.id)} key={index} underlayColor='transparent'>
                      <LinearGradient colors={['#ffffff','#ffffff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.vote}>
                          <Text style={styles.list_font_c}>{d.option}</Text>
                      </LinearGradient>
                  </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity onPress={()=>this.sendId()} underlayColor='transparent'>
                <GradientBox title={"提交"} styles={styles.button}/>
            </TouchableOpacity>
            </ScrollView>
            </View>
          }
        </View>
    );
  }
};
