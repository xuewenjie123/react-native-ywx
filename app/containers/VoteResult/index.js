'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
var _navigator,_this,_state,_props;
import GradientBox from "../../components/common/GradientBox";
import NavWait from '../../components/common/NavWait';
import {voteresult} from '../../services/myDetail';

var sumTou = 0;
var votelist = [];
export default class VoteResult extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:'',
      loading:true,
      votetotal:0,
      maxwidth:0,
      params:this.props.navigation.state.params.datas,
      color:[['#5463ff','#5c99ff'],['#9244fe','#ab79ef'],['#39e296','#64e394'],['#ee4d4e','#f66375'],['#f6da57','f0e67c'],['#f44b86','#f972c0']],
    }
  }
  componentDidMount(){
    let obj = {
      voteId:_this.state.params.id,
      voteCode:_this.state.params.code,
      partAcompanyId:_this.state.params.partACompanyId,
      propertyCompanyId:_this.state.params.propertyCompanyId,
    }
    voteresult(obj,_this.voteResult,_this.voteResultFail);
    // InteractionManager.runAfterInteractions(() => {
    // });
  }
  voteResult(result){
    if(result.success){
      for(let i = 0;i < result.data.vote.options.length;i++){
        result.data.vote.options[i].number=0;
        for(let j = 0;j < result.data.allResult.length;j++){
          if(result.data.allResult[j].optionId == result.data.vote.options[i].id){
            result.data.vote.options[i].number=result.data.allResult[j].number;
          }
        }
      }
      if(sumTou == 0){
        for(let i=0;i<result.data.vote.options.length;i++){
          sumTou += result.data.vote.options[i].number;
          votelist.push(result.data.vote.options[i].number)
        }
      }
      _this.setState({
        data:result.data,
        loading:false,
        votetotal:sumTou,
        maxwidth: (350*width*sumTou/750)/(Math.max.apply(null,votelist)),
      })
    }
  }
  voteResultFail(){
    ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
    _this.setState({
      loading:false,
    })
  }
  render() {
    _this = this;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "投票结果",
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
                <Text style={styles.list_font}>{_this.state.data.vote.title}</Text>
                <View style={styles.list_a}>
                    <Text style={[styles.list_font_a,{marginRight:10}]}>{_this.state.data.vote.createTime}</Text>
                    <Text style={styles.list_font_b}>{_this.state.data.vote.orgName}</Text>
                </View>
                <Text style={[styles.list_font_c,{lineHeight:20}]}>{_this.state.data.vote.orgName}</Text>
                <View style={styles.list_b}>
                    <Text style={styles.list_font_c}>截止日期：</Text>
                    <Text style={styles.list_font_c}>{_this.state.data.vote.endTime}</Text>
                </View>
                <View style={styles.list_line}></View>
                <View style={styles.list_vote}>
                    <Text style={[styles.list_font,{marginRight:10}]}>投票结果</Text>
                    <Text style={styles.list_font_c}>截止日期：{_this.state.data.vote.endTime}</Text>
                </View>
                {_this.state.data.vote.options.map((d,index)=>(

                    <View  key={index}  style={styles.vote_a}>
                        <View  style={styles.vote}>
                           <Text style={styles.list_font_c}>{d.option}</Text>
                        </View>
                        <View style={{flexDirection:'row',marginTop:15,justifyContent:'space-between',width:width-30}}>
                          <View style={{flexDirection:'row',alignItems:'center'}}>
                            <LinearGradient colors={_this.state.color[index%4]} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={[styles.vote_process_c,{width:_this.state.maxwidth*(d.number/_this.state.votetotal)}]}>
                                <Text ></Text>
                            </LinearGradient>
                            <Text style={[styles.list_font_c,{marginLeft:40*width/750}]}>{(d.number/_this.state.votetotal).toFixed(2)*100}%</Text>
                          </View>
                           <Text style={[styles.list_font_c,{paddingRight:15}]}>{d.number}票</Text>
                        </View>
                    </View>
                ))}
            </View>
            <View  style={styles.down}>
                <Text style={[styles.list_font_c,{marginBottom:5}]}>您已投票给：
                  {_this.state.data.userResult.map((d,index)=>(
                  index>0?
                  <Text key={index}>、{d.option}</Text>:
                  <Text key={index}>{d.option}</Text>
                ))}
              </Text>
                <Text style={styles.list_font_c}>感谢您的参与~</Text>
            </View>
            </ScrollView>
            </View>
          }
        </View>
    );
  }

};
