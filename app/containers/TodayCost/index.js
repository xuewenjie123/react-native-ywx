'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView,RefreshControl} from 'react-native';
var styles =require('./styles');
import Dimensions from 'Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import NavWait from '../../components/common/NavWait';
import {reportCost} from '../../services/statisticalReport'
var { width, height } = Dimensions.get('window');
var _navigator,_this,_state,_props;

var list=[
    {time:"2016年6月12日  09:00",oddNumbers:"GD39822",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"已取消",},
    {time:"2016年6月12日  10:00",oddNumbers:"GD39823",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"待派",},
    {time:"2016年6月12日  11:00",oddNumbers:"GD39824",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了",state:"在修",},

];
export default class TodayCost extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
    this.state = {
      dataSource: ds,
      list:[],
      loading:true,
      reset: true,
      total: 0,
      page: 1,
      size: 10,
      type:this.props.navigation.state.params.type,
      load: false
    }
  }
  componentDidMount(){
      InteractionManager.runAfterInteractions(() => {
        reportCost({page:1,type:_state.type},_this.getTodayCost,_this.getTodayCostFail)
      });
  }

  //成功函数
  getTodayCost(result){
    if(result.success&&result.data.records.length){
      if(_state.reset){
        _this.setState({
          dataSource:_this.state.dataSource.cloneWithRows(result.data.records),
          list:result.data.records,
          total:result.data.total,
          size:result.data.size,
          page:result.data.current,
          load:false,
          reset:false,
          loading:false,
        })
      }else {
        _this.setState({
          dataSource:_this.state.dataSource.cloneWithRows(_this.state.list.concat(result.data.records)),
          list:_state.list.concat(result.data.records),
          total:result.data.total,
          page: result.data.current,
          load: false,
          loading:false,
        })
      }
    }else {
      _this.setState({
        loading:false,
        total: 0,
        page: 1,
        load: false,
        reset: false,
      })
    }
  }
  
  //失败函数
  getTodayCostFail(){
    // ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
    _this.setState({
      dataSource:_this.state.dataSource.cloneWithRows(list),
      list:list,
      loading:false,
      total: 0,
      page: 1,
      load: false,
      reset: false,
    })
  }

  //分页
  onEndReached(){
    console.log(_state.page,_state.size);
    if(_state.page*_state.size<_state.total && !_state.load){
      _this.setState({load: true,});
      reportCost({page:_this.state.page+1},_this.getTodayCost,_this.getTodayCostFail)
    }
  }
  onRefresh() {
    _this.setState({
      reset:true,
      load: true,
    })
    reportCost({page:1},_this.getTodayCost,_this.getTodayCostFail)
  }

  render() {
    _this = this;
    _state = this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "今日费用",
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
        <TouchableOpacity  style={{flex: 1}}
          onPress={() => {}}>
        </TouchableOpacity>
      ),
    }

    return (
      <View style={{flex:1}}>
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
              <View style={styles.top}>
                  <Text style={styles.top_font}>2017.08.01日费用</Text>
                  <View style={styles.top_a}>
                      <Text style={styles.top_font}>合计：</Text>
                      <Text style={{fontSize:15,color:'#ef5b5b',lineHeight:16,}}>￥300</Text>
                  </View>
              </View>
              <View style={styles.list_box}>
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
                        {_state.load ? '努力加载中...' : '没有更多数据了'}
                      </Text>
                    </View>)}
                    refreshControl={<RefreshControl refreshing={_state.load} onRefresh={_this.onRefresh.bind(_this)} colors={['#ff0000', '#00ff00','#0000ff','#3ad564']} title= {this.state.load ? '刷新中....':'下拉刷新'}
                    />}
                  />:
                  _state.loading?<NavWait/>:
                  _this.rendNoneView()
                }
              </View>
          </View>
      </View>
    );
  }
  _renderRow(list){
    return(
      <View style={styles.list_a}>
          <View style={styles.list_up}>
              <Text style={styles.list_font_data}>{list.time}</Text>
              <Text style={styles.list_font}>工单号：</Text>
              <Text style={styles.list_font}>{list.oddNumbers}</Text>
          </View>
          <Text style={styles.list_font_a}>已完成</Text>
          <View style={[styles.list_middle,{marginTop:10,marginBottom:10,flexDirection:'row'}]}>
              <Image source={require('../../images/repair_h.png')} style={{height:12,width:12,marginRight:10}} />
              <Text style={styles.list_font_c}>{list.address}</Text>
          </View>
          <View style={[styles.list_middle,{marginBottom:10,flexDirection:'row'}]}>
              <Image source={require('../../images/repair_a.png')} style={{height:12,width:12,marginRight:10}} />
              <Text style={styles.list_font_b}>事项类型：</Text>
          </View>
          <View style={styles.list_down}>
              <Text numberOfLines={1} style={[styles.list_font_b,{width:width-130}]}>问题描述： {list.ProblemDescription}</Text>
              <Text style={{color:'#ef5b5b',fontSize:13}}>-100</Text>
          </View>
      </View>
    )
  }
  rendNoneView(){
     return(
      <View style={{flex:1}}>
         <View style={styles.repair_loadbox}>
          <Image source={require('../../images/none_suggest.png')} style={styles.load_img} />
          <Text style={styles.load_text}>当前还没有提出建议~</Text>
         </View>
      </View>
     )
   }
};
