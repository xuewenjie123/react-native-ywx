'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, DeviceEventEmitter,ScrollView, TouchableOpacity, RefreshControl,ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import {complaintConnectList} from '../../services/maintenanceTeam';
import {date2str} from '../../constant/constants';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});

var _navigator,_this,_state,_props;

var list=[
    {time:"2016年6月12日 09:00",code:"GD39822",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"取消"},
    {time:"2016年6月12日 10:00",code:"GD39823",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"待派"},
    {time:"2016年6月12日 11:00",code:"GD39824",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了",state:"在修",},
];
export default class ApplyRepairMyRepair extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds,
      list:list,
      loading:true,
      reset: true,
      total: 0,
      page: 1,
      size: 10,
      load: false
    }
  }
  componentDidMount(){
      // this.setState({
      //     dataSource:this.state.dataSource.cloneWithRows(list)
      //   })
        InteractionManager.runAfterInteractions(() => {
          complaintConnectList({page:1},_this.getRepairListSucc,_this.getRepairListFail)
        });
  }
  getRepairListSucc(result){
    if(result.success&&result.data.records.length){
          if(_state.reset){
              _this.setState({
                    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(result.data.records),
                    list:result.data.records,
                    total: result.data.total,
                    size: result.data.size,
                    page: result.data.current,
                    load: false,
                    reset: false,
                    start: false,
                    loading:false,
              });
          }else{
              _this.setState({
                    dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(_state.list.concat(result.data.records)),
                    list: _state.list.concat(result.data.records),
                    total: result.data.total,
                    page: result.data.current,
                    load: false,
                    loading:false,
              });
          }
  }else{
    _this.setState({
      loading:false,
      total: 0,
      page: 1,
      load: false,
      reset: false,
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
    complaintConnectList({page:_state.page+1},_this.getRepairListSucc,_this.getRepairListFail)
  }
}

onRefresh() {
  _this.setState({
    reset:true,
    load: true,
  })
   complaintConnectList({page:1},_this.getRepairListSucc,_this.getRepairListFail)
}
  rendNoneView(){
     return(
      <View style={{flex:1}}>
         <View style={styles.repair_loadbox}>
          <Image source={require('../../images/none_repair.png')} style={styles.load_img} />
          <Text style={styles.load_text}>当前还没有申请报修~</Text>
         </View>
      </View>
     )
   }
  changeChoise(rowContent){
    _state.list.map(d=>{
      if (d.code==rowContent.code) {
        d.isChoise=true
      }else {
        d.isChoise=false
      }
      return d
    })
    _this.setState({dataSource:ds.cloneWithRows(_state.list),oddNumbers:rowContent.code})
  }
  onOk(){
    if (_state.oddNumbers) {
      _navigator.goBack();
      DeviceEventEmitter.emit("ApplyRepairMyRepair",{oddNumbers:_state.oddNumbers})
    }else {
      ToastAndroid.show("请选择要投诉的报修单", ToastAndroid.SHORT);
      return false;
    }
  }
  render() {
    _this = this;
    _state=this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "我的报修",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
      rightView: (
        <TouchableOpacity  style={{flex: 1}} onPress={()=>_this.onOk()}>
          <View style={{flex: 1,flexDirection: 'row-reverse',alignItems: 'center'}}>
            <Text style={{fontSize:17,color:'#5986ff', marginRight: 15}}>确定</Text>
          </View>
        </TouchableOpacity>
      ),
    }

    return (
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
                  {_this.state.list.length?
                  <ListView
                    contentContainerStyle={{width:width,alignItems:"center"}}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    initialListSize={10}
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
                  />:
                _state.loading?
                <NavWait/>:
                  _this.rendNoneView()
                }
          </View>
    );
  }
  _renderRow(list,sectionID,rowID,){
    return(
      <View style={styles.list_box} key={rowID}>
          {list.isChoise?
            <TouchableOpacity onPress={() => {_this.changeChoise(list)}}>
            <Image source={require('../../images/setting_c.png')} style={{height:22,width:22}} />
            </TouchableOpacity>
            :
            <TouchableOpacity style={styles.kong}  onPress={() => {_this.changeChoise(list)}}>
            </TouchableOpacity>
          }
          <View style={styles.list_a}>
              <View style={styles.list_up}>
                  <Text style={[styles.list_font,{marginRight:15}]}>
                  {date2str(new Date(list.createTime.replace(/\-/g, "/")),"yyyy-MM-dd hh:mm")}</Text>
                  <Text style={styles.list_font}>工单号：</Text>
                  <Text style={styles.list_font}>{list.code}</Text>
              </View>
              <Text style={list.currentStatus=="取消"?styles.list_font_a:list.currentStatus=="待审核"?styles.list_font_d:styles.list_font_e}>{list.currentStatus}</Text>
              <View style={[styles.list_middle,{marginTop:10,marginBottom:10,flexDirection:'row'}]}>
                  <Image source={require('../../images/repair_h.png')} style={{height:12,width:12,marginRight:10}} />
                  <Text style={styles.list_font_c}>{list.complexAddress}</Text>
              </View>
              {list.currentStatus=="在修"?
                  <View style={[styles.list_middle,{marginBottom:10,flexDirection:'row'}]}>
                      <Image source={require('../../images/repair_a.png')} style={{height:12,width:12,marginRight:10}} />
                      <Text style={styles.list_font_b}>事项类型：</Text>
                  </View>
                  :null
              }
              <View style={[styles.list_down,{marginLeft:22,flexDirection:'row'}]}>
                  <Text numberOfLines={2} style={styles.list_font_b}>问题描述： {list.description}</Text>
              </View>
          </View>
      </View>

    )
  }
};
