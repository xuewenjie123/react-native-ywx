'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView,RefreshControl, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from '../../components/common/Dimensions';
import {questionnairelist} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';

var _navigator,_this,_state,_props;

export default class Questionnaire extends Component {

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
      questionnairelist({page:1},_this.questionList,_this.questionListFail)
      // InteractionManager.runAfterInteractions(() => {
      // });
  }
  questionList(result){
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
          dataSource:_this.state.dataSource.cloneWithRows(_this.state.list.concat(result)),
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
  questionListFail(){
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
      questionnairelist({page:_this.state.page+1},_this.questionList,_this.questionListFail)
    }
  }

  onRefresh() {
    _this.setState({
      reset:true,
      load: true,
    })
    questionnairelist({page:1},_this.questionList,_this.questionListFail)
  }
  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "调查问卷",
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
      list.isJoin?
      <TouchableOpacity onPress={()=>_navigator.navigate("QuestionnaireResult",{datas:list})}>
        <View style={styles.list_a}>
          <Image style={styles.list_up} source={{uri:list.pictureUrl}}></Image>
          <View style={styles.list_down}>
              <Text style={styles.list_font}>查看详情</Text>
              <Text style={styles.list_font_a}>已参加</Text>
          </View>
        </View>
      </TouchableOpacity>:
      <TouchableOpacity onPress={()=>_navigator.navigate("QuestionnaireDetail",{datas:list})}>
        <View style={styles.list_a}>
          <Image style={styles.list_up} source={{uri:list.pictureUrl}}></Image>
          <View style={styles.list_down}>
              <Text style={styles.list_font}>查看详情</Text>
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
