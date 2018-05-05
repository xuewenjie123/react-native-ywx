'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, Image,View, TouchableOpacity, ListView, RefreshControl, AsyncStorage } from 'react-native';
import { width, height } from '../../components/common/Dimensions';
import {notices} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';

var _navigator,_this,_state;
var list=[
  {title:"紧急通知：本周末家里暖气有损坏者本周末家里暖气有损坏者...",date:"2017.08.20",resourse:"暖气服务中心",content:"本周末家里暖气有损坏或者没有温度，请拨打维修团队电话：1234567890，团队周一将离开！",isShow:false},
  {title:"紧急通知：本周末家里暖气有损坏者...",date:"2017.08.20",resourse:"暖气服务中心",content:"本周末家里暖气有损坏或者没有温度，请拨打维修团队电话：1234567890，团队周一将离开！",isShow:true},
]

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows([]);
export default class Notice extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds,
      list: [],
      loading:true,
      reset: true,
      total: 0,
      page: 1,
      size: 10,
      load: false
    }
  }

  componentDidMount(){
      notices({page:1},_this.noticeList,_this.noticeListFail)
      // InteractionManager.runAfterInteractions(() => {
      // });
  }
  noticeList(result){
    if(result.success&&result.data.records.length){
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
  noticeListFail(){
    _this.setState({
      dataSource:ds.cloneWithRows(list),
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
    notices({page:_this.state.page+1},_this.noticeList,_this.noticeListFail)
    }
  }

  onRefresh() {
    _this.setState({
      reset:true,
      load: true,
    })
    notices({page:1},_this.noticeList,_this.noticeListFail)
  }
  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    return (
      <View style={{flex: 1}}>
        {_this.state.list.length?
        <ListView
          pageSize={_state.size}
          dataSource={_state.dataSource}
          renderRow={_this._renderRow}
          initialListSize={_state.size}
          scrollRenderAheadDistance={100}
          onEndReached={()=>_this.onEndReached()}
          onEndReachedThreshold={100}
          enableEmptySections={true}
          renderFooter={()=>(<View style={{padding:15,justifyContent: 'center',alignItems: 'center',}}>
            <Text style={{fontSize:12,color:'#999',textAlign:'center',}}>
              {_state.load? '努力加载中。。。' : ''}
            </Text>
          </View>)}
          refreshControl={
            <RefreshControl
              refreshing={_state.load}
              onRefresh={_this.onRefresh.bind(this)}
            />
          }
        />:
          _state.loading?<NavWait/>:
          null
        }
      </View>
    );
  }
  _renderRow(rowData,sectionID,rowID,){
    return(
      <TouchableOpacity key={rowID} style={styles.last} onPress={()=>_navigator.navigate("MessageNoticeDetail",{datas:rowData})}>
            <View style={styles.text}>
                {!rowData.isShow?
                  <Image source={require('../../images/matter_j.png')} style={styles.matter_j} />
                  :null
                }
                <Text numberOfLines={1} style={{fontSize:15,color:'#303030',marginBottom:7}}>{rowData.title}</Text>
                <Text numberOfLines={2} style={{fontSize:13,color:'#999999',lineHeight:15,padding:0,margin:0,}}>{rowData.content}</Text>
              <View style={styles.line}></View>
              <View style={styles.come}>
                <Text style={{fontSize:12,color:'#999999'}}>{rowData.resourse}</Text>
                <Text style={{fontSize:12,color:'#999999'}}>{rowData.date}</Text>
              </View>
            </View>
      </TouchableOpacity>
    )
  }
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#f5f5f5',
  },
  last:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    position:'relative',
    height: 110,
    width: width-30,
    borderRadius : 5,
    backgroundColor: '#ffffff',
    paddingLeft:15,
    paddingRight:15,
    paddingTop:13,
    marginTop:10,
    flexDirection:'column',
  },
  come: {
    flex:1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems:'center',
  },
  line: {
    borderBottomWidth:1,
    borderBottomColor: '#ddd',
    borderStyle: 'solid',
    marginTop:10,
    },
  matter_j:{
    height:8,
    width:8,
    position:'absolute',
    top:10,
    right:10,
  }


});

module.exports = Notice
