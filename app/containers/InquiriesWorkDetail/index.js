'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid,RefreshControl, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions'
import {getinquiriesList} from '../../services/workList';
import {date2str} from '../../constant/constants'
var _navigator,_this,_state,_props;
// var list=[
//   {createTime:"2016-6-12  09:00",code:"GD39822",complexAddress:"风景小区5号楼1202",description:"水管坏了水管坏了",currentStatus:"已取消"},
//   {createTime:"2016-6-12  10:00",code:"GD39823",complexAddress:"风景小区5号楼1202",description:"水管坏了水管坏了",currentStatus:"待派"},
//   {createTime:"2016-6-12  11:00",code:"GD39824",complexAddress:"风景小区5号楼1202",description:"水管坏了水管",currentStatus:"在修"}
// ];
export default class InquiriesWorkDetail extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
    this.state = {
      dataSource: ds,
      list:[],
      types:"1",
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
      getinquiriesList({page:1,status:_state.types},_this.getRepairListSucc,_this.getRepairListFail)
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
                      dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(_state.data.concat(result.data.records)),
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
    dataSource:new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(list),
    list:list
  })
  _this.setState({
    loading:false,
    total: 0,
    page: 1,
    load: false,
    reset: false,
  })
}
changeData(type){
  _this.setState({
    types:type,
    reset:true
  })
  getinquiriesList({page:1,status:type},_this.getRepairListSucc,_this.getRepairListFail)
}
onEndReached(){
  console.log(_state.page,_state.size);
  if(_state.page*_state.size<_state.total && !_state.load){
    _this.setState({load: true,});
    getinquiriesList({page:1,status:_state.types},_this.getRepairListSucc,_this.getRepairListFail)
  }
}

onRefresh() {
  _this.setState({
    reset:true,
    load: true,
  })
  getinquiriesList({page:1,status:_state.types},_this.getRepairListSucc,_this.getRepairListFail)
}


  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "问询工作查看",
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
      <View style={{flex:1}}>
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
              <View style={styles.list_bar}>
                  <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('1')}>
                      <Text style={_state.types==1?styles.list_bar_f:styles.list_bar_font}>代派</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('2')}>
                      <Text style={_state.types==2?styles.list_bar_f:styles.list_bar_font}>进行中</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('3')}>
                      <Text style={_state.types==3?styles.list_bar_f:styles.list_bar_font}>已完成</Text>
                  </TouchableOpacity>
             </View>
             <View style={styles.list_bar_line}>
                <View style={styles.list_bar_a}>
                  <View style={_state.types==1?styles.list_line:styles.list_line_a}></View>
                </View>
                <View style={styles.list_bar_a}>
                  <View style={_state.types==2?styles.list_line:styles.list_line_a}></View>
                </View>
                <View style={styles.list_bar_a}>
                  <View style={_state.types==3?styles.list_line:styles.list_line_a}></View>
                </View>
            </View>
                  {_this.state.list.length?
                  <ListView
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
                    _this.rendNoneView()
                }
          </View>
      </View>
    );
  }
  _renderRow(list,sectionID,rowID){
    return(
      <TouchableOpacity style={styles.list_a} onPress={()=>_navigator.navigate("MyInquiriesDetail",{code:list.code})} key={rowID}>
          <View style={styles.list_up}>
              <Text style={[styles.list_font,{marginRight:15}]}>{list.createTime}</Text>
              <Text style={styles.list_font}>建议单号：</Text>
              <Text style={styles.list_font}>{list.code}</Text>
          </View>
          <View style={[styles.list_middle,{marginTop:10,marginBottom:10,flexDirection:'row'}]}>
              <Image source={require('../../images/repair_h.png')} style={{height:12,width:12,marginRight:10}} />
              <Text style={styles.list_font_c}>{list.complexAddress}</Text>
          </View>
          <View style={[styles.list_middle,{marginBottom:10,flexDirection:'row'}]}>
              <Image source={require('../../images/inquiries_d.png')} style={{height:12,width:12,marginRight:10}} />
                  <Text style={styles.list_font_b}>事项类型：</Text>
              </View>
          <View style={[styles.list_down,{marginLeft:22,flexDirection:'row'}]}>
              <Text numberOfLines={2} style={styles.list_font_b}>问题描述： {list.description}</Text>
          </View>
      </TouchableOpacity>
    )
  }
  rendNoneView(){
     return(
      <View style={{flex:1}}>
         <View style={styles.repair_loadbox}>
          <Image source={require('../../images/none_order.png')} style={styles.load_img} />
          <Text style={styles.load_text}>当前还没有订单哦~</Text>
         </View>
      </View>
     )
   }

};
