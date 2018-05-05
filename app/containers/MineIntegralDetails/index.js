'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity,RefreshControl, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import { detail } from '../../services/myIntegral';
import NavWait from '../../components/common/NavWait'
var _navigator,_this,_state,_props;

var integralList=[
    {title:"维修支付",time:"2017-08-08 15:00:00",totle:"+50"},
    {title:"维修评价",time:"2017-08-08 15:00:00",totle:"+10"},
    {title:"维修支付",time:"2017-08-08 15:00:00",totle:"+50"},
    {title:"维修评价",time:"2017-08-08 15:00:00",totle:"+10"},
    {title:"维修支付",time:"2017-08-08 15:00:00",totle:"+50"},
    {title:"维修评价",time:"2017-08-08 15:00:00",totle:"+10"},
    {title:"维修支付",time:"2017-08-08 15:00:00",totle:"+50"},
    {title:"维修评价",time:"2017-08-08 15:00:00",totle:"+10"},
    {title:"维修支付",time:"2017-08-08 15:00:00",totle:"+50"},
    {title:"维修评价",time:"2017-08-08 15:00:00",totle:"+10"},
    {title:"维修支付",time:"2017-08-08 15:00:00",totle:"+50"},
    {title:"维修评价",time:"2017-08-08 15:00:00",totle:"+10"},
    {title:"维修支付",time:"2017-08-08 15:00:00",totle:"+50"},
    {title:"维修评价",time:"2017-08-08 15:00:00",totle:"+10"},
];
export default class MineIntegralDetails extends Component {

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
      load: false
    }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      detail({page:1},_this.detailResult,_this.detailFail)
    });
  }
  detailResult(result){
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
  detailFail(){
    _this.setState({
      loading:false,
      total: 0,
      page: 1,
      load: false,
      reset: false,
    })
  }

  backRouter(){
    _navigator.goBack()
  }
  onEndReached(){
      console.log(_state.page,_state.size);
      if(_state.page*_state.size<_state.total && !_state.load){
        _this.setState({load: true,});
        detail({page:1},_this.detailResult,_this.detailFail)
      }
  }

  onRefresh() {
      _this.setState({
        reset:true,
        load: true,
      })
      detail({page:1},_this.detailResult,_this.detailFail)
  }

  render() {
    _this = this;
    _state = this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "积分明细",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_this.backRouter()}}>
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
      <View style={styles.main}>
          <NavigatorTopBar {...NavigatorTopBarProps}/>
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
              <NavWait/>:null
            }
          </View>
      </View>
    );
  }
  _renderRow(rowContent,sectionID,rowID){
    return(
      <View  key={rowID}>
      {rowID==0?null:
        <View style={styles.line}></View>
      }
      <View style={styles.list_a} >
          <View style={styles.list_up}>
              <Text style={styles.list_font}>{rowContent.type}</Text>
              <Text style={styles.list_font_a}>{rowContent.integral}</Text>
          </View>
          <Text style={styles.list_font_b}>{rowContent.createTime}</Text>
      </View>
      </View>
    )
  }

};
