'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, DeviceEventEmitter,ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions'
import NavigatorTopBar from './../../components/NavigatorTopBar';
import {date2str} from '../../constant/constants'
import {getInquiriesDetail} from '../../services/workDetail'
import ShowImg from '../../components/common/ShowImg'
import NavWait from '../../components/common/NavWait';

var _navigator,_this,_state,_props;

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) =>r1!== r2});
export default class MyInquiriesDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: ds,
      inquiriesDetail:{},
      inquiriesList:[],
      imgList:[],
      matterList:[],
      len:0,
      code:this.props.navigation.state.params.code,
      visible:false,
      loading:true
    }
  }
  componentDidMount(){
    InteractionManager.runAfterInteractions(() => {
      getInquiriesDetail({workOrderCode:_state.code},_this.succFun,_this.failFun)
    });
  }

  succFun(result){
    if(result.success){
      _this.setState({
          dataSource:ds.cloneWithRows(result.data.statusList),
          inquiriesDetail:result.data,
          inquiriesList:result.data.workOrder,
          matterList:result.data.matterList,
          imgList:result.data.workOrder.fileList,
          len:result.data.statusList.length,
          loading:false
      })
    }
  }

  failFun(){
    ToastAndroid.show("请确保您的网络已连接",ToastAndroid.SHORT)
    _this.setState({
      loading:false
    })
  }

  _renderRow(row,sectionID,RowID){
    return (
      <View style={styles.list_box_a}>
          <View style={styles.list_box_b}>
            {RowID==0?<Image source={require('../../images/inquiries_c.png')} style={styles.inquiries_b} />:
             <Image source={require('../../images/inquiries_b.png')} style={styles.inquiries_b} />
            }
            <Text style={styles.list_font}>{row.operateUserName}：</Text>
            <Text style={styles.list_font_d}>{row.operateUserPhone}</Text>
          </View>
          <View style={_state.len-1==RowID?styles.list_box_c_no:styles.list_box_c}>
            <Text style={styles.list_font_cd}>{row.statusName}{row.turnUserName?("，提交至"+row.turnUserName+"处理"):null}</Text>
            {row.description?<Text style={styles.list_font_cd}>{row.description}</Text>:null}
              <Text style={styles.list_font_time}>
              {row.createTime?date2str(new Date(row.createTime.replace(/\-/g,"/")),"yyyy年MM月dd日  hh:mm"):null}
                </Text>
          </View>
      </View>
    )
  }

  closeModal(){
    _this.setState({
      visible:false
    })
  }

  backRouter(){
    _navigator.goBack()
    DeviceEventEmitter.emit("changeInquiriesDetail");
  }

  render() {
    _this = this;
    _navigator = _this.props.navigation;
    _state = this.state;
    let NavigatorTopBarProps = {
      visible: true,
      title: "问询单详情",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_this.backRouter()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
    };
    let ShowImgProps={
      closeModal:function(){
        _this.closeModal()
      },
       visible:_state.visible,
       title:"问询图片",
       imgList:_state.imgList
    }

    return (
      <View style={{flex:1}}>
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
              {_state.loading ? <NavWait/> :
              <ScrollView>
              <View style={styles.list_middle}>
                  <View style={styles.list_middle_a}>
                      <Text style={styles.list_font_a}>问 询 单 号：</Text>
                      <Text style={styles.list_font_b}>{_this.state.inquiriesList.code}</Text>
                  </View>
                  {/*<View style={styles.list_middle_a}>
                      <Text style={styles.list_font_a}>问 询 类 型：</Text>
                      <Text style={styles.list_font_b}>{_state.inquiriesDetail.code}</Text>
                  </View>*/}
                  <View style={styles.list_middle_b}>
                      <View style={styles.list_middle_type}>
                          <Text style={styles.list_font_a}>问 询 内 容：</Text>
                          <Text style={styles.list_font_b}>{_this.state.inquiriesList.description}</Text>
                      </View>
                      <TouchableOpacity style={styles.list_middle_t} onPress={()=>_this.setState({visible:true})}>
                          <Text style={styles.list_font_f}>问询图片</Text>
                      </TouchableOpacity>
                  </View>
                  <View style={styles.list_middle_c}>
                      <View style={styles.list_middle_type}>
                          <Text style={styles.list_font_a}>地           点：</Text>
                          <Text style={styles.list_font_b}>{_this.state.inquiriesList.complexAddress}</Text>
                      </View>
                      <View style={styles.list_middle_type}>
                          <Text style={styles.list_font_a}>问 询 时 间：</Text>
                          <Text style={styles.list_font_b}>  {_this.state.inquiriesList.createTime?date2str(new Date(_this.state.inquiriesList.createTime.replace(/\-/g,"/")),"yyyy年MM月dd日 hh:mm"):null}</Text>
                      </View>
                  </View>
              </View>
              {_this.state.matterList.map((d,index)=>(
                  <View key={index} style={styles.list_middle}>
                    <View style={styles.list_middle_a}>
                      <Text style={styles.list_font_a}>事           项：</Text>
                      <Text style={styles.list_font_b}>{d.code}</Text>
                    </View>
                    <View style={styles.list_middle_a}>
                      <Text style={styles.list_font_a}>问 询  类 型：</Text>
                      <Text style={styles.list_font_b}>{d.typeName}</Text>
                    </View>
                    <View style={styles.list_middle_a}>
                      <Text style={styles.list_font_a}>描           述：</Text>
                      <Text style={styles.list_font_b}>{d.description}</Text>
                    </View>
                  </View>
                ))}

              <ListView
                  dataSource={this.state.dataSource}
                  renderRow={this._renderRow.bind(this)}
                  initialListSize={10}
                  enableEmptySections={true}
                  contentContainerStyle={styles.container}
                  style={{paddingTop:10}}

              />
              </ScrollView>
            }
          </View>

          <ShowImg {...ShowImgProps}/>
      </View>
    );
  }

};
