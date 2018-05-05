'use strict';
import React, { Component, } from 'react';
import { View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView,TouchableHighlight} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions'
var _navigator,_this,_state,_props;
import color from '../../constant/color';
import GradientBox from '../../components//common/GradientBox';
import TeamList from '../../components/workList';
let impressionList=[
  {title:"中国好维修工",number:60},{title:"服务温暖",number:60},{title:"谈吐优雅",number:60},{title:"阳光幽默",number:60},{title:"技术高强",number:60},{title:"维修大师",number:60}
]
let evaluateList=[
  {imgUrl:require("../../images/address_c.png"),name:"垂直五花肉",creatTime:"11分钟前",evaluate:"维修师傅人很热情，技能也很强，完美解决了我的问题~"},
  {imgUrl:require("../../images/address_c.png"),name:"垂直五花肉",creatTime:"11分钟前",evaluate:"维修师傅人很热情，技能也很强，完美解决了我的问题~"},
  {imgUrl:require("../../images/address_c.png"),name:"垂直五花肉",creatTime:"11分钟前",evaluate:"维修师傅人很热情，技能也很强，完美解决了我的问题~"}
]
var teamList = [
  {
      name:"王是的",typeWork:"水工",busyState:"0",WillBusyState:"即将空闲",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"薛之谦",typeWork:"水工",busyState:"1",WillBusyState:"即将空闲",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"薛之谦",typeWork:"水工",busyState:"2",WillBusyState:"即将空闲",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"薛之谦",typeWork:"水工",busyState:"0",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"薛之谦",typeWork:"水工",busyState:"0",WillBusyState:"即将空闲",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"薛之谦",typeWork:"水工",busyState:"0",WillBusyState:"即将空闲",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"薛之谦",typeWork:"水工",busyState:"0",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"薛之谦",typeWork:"水工",busyState:"0",WillBusyState:"即将空闲",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"薛之谦",typeWork:"水工",busyState:"0",WillBusyState:"即将空闲",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"薛之谦",typeWork:"水工",busyState:"0",WillBusyState:"即将空闲",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"薛之谦",typeWork:"水工",busyState:"0",WillBusyState:"即将空闲",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"薛之谦",typeWork:"水工",busyState:"0",WillBusyState:"即将空闲",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },
  {
      name:"雪人姐",typeWork:"水工",busyState:"0",WillBusyState:"即将空闲",distance:"5公里以内",stars:4.5,series:30,price:229,dealNum:0
  },

]
var timeList = {timeYear:"2017",
              timeInfo:[
                {month:"7",day:"21",hours:"10",minute:"05"},
                {month:"8",day:"21",hours:"10",minute:"05"},
                {month:"7",day:"21",hours:"10",minute:"05"},
                {month:"7",day:"21",hours:"10",minute:"05"},
                {month:"8",day:"14",hours:"10",minute:"05"},
              ]}
