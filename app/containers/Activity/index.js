'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity,RefreshControl, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import {activitylist} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';

var _navigator,_this,_state,_props;

export default class Activity extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
    this.state = {
      dataSource: ds,
      list:[],
      loading:true,
      reset: true,
      total: 10,
      page: 1,
      size: 10,
      load: false,
    }
  }
  componentDidMount(){
      activitylist({page:1},_this.activityList,_this.activityListFail)
      // InteractionManager.runAfterInteractions(() => {
      // });
  }
  activityList(result){
    if(result.success&&result.data.records.length){
      if(_state.reset){
        _this.setState({
          dataSource:_this.state.dataSource.cloneWithRows(result.data.records),
          list:result.data.records,
          total:result.data.total,
          page:result.data.current,
          size:result.data.size,
          load:false,
          reset:false,
          loading:false,
        })
      }else {
        _this.setState({
          dataSource:_this.state.dataSource.cloneWithRows(_this.state.list.concat(result.data.records)),
          list:_this.state.list.concat(result.data.records),
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
  activityListFail(){
    ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
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
      activitylist({page:_this.state.page+1},_this.activityList,_this.activityListFail)
    }
  }

  onRefresh() {
    _this.setState({
      reset:true,
      load: true,
    })
    activitylist({page:1},_this.activityList,_this.activityListFail)
  }
  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "活动",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
    }

    return (
      <View style={{flex:1}}>
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
      <TouchableOpacity onPress={()=>_navigator.navigate("ActivityDetail",{datas:list})}>
        <View style={styles.list_a}>
          <Image style={styles.list_up} source={require('../../images/repair_f.png')}></Image>
          <View style={styles.list_down}>
              <Text style={styles.list_font}>{list.id}{list.partACompanyId}</Text>
              {list.isJoin?
                <Text style={styles.list_font_a}>已参加</Text>
                :null
              }
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  rendNoneView(){
     return(
        <View style={{flex:1}}>
          <View style={styles.repair_loadbox}>
            <Image source={require('../../images/none_activity.png')} style={styles.load_img} />
            <Text style={styles.load_text}>还没有参加任何活动~</Text>
         </View>
        </View>
     )
   }
};
