'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, RefreshControl,InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
var _navigator,_this,_state,_props;
import NavWait from '../../components/common/NavWait';
import { getEvaluateList} from '../../services/maintenanceTeam';
import {date2str} from '../../constant/constants';
let list=[
  {imgUrl:require("../../images/address_c.png"),stars:3,name:"垂直五花肉",creatTime:"11分钟前",evaluate:"维修师傅人很热情，技能也很强，完美解决了我的问题~"},
  {imgUrl:require("../../images/address_c.png"),stars:4,name:"垂直五花肉",creatTime:"11分钟前",evaluate:"维修师傅人很热情，技能也很强，完美解决了我的问题~"},
  {imgUrl:require("../../images/address_c.png"),stars:5,name:"垂直五花肉",creatTime:"11分钟前",evaluate:"维修师傅人很热情，技能也很强，完美解决了我的问题~"},
  {imgUrl:require("../../images/address_c.png"),stars:5,name:"垂直五花肉",creatTime:"11分钟前",evaluate:"维修师傅人很热情，技能也很强，完美解决了我的问题~"}
]
export default class AllEvaluation extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
    this.state = {
      dataSource: ds,
      list:list,
      loading:false,
      reset: true,
      total: 0,
      page: 1,
      size: 20,
      load: false,
      rateType:"",
      evaluateList:[],
      personId:this.props.navigation.state.params.personId,
      dataCode:this.props.navigation.state.params.dataCode,
      isFormMajorOrProperty:this.props.navigation.state.params.isFormMajorOrProperty,
    }
  }
  componentDidMount(){
      // this.setState({
      //     dataSource:this.state.dataSource.cloneWithRows(list)
      //   })
        InteractionManager.runAfterInteractions(() => {
          getEvaluateList({page:1,evaluateType:1,personId:_state.personId,rateType:_state.rateType,
                          dataCode:_state.dataCode,
                          isFormMajorOrProperty:_state.isFormMajorOrProperty,
                          pageSize:_state.pageSize},_this.getRepairListSucc,_this.getRepairListFail)
        });
  }
    getRepairListSucc(result){
      if(result.success&&result.data.list.records.length){
            if(_state.reset){
                _this.setState({
                      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(result.data.list.records),
                      list:result.data.list.records,
                      total: result.data.list.total,
                      size: result.data.list.size,
                      page: result.data.list.current,
                      load: false,
                      reset: false,
                      start: false,
                      loading:false,
                      allNums:result.data.allNums,
                      badNums:result.data.badNums,
                      middleNums:result.data.middleNums,
                      praissNums:result.data.praissNums,
                });
            }else{
                _this.setState({
                      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(_state.list.concat(result.data.list.records)),
                      list: _state.list.concat(result.data.list.records),
                      total: result.data.list.total,
                      page: result.data.list.current,
                      load: false,
                      loading:false,
                      allNums:result.data.allNums,
                      badNums:result.data.badNums,
                      middleNums:result.data.middleNums,
                      praissNums:result.data.praissNums,
                });
            }
      }else{
        _this.setState({
          loading:false,
          total: 0,
          page: 1,
          load: false,
          reset: false,
          allNums:result.data.allNums,
          badNums:result.data.badNums,
          middleNums:result.data.middleNums,
          praissNums:result.data.praissNums,
        })
      }
    }
    getRepairListFail(){
        _this.setState({
          loading:false,
          total: 0,
          page: 1,
          load: false,
          reset: false,
        })
    }
    onEndReached(){
      console.log(_state.page,_state.size);
      if(_state.page*_state.size<_state.total && !_state.load){
        _this.setState({load: true,});
        getEvaluateList({page:_state.page+1,evaluateType:1,personId:_state.personId,rateType:_state.rateType,
                        dataCode:_state.dataCode,
                        isFormMajorOrProperty:_state.isFormMajorOrProperty,
                        pageSize:_state.pageSize},_this.getRepairListSucc,_this.getRepairListFail)
      }
    }

    onRefresh() {
      _this.setState({
        reset:true,
        load: true,
      })
      getEvaluateList({page:1,evaluateType:1,personId:_state.personId,rateType:_state.rateType,
                      dataCode:_state.dataCode,
                      isFormMajorOrProperty:_state.isFormMajorOrProperty,
                      pageSize:_state.pageSize},_this.getRepairListSucc,_this.getRepairListFail)
    }

    changeData(value){
      _this.setState({rateType:value,reset:true,loading: true})
      getEvaluateList({page:1,evaluateType:1,personId:_state.personId,rateType:value,
                      dataCode:_state.dataCode,
                      isFormMajorOrProperty:_state.isFormMajorOrProperty,
                      pageSize:_state.pageSize},_this.getRepairListSucc,_this.getRepairListFail)
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
  render() {
    _this = this;
    _state = this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "全部评价",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      )
    }

    return (
        <View style={styles.main}>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            <View style={styles.up}>
                <TouchableOpacity style={_state.rateType==""?styles.box:styles.box_a} onPress={()=>_this.changeData("")}>
                <Text style={_state.rateType==""?styles.box_text:styles.text}>全部({_state.allNums})</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_state.rateType==1?styles.box:styles.box_a} onPress={()=>_this.changeData("1")}>
                <Text style={_state.rateType==1?styles.box_text:styles.text}>好评({_state.praissNums})</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_state.rateType==2?styles.box:styles.box_a} onPress={()=>_this.changeData("2")}>
                <Text style={_state.rateType==2?styles.box_text:styles.text}>中评({_state.middleNums})</Text>
                </TouchableOpacity>
                <TouchableOpacity style={_state.rateType==3?styles.box:styles.box_a} onPress={()=>_this.changeData("3")}>
                <Text style={_state.rateType==3?styles.box_text:styles.text}>差评({_state.badNums})</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list_box}>
                {_state.loading?<NavWait/>:
                <ListView
                  dataSource={this.state.dataSource}
                  contentContainerStyle={{width:width,alignItems:"center"}}
                  renderRow={this._renderRow.bind(this)}
                  initialListSize={20}
                  enableEmptySections={true}
                  scrollRenderAheadDistance={100}
                  onEndReached={()=>_this.onEndReached()}
                  onEndReachedThreshold={100}
                  renderFooter={()=>(<View style={{padding:15,justifyContent: 'center',alignItems: 'center',}}>
                    <Text style={{fontSize:12,color:'#999',textAlign:'center',}}>
                      {_state.load? '努力加载中...' : '没有更多数据了'}
                    </Text>
                  </View>)}
                    refreshControl={
                    <RefreshControl
                      refreshing={_state.load}
                      onRefresh={_this.onRefresh.bind(_this)}
                      colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                      title= {this.state.load? '刷新中....':'下拉刷新'}
                    />
                  }
                />
              }
            </View>
        </View>
    );
  }
  _renderRow(list,sectionID,rowID,){
    return(
      <View key={rowID}>
          {rowID==0?null:
            <View style={styles.line}></View>
          }
          <View style={styles.itemevaluate} >
            <View style={styles.itemTop} >
                <Image source={list.imgUrl} style={{width:70*width/750,height:70*width/750,borderRadius:35*width/750,marginRight:30*width/750}}/>
                <View style={styles.info}>
                  <Text style={styles.text1}>{list.evaluate_user_name}</Text>
                  <View style={{flexDirection:"row"}}>{_this._getimglist(list.rate)}</View>
                </View>
                <View style={styles.itemtr}>
                  <Text style={styles.text}>{_this._timeAgo(list.create_time)}</Text>
                </View>
            </View>
            {list.evaluate?
              <View style={{width:width-30,marginTop:30*width/750}}>
              <Text numberOfLines={2} style={styles.text}>{list.evaluate}</Text>
              </View>
              :
              <View style={styles.evaluate}>
              <Text numberOfLines={2} style={styles.text}>{list.evaluate}</Text>
              </View>
            }
          </View>
      </View>
    )
  }
};