export default class MaintenanceWorker extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}),
        stars:4.5,
        distance:"1.1Km",
        price:200,
        member:"彭于晏",
        scrollState:true,
        name:"至尊宝个人维修师傅",
        otherTalk:"1",
        impressionList:impressionList,
        evaluateList:evaluateList,
        timeList:timeList,
        teamList:teamList,
        display:false,
        intro:"火麒麟猛士维续团队是一支拥有高技能工人的专业团队，全队总共10人，其中..."
    }
  }
  componentDidMount(){
    this.setState({
      dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(timeList.timeInfo)
    })
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
  tabScroll(sth,ev){
    if(sth==1){
      _this.setState({
        scrollState:false
      })
    }else{
      _this.setState({
        scrollState:true
      })
    }
  }
  _renderRow(row,sectionID,rowID){
    return (
      <TouchableOpacity style={styles.rowContainer} onPressIn={(ev)=>{_this.tabScroll("1",ev)}} onPressOut={()=>{_this.tabScroll("2")}}>
          <Image source={require("../../images/s_yuyue.png")} style={styles.timeBg}>
               <Text style={styles.text2}>{row.month}</Text>
          </Image>
          <Image source={require("../../images/s_yuyue.png")} style={[styles.timeBg,{marginRight:20*width/750}]}>
               <Text style={styles.text2}>{row.day}</Text>
          </Image>
          <Image source={require("../../images/s_yuyue.png")} style={styles.timeBg}>
               <Text style={styles.text2}>{row.hours}</Text>
          </Image>
          <Image source={require("../../images/s_yuyue.png")} style={styles.timeBg}>
               <Text style={styles.text2}>{row.minute}</Text>
          </Image>
      </TouchableOpacity>
    )
  }
  tabScroll(sth,ev){
    console.log(ev)
    if(sth==1){
      _this.setState({
        scrollState:false
      })
    }else{
      _this.setState({
        scrollState:true
      })
    }
  }
  openModalList(){
    _this.setState({display:true})
  }
  selectYes(){
    _this.closeModalList()
  }
  closeModalList(){
    _this.setState({display:false})
  }
  render() {
    _this = this;
    _state = this.state;
    _navigator = _this.props.navigator;
    let NavigatorTopBarProps = {
        visible: true,
        title: "海淀分队",
        leftView: (
          <TouchableOpacity style={{flex: 1}}
            underlayColor='transparent'
            onPress={() => {_navigator.pop()}}>
            <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
              <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
            </View>
          </TouchableOpacity>
        )
      };
      let TeamListProps={
        visible:_state.display,
        closeModal:function(){
          _this.closeModalList()
        },
        selectYes:function(){
          _this.selectYes()
        },
        teamList:_state.teamList
      }
      let yuNum = _state.stars-Math.floor(_state.stars);
    return (
      <View style={styles.main}>
        <NavigatorTopBar {...NavigatorTopBarProps}/>
        <TeamList {...TeamListProps}/>
        <ScrollView contentContainerStyle={styles.containerStyle} scrollEnabled={_state.scrollState}>
            <View style={styles.imgBox}>
                <Image style={{width: width, height: 450*width/750,}} source={require('../../images/repair_f.png')}></Image>
            </View>
            <View style={styles.dealInfoBox}>
                    <Text style={styles.teamName}>{_state.name}</Text>
                    <View style={styles.startBox}>
                        <View style={{flexDirection:"row"}}>{_this._getimglist(_state.stars)}</View>
                        <Text style={styles.textStart}>{yuNum>0?_state.stars+"":_state.stars+".0"}</Text>
                    </View>
            </View>
            <View style={styles.dealNumBox}>
                <Text style={styles.textDealNum}>月成交量{_state.dealNum}单</Text>
            </View>
            <View style={styles.yuTime}>
                <Text style={[styles.teamName,{marginVertical:30*width/750}]}>选择队员</Text>
                <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} onPress={()=>_this.openModalList()}>
                  <Image source={require('../../images/icon_b.png')} style={{width:30*width/750,height:30*width/750}}/>
                </TouchableOpacity>

            </View>
            <View style={styles.yuTime}>
                <Text style={[styles.teamName,{marginVertical:30*width/750}]}>已选：{_state.member?_state.member:null}</Text>
            </View>

            <View style={{height:20*width/750,backgroundColor:"#f1f3f8",width:width}}></View>

            <View style={styles.yuTime}>
                <Text style={[styles.teamName,{marginVertical:30*width/750}]}>已被预约的时间</Text>
            </View>

            <View style={styles.timeBox}>
                <Text style={{fontSize:15,color:color.font2C}}>{_state.timeList.timeYear}年</Text>
                <ListView
                  overScrollMode="never"
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  dataSource={this.state.dataSource}
                  enableEmptySections={true}
                  renderRow={this._renderRow.bind(_this)}
                  contentContainerStyle={styles.ListViewContainer}
                  style={{height:width/5,width:280*width/750,paddingTop:45*width/750}}
                />

                <Text style={{fontSize:15,color:color.font2C}}>最近预约时间</Text>
            </View>

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

            <View style={styles.impressionList}>
              {_state.impressionList.map((d,index)=>(
                <View key={index} style={styles.impressionBtn} underlayColor='transparent'>
                  <Text style={styles.text}>{d.title}{d.number}</Text>
                </View>
              ))}
            </View>
            
           
              
              <View style={styles.evaluateBox}>
              { _state.evaluateList.length? 
              <View>
                    {
                      _state.evaluateList.map((item,i)=>(
                        <View style={styles.itemevaluate} key={i}>
                          <View style={styles.itemTop} key={i}>
                              <Image source={item.imgUrl} style={{width:70*width/750,height:70*width/750,borderRadius:35*width/750,marginRight:30*width/750}}/>
                              <Text style={styles.text1}>{item.name}</Text>
                              <View style={styles.itemtr}>
                                <Text style={styles.text}>{item.creatTime}</Text>
                              </View>
                          </View>
                          <View style={{width:width-30}}><Text style={styles.text}>{item.evaluate}</Text></View>
                        </View>
                      ))
                    }
                    <View style={{width:width-30,marginLeft:30*width/750,alignItems:"flex-end",}}>
                      <TouchableOpacity style={styles.allevaluate}>
                          <Text style={[styles.text,{color:color.main1C}]}>全部评价</Text>
                      </TouchableOpacity>
                    </View>
                    
                </View>
              :<Text style={{fontSize:15,color:color.font2C,margin:20}}>暂时还没有评价</Text>
            }
               
            </View>

          <View style={{height:20*width/750,backgroundColor:"#f1f3f8",width:width}}></View>

          
          <View style={styles.yuTime}>
                <Text style={[styles.teamName,{marginVertical:30*width/750}]}>TA的简介</Text>
          </View>

          <View style={styles.introductionBox}>
              <View style={styles.rowIntro}>
                  <View style={styles.introOne}><Text style={styles.text}>姓名：至尊宝</Text></View>
                  <View style={styles.introOne}><Text style={styles.text}>性别：男</Text></View>
              </View>
              <View style={styles.rowIntro}>
                  <View style={styles.introOne}><Text style={styles.text}>年龄：42</Text></View>
                  <View style={styles.introOne}><Text style={styles.text}>工人等级：23级</Text></View>
              </View>
              <View style={styles.rowIntro}>
                  <View style={styles.introOne}><Text style={styles.text}>联系电话：1354951358</Text></View>
                  <View style={styles.introOne}><Text style={styles.text}>工龄：3年半</Text></View>
              </View>
              <View style={styles.rowIntro}>
                  <View style={styles.introOne}><Text style={styles.text}>户籍：湖南长沙</Text></View>
                  <View style={styles.introOne}><Text style={styles.text}>所在地区：北京海淀</Text></View>
              </View>
          </View>
          <View style={styles.yuTime}>
                <Text style={[styles.teamName,{marginVertical:30*width/750}]}>团队简介</Text>
          </View>

          <View style={styles.introductionBox}>
            <View style={styles.introOne}><Text style={[styles.text,{lineHeight:40*width/750}]}>{_state.intro}</Text></View>
          </View>
        </ScrollView>
           <TouchableOpacity onPress={()=>{}}>
                <GradientBox title="立即报修" styles={styles.next_action}/>
            </TouchableOpacity>
      </View>
    );
  }

};
 