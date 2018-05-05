'use strict';
import React, { Component, } from 'react';
import { View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions'
var _navigator,_this,_state,_props;
import color from '../../constant/color';
import ModalYes from '../../components/common/ModalSystem';
import GradientBox from '../../components/common/GradientBox';
import TeamList from '../../components/workList';
import { getTeamList,getTeamPersonList } from '../../services/maintenanceTeam';
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
export default class MaintenanceTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
        stars:4.5,
        dealNum:0,
        name:"海淀分队",
        otherTalk:"1",
        member:"彭于晏",
        intro:"火麒麟猛士维续团队是一支拥有高技能工人的专业团队，全队总共10人，其中...",
        visible:false,
        display:false,
        teamList:teamList
    }
  }
  componentDidMount(){

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
  openModalSystem(){
    _this.setState({visible:true})
  }
  _orderYes(){
    _this.closeModalSystem()
  }
  closeModalSystem(){
    _this.setState({visible:false})
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
            onPress={() => {}}>
            <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
              <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
            </View>
          </TouchableOpacity>
        )
      };
      let ModalYesProps = {
        closeModal:function(){
          _this.closeModalSystem()
        },
        _orderYes:function(){
          _this._orderYes()
        },
        visible:_state.visible
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
        <ModalYes {...ModalYesProps}/>
        <TeamList {...TeamListProps}/>
        <ScrollView contentContainerStyle={styles.containerStyle}>
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

            <View style={{height:20*width/750,backgroundColor:"#f1f3f8",width:width}}></View>

            <View style={styles.yuTime}>
                <Text style={[styles.teamName,{marginVertical:30*width/750}]}>选择队员</Text>
                <TouchableOpacity style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} onPress={()=>_this.openModalList()}>
                  <Text style={[styles.textDealNum,{fontSize:13,marginRight:10}]}>选择维修队员</Text>
                  <Image source={require('../../images/icon_b.png')} style={{width:30*width/750,height:30*width/750}}/>
                </TouchableOpacity>

            </View>
            <View style={styles.yuTime}>
                <Text style={[styles.teamName,{marginVertical:30*width/750}]}>已选：{_state.member?_state.member:null}</Text>
            </View>



            <View style={{height:20*width/750,backgroundColor:"#f1f3f8",width:width}}></View>


          <View style={styles.yuTime}>
                <Text style={[styles.teamName,{marginVertical:30*width/750}]}>团队简介</Text>
          </View>

          <View style={styles.introductionBox}>
            <View style={styles.introOne}><Text style={[styles.text,{lineHeight:40*width/750}]}>{_state.intro}</Text></View>
          </View>

        </ScrollView>
            <TouchableOpacity onPress={()=>_this.openModalSystem()}>
                <GradientBox title="立即报修" styles={styles.next_action}/>
            </TouchableOpacity>

      </View>
    );
  }

};
