'use strict';
import React, { Component, } from 'react';
import {TextInput, View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import Dimensions from 'Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
var { width, height } = Dimensions.get('window');
import color from '../../constant/color';
import { getTeamList} from '../../services/maintenanceTeam';
var _navigator,_this,_state,_props;
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
var recommendlsit=[
    {imgurl: require('../../images/s_img1.png'),title: "海淀分队",channelId:5,router: "Journalism",},
    {imgurl: require('../../images/s_img2.png'),title: "铁道游击队",channelId:8,router: "Journalism",},
    {imgurl: require('../../images/s_img3.png'),title: "金牌中医",channelId:18,router: "Journalism",},
    {imgurl: require('../../images/s_img4.png'),title: "发现更多",channelId:"",router: "Journalism",},
];
var teamlist=[
    {employee_id:"1111",imgurl: require('../../images/s_img5.png'),employee_name:"火麒麟猛士",rate:3.5,price:235,range:"500m",nums:75,status:1},
    {employee_id:"2222",imgurl: require('../../images/s_img5.png'),employee_name:"汽车人",rate:4,price:235,range:"500m",nums:75,status:1,},
    {employee_id:"3333",imgurl: require('../../images/s_img5.png'),employee_name:"至尊宝",rate:5,price:235,range:"500m",nums:75,status:0,job_id:"水工"},
    {employee_id:"4444",imgurl: require('../../images/s_img5.png'),employee_name:"火麒麟猛士",rate:2.5,price:235,range:"500m",nums:75,status:1},
];
export default class Repair extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds,
      teamlist:teamlist,
      recommendlsit:recommendlsit,
      orderByType:"ALL",
      searchContent:"",
      loading:false,
      latitude:this.props.navigation.state.params.latitude,
      longitude:this.props.navigation.state.params.longitude,
      isFormMajorOrProperty:"",
      id:"",
      dataCode:"",
      isNextaction:false,


    }
  }
  componentDidMount(){
      InteractionManager.runAfterInteractions(() => {
        // this.setState({
        //     dataSource:this.state.dataSource.cloneWithRows(teamlist)
        //   })
        getTeamList({latitude:_state.latitude,longitude:_state.longitude,orderByType:_state.orderByType},_this.getRepairResult)
      });
  }
  getRepairResult(response){
    if(response.success){
      if (response.data) {
        _this.setState({
          dataSource: _this.state.dataSource.cloneWithRows(response.data),
          teamlist:response.data,
        })
      }else {
        ToastAndroid.show("周边暂无维修人员", ToastAndroid.SHORT);
        return false;
      }
    }else {
      ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
      return false;
    }
  }
  goMaintenanceWorker(){
    if (_state.isNextaction) {
      _navigator.navigate("MaintenanceWorker",{isFormMajorOrProperty:_state.isFormMajorOrProperty,
                                                id:_state.id,dataCode:_state.dataCode,
                                                latitude:_state.latitude,
                                                longitude:_state.longitude})
    }else {
      ToastAndroid.show("请选择维修人员", ToastAndroid.SHORT);
      return false;
    }
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
  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    return (
          <View style={styles.main}>
                 <ListView
                    renderHeader={this._renderHeader.bind(this)}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(_this)}
                    initialListSize={10}
                    enableEmptySections={true}
                    contentContainerStyle={styles.containerStyle}
                  />
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.jump} onPress={()=>{_navigator.navigate("ApplyRepair")}}>
                      <Text style={styles.textJump}>跳过</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.next_action} onPress={()=>{_this.goMaintenanceWorker()}}>
                      <Text style={styles.text_next}>下一步</Text>
                    </TouchableOpacity>
                </View>
          </View>
    );
  }
  changeData(orderByType){
    _this.setState({orderByType:orderByType})
    getTeamList({latitude:_state.latitude,longitude:_state.longitude,orderByType:orderByType},_this.getRepairResult)
  }
  isSelect(rowContent){
    _state.teamlist.map(d=>{
      if (d.employee_id==rowContent.employee_id) {
        d.select=true
      }else {
        d.select=false
      }
      return d
    })
    _this.setState({dataSource:ds.cloneWithRows(_state.teamlist),
                    id:rowContent.id,
                    dataCode:rowContent.dataCode,
                    isFormMajorOrProperty:rowContent.isFormMajorOrProperty,
                    isNextaction:true})
  }
  _renderHeader(){
      return (
        <View style={styles.renderHeader}>

             <View style={styles.searchHeader}>
               <TouchableOpacity onPress={()=>_navigator.goBack()}>
                    <Image style={{width: 15, height: 15,}} source={require("../../images/icon_d.png")}></Image>
               </TouchableOpacity>
               <View style={styles.searchBox}>
                  <TextInput  underlineColorAndroid="transparent" style={{flex:1,fontSize:12,color:color.font2C,paddingLeft:10,}} onChangeText={(text)=> this.setState({searchContent:text})} value={this.state.searchContent} placeholder={"请输入维修小队或个人名称"} ref={"textInput"}/>
                <TouchableOpacity style={styles.searchAction}>
                    <Text style={{fontSize:15,color:color.border1C}}>|</Text>
                    <Image style={{width: 15, height: 15,}} source={require("../../images/s_search.png")}></Image>
                </TouchableOpacity>

               </View>
            </View>

            <View style={styles.order_header}>
                <TouchableOpacity style={styles.info_btn} onPress={()=>this.changeData('ALL')}>
                    <View style={_state.orderByType=='ALL'?styles.active:null}>
                       <Text style={[styles.orders_text,_state.orderByType=='ALL'?styles.activeText:null]}>综合</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.info_btn} onPress={()=>this.changeData('JULI')}>
                    <View style={_state.orderByType=='JULI'?styles.active:null}>
                       <Text style={[styles.orders_text,_state.orderByType=='JULI'?styles.activeText:null]}>距离</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.info_btn} onPress={()=>this.changeData('LEVEL')}>
                    <View style={_state.orderByType=='LEVEL'?styles.active:null}>
                        <Text style={[styles.orders_text,_state.orderByType=='LEVEL'?styles.activeText:null]}>等级</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.info_btn} onPress={()=>this.changeData('RATE')}>
                    <View style={_state.orderByType=='RATE'?styles.active:null}>
                        <Text style={[styles.orders_text,_state.orderByType=='RATE'?styles.activeText:null]}>好评</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.info_btn} onPress={()=>this.changeData('STATUS')}>
                    <View style={_state.orderByType=='STATUS'?styles.active:null}>
                       <Text style={[styles.orders_text,_state.orderByType=='STATUS'?styles.activeText:null]}>空闲</Text>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={{height:20*width/750,backgroundColor:"#f1f3f8",width:width}}></View>

            <View style={[styles.listHeader,{borderBottomWidth:0.5,borderColor:color.border1C}]}>
                <Text style={styles.teamName}>为你推荐</Text>
            </View>
            <View style={styles.recommendlsit}>
                {_state.recommendlsit.map((d,index)=>(
                    <TouchableOpacity key={index} style={styles.info_a} underlayColor='transparent'
                    onPress={() => {}}>
                    <Image style={{width: 64, height: 62,marginBottom:8,}} source={d.imgurl}></Image>
                    <Text style={styles.text_a}>
                        {d.title}
                    </Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{height:20*width/750,backgroundColor:"#f1f3f8",width:width}}></View>
            <View style={styles.listHeader}>
                <Text style={styles.teamName}>周边小队</Text>
                <Text style={styles.textlu}>离我最近</Text>
            </View>
        </View>

      )
  }
  _renderRow(rowContent,selectID,rowID){
      var yuNum = rowContent.rate-Math.floor(rowContent.rate);
    return(
      <View style={styles.teamBox}>
          <TouchableOpacity style={styles.selectBox} onPress={()=>{_this.isSelect(rowContent)}}>
                {!rowContent.select?<Image source={require('../../images/s_noselect.png')} style={{width:44*width/750,height:44*width/750}}/>
                :<Image source={require('../../images/s_selected.png')} style={{width:44*width/750,height:44*width/750}}/>}
          </TouchableOpacity>
          <View style={styles.imgBox}>
               <Image source={rowContent.imgurl} style={{width:117*width/750,height:117*width/750,marginLeft:30*width/750}}/>
          </View>
          <View style={styles.detailBox}>
                <View style={styles.detailTitle}>
                    <View style={styles.teamState}>
                        <Text style={styles.teamName}>{rowContent.employee_name}</Text>
                        {rowContent.job_id?<Text style={styles.textWork}>{rowContent.jobName}</Text>:null}
                        {rowContent.status==1?<Image source={require('../../images/s_red_busy.png')} style={{width:32*width/750,height:32*width/750}}/>:<Image source={require('../../images/s_nobusy.png')} style={{width:32*width/750,height:32*width/750}}/>}
                    </View>
                    <Text style={styles.textPrice}>{"￥"+rowContent.price}</Text>
                </View>
                <View style={styles.dealInfoBox}>
                    <View style={styles.startBox}>
                        <View style={{flexDirection:"row"}}>{_this._getimglist(rowContent.rate)}</View>
                        <Text style={styles.textStart}>{yuNum>0?rowContent.rate+"":rowContent.rate+".0"}</Text>
                    </View>

                    <View style={styles.dealNumBox}>
                        <Text style={styles.textDealNum}>{"月成交量"+rowContent.nums+"单"}</Text>
                        <Text style={styles.textDealNum}>{rowContent.range}</Text>
                    </View>
                </View>
          </View>
      </View>
    )
  }

};
