'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView,RefreshControl} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import {mybill} from '../../services/Bill';
import NavWait from '../../components/common/NavWait';


var _navigator,_this,_state,_props;
var list = [
  {month:"本月",data:[{type:"维修支付",createTime:"2017-08-30 14:20:06",realCost:"100",materialCost:"100",personnalCost:"10",receivableCost:"110"},{type:"维修支付",createTime:"2017-08-30 14:20:06",realCost:"100",materialCost:"100",personnalCost:"10",receivableCost:"110"}]},
  {month:"七月",data:[{type:"维修支付",createTime:"2017-08-30 14:20:06",realCost:"100",materialCost:"100",personnalCost:"10",receivableCost:"110"},{type:"维修支付",createTime:"2017-08-30 14:20:06",realCost:"100",materialCost:"100",personnalCost:"10",receivableCost:"110"}]},
];

export default class MyBill extends Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}); 
    this.state = {
      dataSource: ds,
      // list:list,
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
    // this.setState({dataSource:this.state.dataSource.cloneWithRows(list)})
    
    //接口函数
    mybill({page:1},_this.getMyBill,_this.getMyBillFail)

    /*InteractionManager.runAfterInteractions(() => {
    });*/
 }
   //成功函数
  getMyBill(result){
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
  getMyBillFail(){
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
      mybill({page:_this.state.page+1},_this.getMyBill,_this.getMyBillFail)
    }
  }
  onRefresh() {
    _this.setState({
      reset:true,
      load: true,
    })
    mybill({page:1},_this.getMyBill,_this.getMyBillFail)
  }

  render() {
    _this = this;
    _state = this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "我的账单",
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
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
              <View>
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
    );
 }
 
 _renderRow(list){
   console.log(list);
     return (
         <ScrollView>
            <View style={styles.list_box}>
                <Text style={styles.list_font}>{list.month}</Text>
                {list.data.map((d,index)=>(
                  <View key={index}>
                    <View>
                      <View style={styles.list_box_a}>
                        <Text style={styles.list_font_a}>{d.type}</Text>
                        <Text style={styles.list_font}>{d.receivableCost}</Text>
                      </View>
                      <Text style={styles.list_font_b}>{d.createTime}</Text>
                    </View>
                    <View style={styles.list_line}></View>                    
                  </View>
                ))}  
                </View>
         </ScrollView>
     )
 }

 rendNoneView(){
     return(
      <View style={{flex:1}}>
         <View style={styles.repair_loadbox}>
          <Image source={require('../../images/none_suggest.png')} style={styles.load_img} />
          <Text style={styles.load_text}>当前没有更多数据~</Text>
         </View>
      </View>
     )
 }

};
