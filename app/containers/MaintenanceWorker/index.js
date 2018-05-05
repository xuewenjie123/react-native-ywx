'use strict';
import React, { Component, } from 'react';
import { View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView,TouchableHighlight} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions'
var _navigator,_this,_state,_props;
import { getTeamPersonInfo} from '../../services/maintenanceTeam';
import Picker from 'react-native-picker';
import GradientBox from '../../components/common/GradientBox';
import {date2str} from '../../constant/constants';
import color from '../../constant/color'
let impressionList=[
  {title:"中国好维修工",number:60},{title:"服务温暖",number:60},{title:"谈吐优雅",number:60},{title:"阳光幽默",number:60},{title:"技术高强",number:60},{title:"维修大师",number:60}
]
let evaluateList=[
  {imgUrl:require("../../images/address_c.png"),rate:3,name:"垂直五花肉",creatTime:"11分钟前",evaluate:"维修师傅人很热情，技能也很强，完美解决了我的问题~"},
  {imgUrl:require("../../images/address_c.png"),rate:4,name:"垂直五花肉",creatTime:"11分钟前",evaluate:"维修师傅人很热情，技能也很强，完美解决了我的问题~"},
  {imgUrl:require("../../images/address_c.png"),rate:5,name:"垂直五花肉",creatTime:"11分钟前",evaluate:"维修师傅人很热情，技能也很强，完美解决了我的问题~"},
  {imgUrl:require("../../images/address_c.png"),rate:5,name:"垂直五花肉",creatTime:"11分钟前",evaluate:"维修师傅人很热情，技能也很强，完美解决了我的问题~"}
]
let noRateList=[
  {imgUrl:require("../../images/niming.png"),name:"匿名",creatTime:"2017.5.6",evaluate:"水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了"},
  {imgUrl:require("../../images/niming.png"),name:"匿名",creatTime:"2017.5.7",evaluate:"水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了水管漏了~"},
  {imgUrl:require("../../images/niming.png"),name:"匿名",creatTime:"11分钟前",evaluate:"水管漏了~"},
  {imgUrl:require("../../images/niming.png"),name:"匿名",creatTime:"11分钟前",evaluate:"水管漏了~"}
]
var timeList = [{appoint_time:"2017年6月12日"},{appoint_time:"2017年6月12日"},{appoint_time:"2017年6月12日"},{appoint_time:"2017年6月12日"}]
export default class MaintenanceWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        rate:"0",
        range:"0",
        price:"",
        scrollState:true,
        name:"",
        otherTalk:"1",
        impressionList:impressionList,
        evaluateList:[],
        noRateList:[],
        personId:this.props.navigation.state.params.id,
        dataCode:this.props.navigation.state.params.dataCode,
        isFormMajorOrProperty:this.props.navigation.state.params.isFormMajorOrProperty,
        latitude:this.props.navigation.state.params.latitude,
        longitude:this.props.navigation.state.params.longitude,
        employeeinfo:{},
        employee_name:"",
    //    evaluateList:[],
        teamPersonAppointList:timeList,
        yesRateList:[],
    }
  }
  componentDidMount(){
    getTeamPersonInfo({personId:_state.personId,dataCode:_state.dataCode,
                      isFormMajorOrProperty:_state.isFormMajorOrProperty,
                      latitude:_state.latitude,
                      longitude:_state.longitude,},
                      this.getTeamPersonInfoResult)
  }
  getTeamPersonInfoResult(response){
    if(response.success){
      _this.setState({employeeinfo:response.data,
                      employee_no:response.data.employee_no,
                      rate:response.data.rate,
                      range:response.data.range,
                      employee_name:response.data.employee_name,
                      evaluateList:response.data.evaluateList,
                      noRateList:response.data.noRateList,
                      teamPersonAppointList:response.data.teamPersonAppointList,
                      yesRateList:response.data.yesRateList})
    }else {
      ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
      return false;
    }
  }
  _timeAgo(time){
        var evaluateTime = "";
        var date1= new Date(time);  //开始时间
        var date2 = new Date();    //结束时间
        var date3 = date2.getTime() - date1.getTime();   //时间差的毫秒数
        var days=Math.floor(date3/(24*3600*1000))
        if (days<=3 && days>0) {
             evaluateTime=days+"天前"
        }else if (days>3) {
             evaluateTime=date2str(date1,"yyyy.MM.dd")
        }else {
          var leave1=date3%(24*3600*1000)    //计算天数后剩余的毫秒数
          var hours=Math.floor(leave1/(3600*1000))
          if (hours>0) {
            evaluateTime=hours+"小时前"
          }else {
            //计算相差分钟数
            var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
            var minutes=Math.floor(leave2/(60*1000))
            evaluateTime=minutes+"分钟前"
          }
        }
        return evaluateTime
  }
  _getimglist(start){
    var quan = Math.floor(start);
    var ban = start - quan;
    var kong = ban>0?4-quan:5-quan;
    var imglist = [];
    if(quan>0){
        for(let i=0;i<quan;i++){
            imglist.push(<Image key={i} style={styles.start} source={require('../../images/repair_d.png')}/>)
        }
    }
    if(ban>0){
        imglist.push(<Image key={5} style={styles.start} source={require('../../images/repair_c.png')}/>)
    }
    if (kong>0) {
        for(let i= 0; i< kong; i++){
          imglist.push(<Image key={6+i} style={styles.start} source={require('../../images/repair_b.png')}/>)
        }
      }

     return imglist
  }
  changOtherTalk(state){
    _this.setState({
      otherTalk:state
    })
  }
  _showTimePicker() {
      if (_state.teamPersonAppointList.length>0){
        var newteamPersonAppointList = [];
        _state.teamPersonAppointList.map((d,index)=>{
          newteamPersonAppointList.push(d.appoint_time)
        })
        Picker.init({
            pickerData:newteamPersonAppointList,
            pickerTitleText: '已被预约时间',
            pickerConfirmBtnText:"确定",
            pickerCancelBtnText:"取消",
            pickerCancelBtnColor:[153,153,153,1],
            pickerConfirmBtnColor:[71,145,255,1],
            pickerToolBarBg:[247,247,249,1],
            pickerBg:[246,246,246,1],
            pickerFontSize:15,
            wheelFlex: [1],
            onPickerCancel: pickedValue => {
                Picker.hide()
            },
        });
        Picker.show();
      }

  }
  render() {
    _this = this;
    _state = this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
        visible: true,
        title: _state.employee_name,
        leftView: (
          <TouchableOpacity style={{flex: 1}}
            underlayColor='transparent'
            onPress={() => {_navigator.goBack()}}>
            <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
              <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
            </View>
          </TouchableOpacity>
        )
      };
      let yuNum = _state.rate-Math.floor(_state.rate);
    return (
      <View style={styles.main}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        <ScrollView contentContainerStyle={styles.containerStyle} scrollEnabled={_state.scrollState}>
            <View style={styles.imgBox}>
                <Image style={{width: width, height: 450*width/750,}} source={require('../../images/repair_f.png')}></Image>
            </View>
            <View style={styles.dealInfoBox}>
                    <Text style={styles.teamName}>{_state.employee_name}个人维修师傅</Text>
                    <View style={styles.startBox}>
                        <View style={{flexDirection:"row"}}>{_this._getimglist(_state.rate)}</View>
                        <Text style={styles.textStart}>{yuNum>0?_state.rate+"":_state.rate+".0"}</Text>
                    </View>
            </View>
            <View style={styles.dealNumBox}>
                <Text style={styles.textPrice}>￥{_state.employeeinfo.price}</Text>
                <Text style={styles.textDealNum}>距离我{_state.range>=1000?_state.range/1000+"km":_state.range+"m"}</Text>
            </View>
            <View style={{height:20*width/750,backgroundColor:"#f1f3f8",width:width}}></View>
            <TouchableOpacity style={[styles.yuTime,{alignItems:'center'}]} onPress={_this._showTimePicker.bind(this)}>
                <Text style={[styles.teamName,{marginVertical:30*width/750}]}>已被预约的时间</Text>
                <Image style={{width: 15, height: 15,}} source={require('../../images/icon_b.png')}></Image>
            </TouchableOpacity>
            <View style={{height:20*width/750,backgroundColor:"#f1f3f8",width:width}}></View>
            <View style={styles.yuTime}>
                <Text style={[styles.teamName,{marginVertical:30*width/750}]}>TA的印象</Text>
                <View style={styles.impression}>
                  <TouchableOpacity style={[styles.impressionActive,_state.otherTalk==1?{borderColor:color.main1C}:null]} onPress={()=>{_this.changOtherTalk("1")}}>
                      <Text style={[styles.text_p,_state.otherTalk==1?{color:color.main1C}:null]}>评价</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={[styles.impressionActive,_state.otherTalk==2?{borderColor:color.main1C}:null]} onPress={()=>{_this.changOtherTalk("2")}}>
                      <Text style={[styles.text_p,_state.otherTalk==2?{color:color.main1C}:null]}>投诉</Text>
                  </TouchableOpacity>
               </View>
            </View>
            {_state.otherTalk==1?
              <View style={styles.impressionList}>
                {_state.yesRateList.map((d,index)=>(
                  <View key={index} style={styles.impressionBtn} underlayColor='transparent'>
                    <Text style={styles.text}>{d.name}({d.nums})</Text>
                  </View>
                ))}
              </View>:null
            }
            {_state.otherTalk==1?
              <View style={styles.evaluateBox}>
                { _state.evaluateList.length?
                <View>
                      {
                        _state.evaluateList.map((item,i)=>(
                          i>2?
                          <View key={i}></View>:
                          <View  key={i}>
                            {i==0?null:
                              <View style={styles.line}></View>
                            }
                            <View style={styles.itemevaluate}>
                              <View style={[styles.itemTop,item.description?{marginBottom:15}:{marginBottom:0}]} key={i}>
                                  <Image source={item.imgUrl?item.imgUrl:require("../../images/niming.png")} style={{width:70*width/750,height:70*width/750,borderRadius:35*width/750,marginRight:30*width/750}}/>
                                  <View style={styles.info}>
                                  <Text style={styles.text1}>{item.evaluate_user_name}</Text>
                                  <View style={{flexDirection:"row"}}>{_this._getimglist(item.rate)}</View>
                                  </View>
                                  <View style={styles.itemtr}>
                                    <Text style={styles.text}>{_this._timeAgo(item.create_time)}</Text>
                                  </View>
                              </View>
                              <View style={{width:width-30}}><Text numberOfLines={2} style={styles.text}>{item.description}</Text></View>
                            </View>
                          </View>
                        ))
                      }
                      {_state.evaluateList.length>3?
                        <View style={{width:width-30,marginLeft:30*width/750,alignItems:"flex-end",}}>
                          <TouchableOpacity style={styles.allevaluate} onPress={()=>{_navigator.navigate("AllEvaluation",{personId:_state.personId,dataCode:_state.dataCode,isFormMajorOrProperty:_state.isFormMajorOrProperty,})}}>
                              <Text style={[styles.text,{color:color.main1C}]}>全部评价</Text>
                          </TouchableOpacity>
                        </View>:null
                      }


                  </View>
                :<Text style={{fontSize:15,color:color.font2C,margin:20}}>暂时还没有评价</Text>
                }
              </View>
              :
              <View style={styles.evaluateBox}>
                { _state.noRateList.length?
                <View>
                      {
                        _state.noRateList.map((d,index)=>(
                          index>2?
                          <View key={index}></View>:
                          <View  key={index}>
                          {index==0?null:
                            <View style={styles.line}></View>
                          }
                          <View style={styles.itemevaluate}>
                            <View style={[styles.itemTop,{marginBottom:30*width/750}]} key={index}>
                                <Image source={require("../../images/niming.png")} style={{width:70*width/750,height:70*width/750,borderRadius:35*width/750,marginRight:30*width/750}}/>
                                <Text style={styles.text1}>匿名</Text>
                                <View style={styles.itemtr}>
                                  <Text style={styles.text}>{_this._timeAgo(d.create_time)}</Text>
                                </View>
                            </View>
                            <View style={{width:width-30}}><Text numberOfLines={2} style={styles.text}>{d.description}</Text></View>
                          </View>
                          </View>
                        ))
                      }
                      {_state.noRateList.length>3?
                        <View style={{width:width-30,marginLeft:30*width/750,alignItems:"flex-end",}}>
                          <TouchableOpacity style={styles.allevaluate} onPress={()=>{_navigator.navigate("AllComplaint",{personId:_state.personId,dataCode:_state.dataCode,isFormMajorOrProperty:_state.isFormMajorOrProperty,})}}>
                              <Text style={[styles.text,{color:color.main1C}]}>全部投诉</Text>
                          </TouchableOpacity>
                        </View>:null
                      }


                  </View>
                :<Text style={{fontSize:15,color:color.font2C,margin:20}}>暂时还没有投诉</Text>
                }
              </View>
            }


          <View style={{height:20*width/750,backgroundColor:"#f1f3f8",width:width}}></View>


          <View style={styles.yuTime}>
                <Text style={[styles.teamName,{marginVertical:30*width/750}]}>TA的简介</Text>
          </View>

          <View style={styles.introductionBox}>
              <View style={styles.rowIntro}>
                  <View style={styles.introOne}><Text style={styles.text}>姓名：{_state.employee_name}</Text></View>
                  <View style={styles.introOne}><Text style={styles.text}>性别：{_state.employeeinfo.gender==1?"男":"女"}</Text></View>
              </View>
              <View style={styles.rowIntro}>
                  <View style={styles.introOne}><Text style={styles.text}>年龄：{_state.employeeinfo.age}</Text></View>
                  <View style={styles.introOne}><Text style={styles.text}>工人等级：{_state.employeeinfo.level}级</Text></View>
              </View>
              <View style={styles.rowIntro}>
                  <View style={styles.introOne}><Text style={styles.text}>联系电话：{_state.employeeinfo.phone}</Text></View>
                  <View style={styles.introOne}><Text style={styles.text}>工龄：{_state.employeeinfo.working_years}</Text></View>
              </View>
              <View style={styles.rowIntro}>
                  <View style={styles.introOne}><Text style={styles.text}>户籍：湖南长沙</Text></View>
                  <View style={styles.introOne}><Text style={styles.text}>所在地区：北京海淀</Text></View>
              </View>
          </View>


        </ScrollView>
        <TouchableOpacity onPress={()=>_navigator.navigate("ApplyRepair",{workerName:_state.employee_name,workerPhone:_state.employeeinfo.phone,employee_no:_state.employee_no,dataCode:_state.dataCode,isFormMajorOrProperty:_state.isFormMajorOrProperty})}>
            <GradientBox title="立即报修"  styles={styles.next_action}/>
        </TouchableOpacity>
      </View>
    );
  }

};
