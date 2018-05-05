'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView,RefreshControl} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import {getRepairList} from '../../services/myAboutWork';
import NavWait from '../../components/common/NavWait'
var _navigator,_this,_state,_props;

var list=[
    {time:"2016年6月12日  09:00",oddNumbers:"GD39822",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"已取消",},
    {time:"2016年6月12日  10:00",oddNumbers:"GD39823",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"待派",},
    {time:"2016年6月12日  11:00",oddNumbers:"GD39824",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了",state:"在修",},
    {time:"2016年6月12日  09:00",oddNumbers:"GD39822",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"已取消",},
    {time:"2016年6月12日  10:00",oddNumbers:"GD39823",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"待派",},
    {time:"2016年6月12日  11:00",oddNumbers:"GD39824",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了",state:"在修",},
    {time:"2016年6月12日  09:00",oddNumbers:"GD39822",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"已取消",},
    {time:"2016年6月12日  10:00",oddNumbers:"GD39823",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"待派",},
    {time:"2016年6月12日  11:00",oddNumbers:"GD39824",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了",state:"在修",},
];

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
export default class MyRepair extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds,
      list:[],
      loading:true,
      reset: true,
      total: 0,
      page: 1,
      size: 10,
      load: false
    }
  }
  componentDidMount(){
        InteractionManager.runAfterInteractions(() => {
          getRepairList({page:1},_this.getRepairListSucc,_this.getRepairListFail)
        });
  }
  getRepairListSucc(result){
    if(result.success&&result.list.records.length){
          if(_state.reset){
              _this.setState({
                    dataSource: ds.cloneWithRows(result.data.records),
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
                    dataSource:ds.cloneWithRows(_state.list.concat(result.data.records)),
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
  dataSource: ds.cloneWithRows(list),
  list:list,
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
    getRepairList({page:_this.state.page+1},_this.getRepairListSucc,_this.getRepairListFail)
  }
}

onRefresh() {
  _this.setState({
    reset:true,
    load: true,
  })
   getRepairList({page:1},_this.getRepairListSucc,_this.getRepairListFail)
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
  render() {
    _this = this;
    _navigator = _this.props.navigation;
    _state=this.state;
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
      )
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
                        {_state.load? '努力加载中...' : ''}
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
  _renderRow(list,sectionID,rowID){
    return(
      <TouchableOpacity onPress={()=>_navigator.navigate('WorkOrderDetail',{code:list})}>
      <View style={styles.list_a} key={rowID}>
          <View style={styles.list_up}>
              <Text style={[styles.list_font,{marginRight:15}]}>{list.time}</Text>
              <Text style={styles.list_font}>工单号：</Text>
              <Text style={styles.list_font}>{list.oddNumbers}</Text>
          </View>
          <Text style={list.state=="已取消"?styles.list_font_a:list.state=="待派"?styles.list_font_d:styles.list_font_e}>{list.state}</Text>
          <View style={[styles.list_middle,{marginTop:10,marginBottom:10,flexDirection:'row'}]}>
              <Image source={require('../../images/repair_h.png')} style={{height:12,width:12,marginRight:10}} />
              <Text style={styles.list_font_c}>{list.address}</Text>
          </View>
          {list.state=="在修"?
              <View style={[styles.list_middle,{marginBottom:10,flexDirection:'row'}]}>
                  <Image source={require('../../images/repair_a.png')} style={{height:12,width:12,marginRight:10}} />
                  <Text style={styles.list_font_b}>事项类型：</Text>
              </View>
              :null
          }
          <View style={[styles.list_down,{marginLeft:22,flexDirection:'row'}]}>
              <Text numberOfLines={2} style={styles.list_font_b}>问题描述： {list.ProblemDescription}</Text>
          </View>
      </View>
      </TouchableOpacity>
    )
  }
};
