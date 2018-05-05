'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity,RefreshControl, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import NavWait from '../../components/common/NavWait';
import {repaircostlist} from '../../services/myDetail';

var _navigator,_this,_state,_props;

var list={
  records:[
    {title:'比安提维修公司',createTime:'2017.08.01',endTime:'2017.09.30',total:30000,},
    {title:'比安提维修公司',createTime:'2017.08.01',endTime:'2017.09.30',total:30000,}
  ]
};
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
export default class RepairCostList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds,
      list:[],
      types:"costlist",
      loading:true,
      reset: true,
      total: 0,
      page: 1,
      size: 10,
      load: false,
    }
  }
  componentDidMount(){
      repaircostlist({page:1,types:_this.state.types},_this.costList,_this.costListFail)
      // InteractionManager.runAfterInteractions(() => {
      // });
  }
  costList(result){
    if(result.success){
      if(_state.reset){
        _this.setState({
          dataSource:ds.cloneWithRows(result.data.records),
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
          dataSource:ds.cloneWithRows(_this.state.list.concat(result.data.records)),
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
  costListFail(){
    // ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
    _this.setState({
      data:list,
      dataSource:ds.cloneWithRows(list.records),
      list:list.records,
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
      loading:true,
    })
    repaircostlist({page:1,types:type},_this.costList,_this.costListFail)
  }

  onEndReached(){
    console.log(_state.page,_state.size);
    if(_state.page*_state.size<_state.total && !_state.load){
      _this.setState({load: true,});
      repaircostlist({page:_this.state.page+1,types:_this.state.types},_this.costList,_this.costListFail)
    }
  }
  onRefresh() {
    _this.setState({
      reset:true,
      load: true,
    })
    repaircostlist({page:1,types:_this.state.types},_this.costList,_this.costListFail)
  }
  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "维修结算单",
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
              <View style={styles.list_bar}>
                  <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('costlist')}>
                      <Text style={_state.types=='costlist'?styles.list_bar_f:styles.list_bar_font}>报修结算单</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('cancel')}>
                      <Text style={_state.types=='cancel'?styles.list_bar_f:styles.list_bar_font}>已取消</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.list_bar_line}>
                  <View style={styles.list_bar_a}>
                    <View style={_state.types=='costlist'?styles.list_line:styles.list_line_a}></View>
                  </View>
                  <View style={styles.list_bar_a}>
                    <View style={_state.types=='cancel'?styles.list_line:styles.list_line_a}></View>
                  </View>
              </View>
                  {_this.state.loading?<NavWait/>:
                  _this.state.list.length?
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
                    _this.rendNoneView()
                  }
          </View>
      </View>
    );
  }
  _renderRow(list){
    return(
      <TouchableOpacity onPress={()=>_navigator.navigate('RepairCostListDetail')}>
      <View style={styles.list_a}>
          <View style={styles.list_up}>
              <Text style={styles.list_font}>{list.title}</Text>
              <Text style={styles.list_font_c}>{_this.state.types=='costlist'?'已支付':'已取消'}</Text>
          </View>
          <View style={[styles.list_middle,{marginTop:10,marginBottom:11,flexDirection:'row'}]}>
              <Text style={styles.list_font_b}>{list.createTime}-{list.endTime}</Text>
          </View>
          <View style={[styles.list_middle,{marginBottom:10,flexDirection:'row'}]}>
              <Text style={styles.list_font}>总计：</Text>
              <Text style={styles.list_font_a}>￥{list.total}</Text>
          </View>
      </View>
    </TouchableOpacity>
    )
  }
  rendNoneView(){
     return(
      <View style={{flex:1}}>
         <View style={styles.repair_loadbox}>
          <Image source={require('../../images/none_order.png')} style={styles.load_img} />
          <Text style={styles.load_text}>当前还没有结算单哦~</Text>
         </View>
      </View>
     )
   }

};
