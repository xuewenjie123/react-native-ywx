'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity,RefreshControl, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import Dimensions from 'Dimensions';
import NavigatorTopBar from './../../components/NavigatorTopBar';
import MatterWork from './../../components/matter/MatterWork';
import LinearGradient from 'react-native-linear-gradient';
var { width, height } = Dimensions.get('window');
import { NavigationActions,createAction } from '../../utils'
import { connect } from 'react-redux';
import {date2str} from '../../constant/constants';
import {setStorage,getStorage} from '../../constant/storage';
var _navigator,_this,_state,_props;
var list=[
    {time:"2016年6月12日  09:00",oddNumbers:"GD39822",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"已取消",},
    {time:"2016年6月12日  10:00",oddNumbers:"GD39823",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了",state:"待派",},
//    {time:"2016年6月12日  11:00",oddNumbers:"GD39824",address:"风景小区5号楼1202",ProblemDescription:"水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了水管坏了",state:"在修",},
];
@connect(({ app }) => ({ ...app }))
export default class Matter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list:list,
      load:false,
      isManager:undefined,
      modalVisible:false
    }
  }
  componentDidMount(){
    getStorage("login",(error,data)=>{
        if(data){
          _this.setState({isManager:data.isManager})
        }
  })

  }
  onRefresh(){
      _this.setState({
          load:false
      })
  }
  render() {
    _this = this;
    _navigator = _this.props.navigation;
    _state = this.state;
    let MatterWorkProps={
      _navigator: _navigator,
      visible:_state.modalVisible,
      onClose:function(){
        _this.setState({modalVisible:false})
      },
    }
    return (
        <View style={styles.main}>
            <ScrollView
              refreshControl={
                  <RefreshControl
                      refreshing={_state.load}
                      onRefresh={_this.onRefresh}
                      colors={['#ff0000', '#00ff00','#0000ff','#3ad564']}
                      title= {this.state.load? '刷新中....':'下拉刷新'}
                  />
                  }
               >
            <View style={styles.header_box}>
                <View style={styles.header}>
                    <Text style={styles.header_font}>当前位置：{"北郊南项目部"}</Text>
                    <TouchableOpacity style={styles.header_img} onPress={()=>_navigator.navigate("MessageNotice")}>
                       <Image source={require('../../images/matter_k.png')} style={styles.matter_k} />
                       <Image source={require('../../images/matter_j.png')} style={styles.matter_j} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.date}>
               <Image source={require('../../images/matter_l.png')} style={styles.date_img} />
               <View style={styles.date_border}>
                   <View style={styles.date_top}>
                       <View style={{width:40}}>
                          <Text includeFontPadding={false} style={styles.date_font_a}>16</Text>
                          <View style={styles.yuan_a}>
                          </View>
                       </View>
                       <Text style={[styles.date_font,{marginRight:6}]}>{"星期"+"日一二三四五六".charAt(new Date().getDay())}</Text>
                   </View>
                   <View style={styles.date_bottom}>
                       <Text style={[styles.date_font,{marginLeft:4}]}>多云</Text>
                       <Text style={styles.date_font}>{date2str(new Date(),"yy/MM/dd")}</Text>
                   </View>

                   <View style={styles.date_line}></View>
               </View>
               <TouchableOpacity style={styles.data_activity} onPress={()=>_navigator.navigate("IntegralMall")}>
                   <Text style={styles.date_font}>商城活动</Text>
                   <Image source={require('../../images/icon_a.png')} style={styles.date_img_a} />
               </TouchableOpacity>
            </View>
            <View style={styles.up}>
                <View style={styles.up_a}>
                   <Image source={require('../../images/mine_n.png')} style={styles.mine_n} />
                   <Text style={styles.header_font}>报修</Text>
                </View>
                {_this.state.list.map((d,index)=>(
                  <TouchableOpacity style={styles.list_a} key={index} onPress={()=>_navigator.navigate("WorkOrderDetail",{code:d.code})}>
                      {index!==0?
                        <View style={styles.list_line}></View>:null
                      }
                      <View style={styles.list_up}>
                          <Text style={[styles.list_font,{marginRight:15}]}>2016年6月12日  09:00</Text>
                          <Text style={styles.list_font}>工单号：</Text>
                          <Text style={styles.list_font}>GD39822</Text>
                          <Text style={styles.list_font_d}>待派</Text>
                      </View>
                      <View style={[styles.list_middle,{marginTop:10,marginBottom:10,flexDirection:'row'}]}>
                          <Image source={require('../../images/repair_h.png')} style={{height:12,width:12,marginRight:10}} />
                          <Text style={styles.list_font_c}>风景小区5号楼1202</Text>
                      </View>
                      <View style={[styles.list_middle,{marginBottom:10,flexDirection:'row'}]}>
                          <Image source={require('../../images/repair_a.png')} style={{height:12,width:12,marginRight:10}} />
                          <Text style={styles.list_font_b}>事项类型：</Text>
                      </View>
                      <View style={{marginLeft:22,flexDirection:'row',width:width-100}}>
                          <Text numberOfLines={2} style={styles.list_font_b}>问题描述： 水管水管坏了坏了水管坏了</Text>
                      </View>
                  </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity style={styles.vote_list} onPress={()=>_navigator.navigate("Vote")}>
                <View style={styles.vote_up}>
                    <Image source={require('../../images/mine_l.png')} style={styles.mine_l}/>
                    <Text style={styles.header_font}>投票</Text>
                </View>
                <Text style={[styles.list_font_b,{marginLeft:27}]}>2017年度最具潜力人物投票选举中！</Text>
                <Text style={[styles.list_font,{marginLeft:27}]}>2017-08-01</Text>
            </TouchableOpacity>
            <View style={styles.list_down_a}>
                <View style={styles.list_text_b}>
                    <Image source={require('../../images/matter_q.png')} style={styles.mine_l} />
                    <Text style={styles.header_font}>积分兑换</Text>
                </View>
                <View style={styles.list_up_box}>
                    <Image source={require('../../images/repair_f.png')} style={{height:60,width:60}} />
                    <View style={styles.list_up_a}>
                        <View style={styles.list_up_b}>
                            <View style={styles.list_up_c}>
                              <Text numberOfLines ={2} style={styles.list_font_b}>良品铺子肉松饼一整箱办公室零食良品铺子肉松饼一整箱办公室零食良品铺子肉松饼一整箱办公室零食（约50个）</Text>
                            </View>
                            <Text style={styles.list_font_cc}>待收货</Text>
                        </View>
                        <View style={styles.list_up_b}>
                            <Text style={styles.list_font_cc}>50积分</Text>
                            <Text style={styles.list_font_c}>x1</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.list_text}>
                   <Text style={[styles.list_font_b,{marginTop:2}]}>金额：</Text>
                   <View style={{flex:1}}>
                       <View style={[styles.list_text_a,{marginBottom:10}]}>
                          <Text style={styles.list_font_c}>商品</Text>
                          <Text style={styles.list_font_c}>50积分</Text>
                       </View>
                       <View style={styles.list_text_a}>
                          <Text style={styles.list_font_c}>运费</Text>
                          <Text style={styles.list_font_c}>￥10</Text>
                       </View>
                   </View>
                </View>
                <View style={styles.list_all}>
                   <Text style={styles.list_font_c}>（运费：￥10）</Text>
                   <Text style={styles.list_font_g}>50积分</Text>
                   <Text style={styles.list_font_c}>合计：</Text>
                </View>
                <View style={styles.list_button_box}>
                    <Text style={styles.list_font_c}>2017-08-01 12:12:00</Text>
                    <View style={styles.list_up}>
                      <View style={[styles.list_button,{marginRight:10}]}>
                        <Text style={styles.list_font_c}>查看物流</Text>
                      </View>
                      <TouchableOpacity style={styles.list_button_a} onPress={()=>{_navigator.navigate("LoginCode")}}>
                        <Text style={styles.list_font_ccc}>确认收货</Text>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
            </ScrollView>
            {_state.isManager?
              <TouchableOpacity style={styles.go_top} onPress={()=>_this.setState({modalVisible:true})}>
                  <LinearGradient colors={['#5460ff','#5c99ff']} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}}
                  style={styles.go_top_a}>
                      <Image source={require('../../images/icon_e.png')} style={styles.icon_e} />
                  </LinearGradient>
              </TouchableOpacity>
              :null
            }
            <MatterWork {...MatterWorkProps}/>
        </View>
    );
  }

};
