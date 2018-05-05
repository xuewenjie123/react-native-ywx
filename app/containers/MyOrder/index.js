'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, DeviceEventEmitter,ScrollView, TouchableOpacity,RefreshControl, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import { orderList,deleteOrder} from '../../services/myOrder';
import NavWait from '../../components/common/NavWait';
import ModalDelete from '../../components/common/ModalDelete';
var _navigator,_this,_state,_props;

var list=[
    {name:"陈鸿宇"},{name:"陈鸿宇"},{name:"陈鸿宇"},
];
export default class MyOrder extends Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
    this.state = {
      dataSource: ds,
      list:[],
      types:"",
      loading:true,
      reset: true,
      total: 0,
      page: 1,
      size: 10,
      load: false,
      visible:false,
    }
  }
  componentDidMount(){
        this.subscription=DeviceEventEmitter.addListener("changeMyOrder",function(){
          _this.setState({
            reset:true
          })
          orderList({page:1,status:_state.types},_this.orderListResult,_this.orderListResultFail)
      })
      InteractionManager.runAfterInteractions(() => {
        orderList({page:1,status:_state.types},_this.orderListResult,_this.orderListResultFail)
      });
  }
  componentWillUnmount() {
    this.subscription.remove();
  }
  orderListResult(result){
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
        ToastAndroid.show(result.errorMsg,ToastAndroid.SHORT)
        _this.setState({
          loading:false,
          total: 0,
          page: 1,
          load: false,
          reset: false,
        })
      }
  }
  orderListResultFail(){
    ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
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
      reset:true,
      loading:true,
      list:[]
    })
    orderList({page:1,status:type},_this.orderListResult,_this.orderListResultFail)
  }
  onEndReached(){
    if(_state.page*_state.size<_state.total && !_state.load){
      _this.setState({load: true,});
      orderList({page:_state.page+1,status:_state.types},_this.orderListResult,_this.orderListResultFail)
    }
  }

  onRefresh() {
    _this.setState({
      reset:true,
      load: true,
    })
     orderList({page:1,status:_state.types},_this.orderListResult,_this.orderListResultFail)
 }
   nextAction(list,rowID){
     console.log(rowID+"rowID");
     if (list.status==3) {//评价
       _navigator.navigate("EvaluationDetails",{id:list.id,goodsId:list.goodsId})
     }else if (list.status==1) {//取消订单

     }else if (list.status==2) {//确认收货

     }else {//删除订单
       _this.setState({
         visible:true,
         orderId:list.id,
         rowID:rowID,
       })
     }


   }
   pay(list){//支付

   }
   closeModal(){
     _this.setState({
       visible:false
     })
   }
   deleteRow(){
     _this.setState({
       visible:false
     })
     var resultFu=function (response){
       if(response.success){
         var orderlist = _state.list;
         orderlist.splice((_state.page-1)*10+_state.rowID,1)
         _this.setState({
           dataSource: new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2}).cloneWithRows(orderlist),
           list:orderlist,
         })
         ToastAndroid.show('删除成功', ToastAndroid.SHORT);
       }else{
         ToastAndroid.show('请稍后再试', ToastAndroid.SHORT);
       }
     }
     deleteOrder(_this.state.orderId,resultFu)
    }

  render() {
    _this = this;
    _state = this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "我的订单",
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
    };
    let ModalDeleteProps={
      visible:_state.visible,
      closeModal:function(){
        _this.closeModal()
      },
      deleteRow:function(){
        _this.deleteRow()
      }
    }
    return (
        <View style={styles.main}>
            <ModalDelete {...ModalDeleteProps}/>
            <NavigatorTopBar {...NavigatorTopBarProps}/>
            <View style={styles.list_bar}>
                <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData("")}>
                    <Text style={_state.types==""?styles.list_font:styles.list_bar_font}>全部</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('1')}>
                    <Text style={_state.types=='1'?styles.list_font:styles.list_bar_font}>待支付</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('2')}>
                    <Text style={_state.types=='2'?styles.list_font:styles.list_bar_font}>待收货</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('3')}>
                    <Text style={_state.types=='3'?styles.list_font:styles.list_bar_font}>待评价</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('4')}>
                    <Text style={_state.types=='4'?styles.list_font:styles.list_bar_font}>已完成</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.list_bar_line}>
                <View style={_state.types==""?styles.list_line:styles.list_line_a}></View>
                <View style={_state.types=='1'?styles.list_line:styles.list_line_a}></View>
                <View style={_state.types=='2'?styles.list_line:styles.list_line_a}></View>
                <View style={_state.types=='3'?styles.list_line:styles.list_line_a}></View>
                <View style={_state.types=='4'?styles.list_line:styles.list_line_a}></View>
            </View>

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
                _state.loading?<NavWait/>:
                  _this.rendNoneView()
              }

        </View>
    );
  }
  _renderRow(list,sectionID,rowID){
    return(
      <View style={styles.list_a} key={rowID}>
          <TouchableOpacity style={styles.list_up} onPress={()=>{_navigator.navigate("MyOrderDetail",{id:list.id,status:list.status})}}>
              <View style={{height:60,width:60}}>
              <Image source={{uri:list.filePath}} style={{height:60,width:60}} />
              </View>
              <View style={styles.list_up_a}>
                  <View style={styles.list_up_b}>
                      <View style={styles.list_up_c}>
                        <Text numberOfLines ={2} style={styles.list_font_b}>{list.goodsName}</Text>
                      </View>
                      <Text style={styles.list_font_c}>{list.status==1?"待支付"
                                                        :list.status==2?"待收货"
                                                        :list.status==3?"待评价"
                                                        :"已完成"}</Text>
                  </View>
                  <View style={styles.list_up_b}>
                      <Text style={styles.list_font_c}>{list.integralPrice}积分</Text>
                      <Text style={styles.list_font_d}>x{list.number}</Text>
                  </View>
              </View>
          </TouchableOpacity>
          <View style={styles.list_middle_a}>
              <Text style={styles.list_font_f}>共{list.number}件商品  合计：<Text style={styles.list_font_e}>{list.integralPrice*list.number}积分</Text>（运费：￥{list.shipmentFee}）</Text>
              <View style={styles.list_middle_b}>
                  <TouchableOpacity style={[styles.list_middle_c,{marginLeft:15}]}
                  onPress={()=>{_this.nextAction(list,rowID)}}>
                      <Text style={styles.list_font_j}>{list.status==1?"取消订单"
                                                        :list.status==2?"确认收货"
                                                        :list.status==3?"评价"
                                                        :"删除订单"}</Text>
                  </TouchableOpacity>
                  {list.status==1?
                    <TouchableOpacity style={styles.list_middle_d}
                    onPress={()=>{_this.pay(list)}}>
                        <Text style={styles.list_font_d}>支付</Text>
                    </TouchableOpacity>
                  :list.status==2||list.status==3?
                    <TouchableOpacity style={styles.list_middle_d}
                    onPress={()=>{_navigator.navigate("MyOrderLogisticsDetails",{id:list.id})}}>
                        <Text style={styles.list_font_d}>查看物流</Text>
                    </TouchableOpacity>
                  :null
                  }


              </View>
          </View>
      </View>
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
