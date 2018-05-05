'use strict';
import React, { Component, } from 'react';
import { StatusBar,View,TextInput, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import { width, height } from './../../components/common/Dimensions'
// import Echarts from 'native-echarts';
import color from '../../constant/color';
import {integralmall} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';
import BannerSwiper from '../../components/shopingSwiper/bannerSwiper';
import MiddleSwiper from '../../components/shopingSwiper/middleSwiper';

var _navigator,_this,_state,_props;
var lista = {
  header:[{id:1,url: require('../../images/matter_l.png')},{id:2,url: require('../../images/matter_l.png')},{id:3,url: require('../../images/matter_l.png')}],
  nick:{stay:[
                            {id:1,url: require('../../images/matter_l.png')},
                            {id:2,url: require('../../images/matter_l.png')},
                            {id:3,url: require('../../images/matter_l.png')},
                            {id:4,url: require('../../images/matter_l.png')},
            ],
        swiper:[
                            {id:1,url: require('../../images/matter_l.png')},
                            {id:2,url: require('../../images/matter_l.png')},
                            {id:3,url: require('../../images/matter_l.png')},
                            {id:4,url: require('../../images/matter_l.png')},
              ],
        scroll:[
                            {id:1,url: require('../../images/matter_l.png'),title:'机器人智能蓝牙音响充电宝',prices:'￥100',jifen:'100积分',isReserve:false},
                            {id:2,url: require('../../images/matter_l.png'),title:'机器人智能蓝牙音响充电宝',prices:'￥200',jifen:'200积分',isReserve:true},
                            {id:3,url: require('../../images/matter_l.png'),title:'机器人智能蓝牙音响充电宝',prices:'￥300',jifen:'300积分',isReserve:false},
                            {id:4,url: require('../../images/matter_l.png'),title:'机器人智能蓝牙音响充电宝',prices:'￥400',jifen:'400积分',isReserve:true},
              ],
      },
      rcdation:[
                            {id:1,url: require('../../images/matter_l.png'),title:'机器人智能蓝牙音响充电宝',prices:'￥100',jifen:'100积分',isReserve:false},
                            {id:2,url: require('../../images/matter_l.png'),title:'机器人智能蓝牙音响充电宝',prices:'￥200',jifen:'200积分',isReserve:true},
                            {id:3,url: require('../../images/matter_l.png'),title:'机器人智能蓝牙音响充电宝',prices:'￥300',jifen:'300积分',isReserve:false},
                            {id:4,url: require('../../images/matter_l.png'),title:'机器人智能蓝牙音响充电宝',prices:'￥400',jifen:'400积分',isReserve:true},
              ]
}
export default class IntegralMall extends Component {

  constructor(props) {
    super(props);
    this.state = {
      types:"a",
      list_a:[],
      loading:true,
      load:false,
      searchContent:""
    }
  }
  componentDidMount(){
    integralmall({types:_this.state.types},_this.intergralList,_this.intergralListFail)
  }
  intergralList(result){
    if(result.success&&result.data.records){
      _this.setState({
        list_a:result.data.records,
        loading:false,
        load:false,
      })
    }
  }
  intergralListFail(){
    _this.setState({
      list_a:lista,
      loading:false,
      load:false,
    })
  }
  changeData(type){
    _this.setState({
      types:type,
      load:true,
    })
    integralmall({types:type},_this.intergralList,_this.intergralListFail)
//    _this.getData(type);
  }
  navigates(){
    _navigator.navigate('CommodityDetails')
  }

  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    return (
          <View style={styles.main}>

            <View style={styles.searchHeader}>
                <TouchableOpacity style={{paddingVertical:10,paddingRight:30*width/750}} onPress={()=>_navigator.goBack()}>
                    <Image style={{width: 15, height: 15,}} source={require("../../images/icon_d.png")}></Image>
                </TouchableOpacity>
                <View style={styles.searchBox}>
                    <TextInput  underlineColorAndroid="transparent" style={{flex:1,fontSize:12,height:75*width/750,color:color.font2C,paddingLeft:10,}} onChangeText={(text)=> this.setState({searchContent:text})} value={this.state.searchContent} placeholder={"搜素商品"} ref="textInput"/>
                    <TouchableOpacity style={styles.searchAction}>
                        <Text style={{fontSize:15,color:color.border1C}}>|</Text>
                        <Image style={{width: 15, height: 15,}} source={require("../../images/s_search.png")}></Image>
                    </TouchableOpacity>
                </View>
            </View>

              <View style={styles.list_bar}>
                  <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('a')}>
                      <Text style={_state.types=='a'?styles.list_bar_f:styles.list_bar_font}>推荐</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('b')}>
                      <Text style={_state.types=='b'?styles.list_bar_f:styles.list_bar_font}>新品</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('c')}>
                      <Text style={_state.types=='c'?styles.list_bar_f:styles.list_bar_font}>区域专供</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.list_bar_a} onPress={()=>this.changeData('d')}>
                      <Text style={_state.types=='d'?styles.list_bar_f:styles.list_bar_font}>公益捐助</Text>
                  </TouchableOpacity>
              </View>
              <View style={styles.list_bar_line}>
                  <View style={styles.list_bar_a}>
                    <View style={_state.types=='a'?styles.list_line:styles.list_line_a}></View>
                  </View>
                  <View style={styles.list_bar_a}>
                    <View style={_state.types=='b'?styles.list_line:styles.list_line_a}></View>
                  </View>
                  <View style={styles.list_bar_a}>
                    <View style={_state.types=='c'?styles.list_line:styles.list_line_a}></View>
                  </View>
                  <View style={styles.list_bar_a}>
                    <View style={_state.types=='d'?styles.list_line:styles.list_line_a}></View>
                  </View>
              </View>
                {_this.state.loading?<NavWait/>:
              <ScrollView contentContainerStyle={{width:width}}>
                <BannerSwiper handler={this.navigates.bind(this)} imglist={_this.state.list_a.header}/>
                  {_state.types=='a'?
                  _this.state.load?_this._Navbar():
                  <View>
                    <View style={styles.middle}>
                        <View style={styles.middle_a}>
                            <Text style={styles.middle_font}>耐克直供</Text>
                            <TouchableOpacity style={styles.middle_b}>
                                <Text style={styles.middle_font_a}>更多</Text>
                                <Image style={{width: 12, height: 12,marginLeft:5}} source={require('../../images/icon_b.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.list_a}>
                          {_state.list_a.nick.stay.map((d,index)=>(
                            <TouchableOpacity onPress={()=>_navigator.navigate('CommodityDetails')} key={index} style={styles.middle_c} underlayColor='transparent'>
                              <Image style={{width: (width-40)/2, height:70,borderRadius:10}}
                                source={d.url}></Image>
                            </TouchableOpacity>
                          ))}

                        </View>
                        <MiddleSwiper handler={this.navigates.bind(this)} imglist={_this.state.list_a.nick.swiper}/>
                        <View style={styles.middle_bar}>
                            <ScrollView contentContainerStyle={{flexDirection:'row'}} horizontal ={true} showsHorizontalScrollIndicator  ={false}>
                                {_state.list_a.nick.scroll.map((d,index)=>(
                                <TouchableOpacity onPress={()=>_navigator.navigate('CommodityDetails')} key={index} style={styles.middle_bar_a}>
                                    <View style={styles.list_img_box_a}>
                                        <Image style={styles.list_img_a}
                                          source={require('../../images/matter_l.png')}></Image>
                                          {d.isReserve?
                                            <View style={styles.yuding_a}>
                                                <Text style={styles.yuding_font}>预定</Text>
                                            </View>
                                            :null
                                          }

                                    </View>
                                    <Text numberOfLines={2} style={[styles.bar_font,{width:100}]}>{d.title}</Text>
                                    <View style={styles.middle_b}>
                                        <Text style={styles.bar_font_a}>{d.prices}</Text>
                                        <Text style={styles.bar_font_b}>({d.jifen})</Text>
                                    </View>
                                </TouchableOpacity>
                                  ))}
                            </ScrollView>
                        </View>
                    </View>
                    <View style={styles.middle}>
                        <View style={styles.middle_a}>
                            <Text style={styles.middle_font}>人气推荐</Text>
                            <TouchableOpacity style={styles.middle_b}>
                                <Text style={styles.middle_font_a}>更多</Text>
                                <Image style={{width: 12, height: 12,marginLeft:5}} source={require('../../images/icon_b.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        {_state.list_a.rcdation.map((d,index)=>(
                          <TouchableOpacity onPress={()=>_navigator.navigate('CommodityDetails')} key={index} style={styles.down} underlayColor='transparent'>
                            <Image style={{width:150, height:90,borderRadius:10,marginRight:10}} source={d.url}></Image>
                            <View style={{justifyContent:'space-between',paddingTop:10,paddingBottom:7}}>
                                <Text numberOfLines={3} style={[styles.bar_font,{width:width-140}]}>{d.title}</Text>
                                <View style={styles.middle_b}>
                                    <Text style={styles.bar_font_a}>{d.prices}</Text>
                                    <Text style={styles.bar_font_b}>({d.jifen})</Text>
                                </View>
                            </View>
                          </TouchableOpacity>
                        ))}

                      </View>
                  </View>
                  :_state.types=='b'?
                  _this.state.load?_this._Navbar():
                  <View  style={styles.middle}>
                      <View style={[styles.middle_b,{marginBottom:15}]}>
                          <View style={styles.line}>
                          </View>
                          <Text style={[styles.middle_font,{marginLeft:15,marginRight:15}]}>新品推荐</Text>
                          <View style={styles.line}>
                          </View>
                      </View>
                      <View style={styles.list_a}>
                        {_state.list_a.nick.scroll.map((d,index)=>(
                        <TouchableOpacity onPress={()=>_navigator.navigate('CommodityDetails')} key={index} style={{width:335*width/750,marginBottom:10}}>
                            <View style={styles.list_img_box}>
                                <Image style={styles.list_img}
                                  source={require('../../images/matter_l.png')}></Image>
                                  {d.isReserve?
                                    <View style={styles.yuding}>
                                        <Text style={styles.yuding_font}>预定</Text>
                                    </View>
                                    :null
                                  }

                            </View>
                            <Text numberOfLines={2} style={[styles.bar_font,{width:335*width/750-10}]}>{d.title}</Text>
                            <View style={styles.middle_b}>
                                <Text style={styles.bar_font_a}>{d.prices}</Text>
                                <Text style={styles.bar_font_b}>({d.jifen})</Text>
                            </View>
                        </TouchableOpacity>
                          ))}
                      </View>
                  </View>
                  :_state.types=='c'?
                  _this.state.load?_this._Navbar():
                  <View>
                  <View  style={styles.middle}>
                      <View style={[styles.middle_b,{marginBottom:15}]}>
                          <View style={styles.line}>
                          </View>
                          <Text style={[styles.middle_font,{marginLeft:15,marginRight:15}]}>生鲜水果</Text>
                          <View style={styles.line}>
                          </View>
                      </View>
                      <View style={styles.list_a}>
                        {_state.list_a.nick.scroll.map((d,index)=>(
                        <TouchableOpacity onPress={()=>_navigator.navigate('CommodityDetails')} key={index} style={{width:335*width/750,marginBottom:10}}>
                            <View style={styles.list_img_box}>
                                <Image style={styles.list_img}
                                  source={require('../../images/matter_l.png')}></Image>
                                  {d.isReserve?
                                    <View style={styles.yuding}>
                                        <Text style={styles.yuding_font}>预定</Text>
                                    </View>
                                    :null
                                  }

                            </View>
                            <Text numberOfLines={2} style={[styles.bar_font,{width:335*width/750-10}]}>{d.title}</Text>
                            <View style={styles.middle_b}>
                                <Text style={styles.bar_font_a}>{d.prices}</Text>
                                <Text style={styles.bar_font_b}>({d.jifen})</Text>
                            </View>
                        </TouchableOpacity>
                          ))}
                      </View>
                  </View>
                  <View  style={styles.middle}>
                      <View style={[styles.middle_b,{marginBottom:15}]}>
                          <View style={styles.line}>
                          </View>
                          <Text style={[styles.middle_font,{marginLeft:15,marginRight:15}]}>小食糕点</Text>
                          <View style={styles.line}>
                          </View>
                      </View>
                      <View style={styles.list_a}>
                        {_state.list_a.nick.scroll.map((d,index)=>(
                        <TouchableOpacity onPress={()=>_navigator.navigate('CommodityDetails')} key={index} style={{width:335*width/750,marginBottom:10}}>
                            <View style={styles.list_img_box}>
                                <Image style={styles.list_img}
                                  source={require('../../images/matter_l.png')}></Image>
                                  {d.isReserve?
                                    <View style={styles.yuding}>
                                        <Text style={styles.yuding_font}>预定</Text>
                                    </View>
                                    :null
                                  }
                            </View>
                            <Text numberOfLines={2} style={[styles.bar_font,{width:335*width/750-10}]}>{d.title}</Text>
                            <View style={styles.middle_b}>
                                <Text style={styles.bar_font_a}>{d.prices}</Text>
                                <Text style={styles.bar_font_b}>({d.jifen})</Text>
                            </View>
                        </TouchableOpacity>
                          ))}
                      </View>
                  </View>
                  </View>
                  :null
                  }
                  {_this.state.load?null:
                  <View style={styles.last}>
                    <View style={styles.line}>
                    </View>
                    <Text style={[styles.middle_font_a,{marginLeft:15,marginRight:15}]}>我是有底线滴</Text>
                    <View style={styles.line}>
                    </View>
                  </View>
                }
              </ScrollView>
            }
          </View>
    );
  }
  _Navbar(){
    return(
      <View style={styles.bar}>
        <Image style={{width: 16, height: 16,margin:20}} source={require('../../images/clear.gif')} />
        <Text style={styles.title}>
          {"  加载中..."}
        </Text>
      </View>
    )
  }
};
