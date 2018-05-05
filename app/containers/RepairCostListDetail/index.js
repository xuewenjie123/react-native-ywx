'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity,RefreshControl, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import NavWait from '../../components/common/NavWait';
import {repaircostlistdetail} from '../../services/myDetail';

var _navigator,_this,_state,_props,_data;

var list={
    title:'中科物理所课题研究所',
    content:'2017.01.01至2017.10.15的结算单已生成',
    tel:13231313131,
    componeny:'比安提维修公司',
    createTime:'2017.06.23',
    gettype:'银行卡转账',
    bank:'中国农业银行',
    number:'6221501620000412545',
    money:30000,
    records:[
      {time:"2016年6月12日  09:00",oddNumbers:"GD39822",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",bumen:'开发'},
      {time:"2016年6月12日  09:00",oddNumbers:"GD39822",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",bumen:'开发'},
      {time:"2016年6月12日  09:00",oddNumbers:"GD39822",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",bumen:'开发'},
      {time:"2016年6月12日  11:00",oddNumbers:"GD39824",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了",bumen:'开发'},
    ]
};
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
export default class RepairCostListDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:'',
      dataSource: ds,
      params:1,
      loading:true,
      kahao:'',
      reset: true,
      total: 0,
      page: 1,
      size: 10,
      load: false,
    }
  }
  componentDidMount(){
      repaircostlistdetail({params:1},_this.costList,_this.costListFail)
      // InteractionManager.runAfterInteractions(() => {
      // });
  }
  costList(result){
    if(result.success&&result.data.records.length){
      if(_state.reset){
        _this.setState({
          dataSource:ds.cloneWithRows(result.data.records),
          data:result.data,
          total:result.data.total,
          size:result.data.size,
          page:result.data.current,
          kahao:result.data.number.slice(0,3)+'********'+result.data.number.slice(15),
          reset:false,
          load: false,
          loading:false,
        })
      }else {
        _this.setState({
          dataSource:ds.cloneWithRows(_this.state.list.concat(result.data.records)),
          data:result.data,
          total:result.data.total,
          page: result.data.current,
          loading:false,
          load: false,
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
      dataSource:ds.cloneWithRows(list.records),
      data:list,
      loading:false,
      kahao:list.number.slice(0,3)+'********'+list.number.slice(15),
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
      repaircostlistdetail({page:_this.state.page+1},_this.costList,_this.costListFail)
    }
  }

  onRefresh() {
    _this.setState({
      reset:true,
      load: true,
    })
    repaircostlistdetail({page:1},_this.costList,_this.costListFail)
  }
  rendNoneView(){
     return(
      <View style={{flex:1,justifyContent:'center'}}>
         <View style={styles.repair_loadbox}>
          <Image source={require('../../images/none_repair.png')} style={styles.load_img} />
          <Text style={styles.load_text}>当前还没有维修单~</Text>
         </View>
      </View>
     )
   }
  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    _data = _this.state.data;
    let NavigatorTopBarProps = {
      visible: true,
      title: "结算单详情",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center',}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
    }

    return (
      <View style={{flex:1}}>
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
          {_this.state.loading?<NavWait/>:
                  <ListView
                    dataSource={_this.state.dataSource}
                    renderRow={_this._renderRow.bind(this)}
                    initialListSize={3}
                    enableEmptySections={true}
                    scrollRenderAheadDistance={100}
                    onEndReached={()=>_this.onEndReached()}
                    onEndReachedThreshold={100}
                    renderHeader={()=>_this._renderHead()}
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
                        title= {_this.state.load? '刷新中....':'下拉刷新'}
                      />
                    }
                  />
            }
          </View>
      </View>
    );
  }
  _renderRow(list,sectionID,rowID){
    return(
    <View style={{backgroundColor:'#ffffff'}}>
      <View style={rowID>0?styles.detail_b:styles.detail_a}>
      {rowID==0?<Text style={{fontSize:15,color:"#303030",marginBottom:10}}>费用明细：</Text>:null}
          <View style={[styles.list_up,{justifyContent:'space-between'}]}>
            <View style={{flexDirection:'row'}}>
              <Text style={[styles.list_font,{marginRight:15}]}>{list.time}</Text>
              <Text style={styles.list_font}>工单号：</Text>
              <Text style={styles.list_font}>{list.oddNumbers}</Text>
            </View>
              <Text style={styles.list_font}>{list.bumen}</Text>
          </View>
          <View style={[styles.list_middle,{marginTop:10,marginBottom:10,flexDirection:'row'}]}>
              <Image source={require('../../images/repair_h.png')} style={{height:12,width:12,marginRight:10}} />
              <Text style={styles.list_font_c}>{list.address}</Text>
          </View>

          <View style={[styles.list_middle,{marginBottom:10,flexDirection:'row'}]}>
              <Image source={require('../../images/repair_a.png')} style={{height:12,width:12,marginRight:10}} />
              <Text style={styles.list_font_b}>事项类型：</Text>
          </View>

          <View style={{marginLeft:22,flexDirection:'row'}}>
              <Text numberOfLines={2} style={styles.list_font_b}>问题描述： {list.ProblemDescription}</Text>
          </View>
      </View>
    </View>
    )
  }
  _renderHead(){
    return(
      <View>
        <View style={styles.list_a}>
          <Text style={{fontSize:15,color:'#303030'}}>{_data.title}:</Text>
          <Text style={{fontSize:14,color:'#303030',marginTop:10}}>{_data.content}</Text>
          <Text style={{fontSize:14,color:'#303030'}}>结算明细如下：</Text>
          <View style={{marginTop:20,flexDirection:'row',justifyContent:'space-between'}}>
              <Text></Text>
              <Text style={styles.list_font_c}>{_data.componeny}</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={styles.list_font_c}>如有问题请致电: {_data.tel}</Text>
            <Text style={styles.list_font_c}>{_data.createTime}</Text>
          </View>
        </View>
        <View style={styles.list_a}>
          <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:14,color:'#303030'}}>收款方式：</Text>
              <Text style={styles.list_font_c}>{_data.gettype}</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:5}}>
              <Text style={{fontSize:14,color:'#303030'}}>收款银行：</Text>
              <Text style={styles.list_font_c}>{_data.bank}</Text>
          </View>
          <View style={{flexDirection:'row',marginTop:3}}>
              <Text style={{fontSize:14,color:'#303030'}}>收款帐号：</Text>
              <Text style={styles.list_font_c}>{_this.state.kahao}</Text>
          </View>
        </View>
        <View style={[styles.list_a,{marginBottom:10}]}>
          <View style={{flexDirection:'row'}}>
            <Text style={{fontSize:15,color:'#303030'}}>付款金额：</Text>
            <Text style={{fontSize:15,color:'#ef5b5b'}}>￥{_data.money}</Text>
          </View>
        </View>
      </View>
    )
  }
};
