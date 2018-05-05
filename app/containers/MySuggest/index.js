'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, RefreshControl,InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
var _navigator,_this,_state,_props;
import {getsuggestionList} from '../../services/myAboutWork';
import NavWait from '../../components/common/NavWait'

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
export default class MySuggest extends Component {

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
          getsuggestionList({page:1},_this.getSuggestListSucc,_this.getSuggestListFail)
        });
  }
    getSuggestListSucc(result){
      if(result.success&&result.data.records.length){
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
                      dataSource: ds.cloneWithRows(_state.list.concat(result.data.records)),
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
    getSuggestListFail(){
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
        getsuggestionList({page:_this.state.page+1},_this.getSuggestListSucc,_this.getSuggestListFail)
      }
    }

    onRefresh() {
      _this.setState({
        reset:true,
        load: true,
      })
      getsuggestionList({page:1},_this.getSuggestListSucc,_this.getSuggestListFail)
    }
  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "我的建议",
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
                  dataSource={this.state.dataSource}
                  contentContainerStyle={{width:width,alignItems:"center"}}
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
  _renderRow(list){
    return(
      <TouchableOpacity onPress={()=>_navigator.navigate('MySuggestDetail',{code:list})}>
      <View style={styles.list_a}>
          <View style={styles.list_up}>
              <Text style={[styles.list_font,{marginRight:15}]}>{list.time}</Text>
              <Text style={styles.list_font}>建议单号：</Text>
              <Text style={styles.list_font}>{list.oddNumbers}</Text>
          </View>
          <View style={[styles.list_middle,{marginTop:10,marginBottom:10,flexDirection:'row'}]}>
              <Image source={require('../../images/repair_h.png')} style={{height:12,width:12,marginRight:10}} />
              <Text style={styles.list_font_c}>{list.address}</Text>
          </View>
          {/*<View style={[styles.list_middle,{marginBottom:10,flexDirection:'row'}]}>
              <Image source={require('../../images/advise_d.png')} style={{height:12,width:12,marginRight:10}} />
              <Text style={styles.list_font_b}>建议类型：</Text>
          </View>*/}
          <View style={[styles.list_down,{marginLeft:22,flexDirection:'row'}]}>
              <Text numberOfLines={2} style={styles.list_font_b}>建议描述： {list.ProblemDescription}</Text>
          </View>
      </View>
      </TouchableOpacity>
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
