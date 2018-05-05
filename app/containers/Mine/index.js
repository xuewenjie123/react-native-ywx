'use strict';
import React, { Component, } from 'react';
import { ScrollView,View,Image,TouchableOpacity,StatusBar,Text,ToastAndroid,InteractionManager,} from 'react-native';
var styles =require('./styles');
import { width, height } from '../../components/common/Dimensions';
var _this,_navigator,_state;
import LinearGradient from 'react-native-linear-gradient';
import { NavigationActions,createAction } from '../../utils';
import { connect } from 'react-redux';
import { integralList} from '../../services/myIntegral';
import {getStorage} from '../../constant/storage'
@connect(({ app }) => ({ ...app }))
export default class Mine extends Component {
    constructor(props) {
        super(props);
        this.state={
          total:0,
        }
    }
    componentDidMount(){
         console.log(this.props);
         integralList({},_this.integralListResult)
    }
    integralListResult(response){
        if(response.success){
           _this.setState({
             total:response.data,
           })
        }else {
          ToastAndroid.show(response.errorMsg, ToastAndroid.SHORT);
        }
    }


    _NavgateRouter(str,routerData){
        getStorage("login",function(error,data){
            if(data){
              _navigator.navigate(str,routerData)
            }else {
              ToastAndroid.show('请先登录',ToastAndroid.SHORT)
              _navigator.navigate('LoginPassword',{router:"Mine"})
            }
        })
      }

     render(){
       _this=this;
       _state=_this.state;
       _navigator=_this.props.navigation;
       return(
        <View style={styles.main}> 
        <ScrollView  contentContainerStyle={{width:width,alignItems:"center"}}>
              <LinearGradient colors={['#5460ff','#5c99ff' ]} style={styles.header}>
                  <StatusBar
                    translucent={true}
                    backgroundColor={"transparent"}
                    barStyle="dark-content"
                  />

                  <View style={styles.header_a}>
                      <View style={styles.header_box}>
                          <LinearGradient colors={['#8aa0ff','#8db6ff' ]} style={styles.header_person}>
                              <Image source={{uri:_this.props.headImg}} style={styles.header_img} />
                          </LinearGradient>
                          <TouchableOpacity style={styles.header_info} onPress={()=>_this._NavgateRouter("LoginPassword",{router:"Mine"})}>
                              <Text style={styles.header_name}>{_this.props.userName}</Text>
                              <Text style={styles.header_tel}>{_this.props.telephone}</Text>
                          </TouchableOpacity>
                      </View>
                      <TouchableOpacity style={styles.header_right} onPress={()=>_this._NavgateRouter("MineAccount",{router:"Mine"})}>
                          <Text style={styles.header_font}>账户管理</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.header_num}  onPress={()=>_this._NavgateRouter("IntegralMall",{router:"Mine"})}>
                          <Image source={require('../../images/mine_c.png')} style={styles.mine_c} />
                          <Text style={styles.header_font}>{_this.state.total}积分</Text>
                          <Image source={require('../../images/icon_a.png')} style={styles.icon_a} />
                      </TouchableOpacity>
                  </View>
                  <TouchableOpacity style={styles.mine_o} onPress={()=>_navigator.navigate("MySetting",{router:"Mine"})}>
                  <Image source={require('../../images/mine_o.png')} style={{height:22,width:22}} />
                  </TouchableOpacity>
              </LinearGradient>

                  <View style={styles.down_box}>
                  <TouchableOpacity style={styles.up_box_a} onPress={()=>_this._NavgateRouter("MyOrder",{router:"Mine"})}>
                      <View style={styles.up_box_b}>
                          <Image source={require('../../images/mine_f.png')} style={styles.mine_d} />
                          <Text style={styles.font}>我的订单</Text>
                      </View>
                      <Image source={require('../../images/icon_b.png')} style={styles.icon_b} />
                  </TouchableOpacity>
                  </View>
                  <View style={styles.up_box}>
                      <TouchableOpacity style={styles.up_box_a} onPress={()=>_this._NavgateRouter("MineCompany",{router:"Mine"})}>
                          <View style={styles.up_box_b}>
                              <Image source={require('../../images/mine_d.png')} style={styles.mine_d} />
                              <Text style={styles.font}>所在单位/小区</Text>
                          </View>
                          <View style={styles.up_box_b}>
                              <Text style={styles.font_a}>北郊南</Text>
                              <Image source={require('../../images/icon_b.png')} style={styles.icon_b} />
                          </View>
                      </TouchableOpacity>
                      <View style={styles.up_line}></View>
                      <TouchableOpacity style={styles.up_box_a} onPress={()=>_this._NavgateRouter("MineAddress",{router:"Mine"})}>
                          <View style={styles.up_box_b}>
                              <Image source={require('../../images/mine_e.png')} style={styles.mine_d} />
                              <Text style={styles.font}>地址管理</Text>
                          </View>
                          <Image source={require('../../images/icon_b.png')} style={styles.icon_b} />
                      </TouchableOpacity>
                  </View>
                  <View style={styles.middle_box}>
                      <TouchableOpacity style={styles.up_box_a} onPress={()=>_this._NavgateRouter("MyRepair",{router:"Mine"})}>
                          <View style={styles.up_box_b}>
                              <Image source={require('../../images/mine_n.png')} style={styles.mine_d} />
                              <Text style={styles.font}>我的报修</Text>
                          </View>
                          <Image source={require('../../images/icon_b.png')} style={styles.icon_b} />
                      </TouchableOpacity> 

                      <View style={styles.up_line}></View>
                      <TouchableOpacity style={styles.up_box_a} onPress={()=>_this._NavgateRouter("MyComplaint",{router:"Mine"})}>
                          <View style={styles.up_box_b}>
                              <Image source={require('../../images/mine_g.png')} style={styles.mine_d} />
                              <Text style={styles.font}>我的投诉</Text>
                          </View>
                          <Image source={require('../../images/icon_b.png')} style={styles.icon_b} />
                      </TouchableOpacity>
                      <View style={styles.up_line}></View>
                      <TouchableOpacity style={styles.up_box_a} onPress={()=>_this._NavgateRouter("MySuggest",{router:"Mine"})}>
                          <View style={styles.up_box_b}>
                              <Image source={require('../../images/mine_h.png')} style={styles.mine_d} />
                              <Text style={styles.font}>我的建议</Text>
                          </View>
                          <Image source={require('../../images/icon_b.png')} style={styles.icon_b} />
                      </TouchableOpacity>
                      <View style={styles.up_line}></View>
                      <TouchableOpacity style={styles.up_box_a} onPress={()=>_this._NavgateRouter("MyInquiries",{router:"Mine"})}>
                          <View style={styles.up_box_b}>
                              <Image source={require('../../images/mine_i.png')} style={styles.mine_d} />
                              <Text style={styles.font}>我的问询</Text>
                          </View>
                          <Image source={require('../../images/icon_b.png')} style={styles.icon_b} />
                      </TouchableOpacity>
                      <View style={styles.up_line}></View>
                      <TouchableOpacity style={styles.up_box_a} onPress={()=>_this._NavgateRouter("MyActivity",{router:"Mine"})}>
                          <View style={styles.up_box_b}>
                              <Image source={require('../../images/mine_j.png')} style={styles.mine_d} />
                              <Text style={styles.font}>我的活动</Text>
                          </View>
                          <Image source={require('../../images/icon_b.png')} style={styles.icon_b} />
                      </TouchableOpacity>
                      <View style={styles.up_line}></View>
                      <TouchableOpacity style={styles.up_box_a} onPress={()=>_this._NavgateRouter("MyInvestigation",{router:"Mine"})}>
                          <View style={styles.up_box_b}>
                              <Image source={require('../../images/mine_k.png')} style={styles.mine_d} />
                              <Text style={styles.font}>我的调查</Text>
                          </View>
                          <Image source={require('../../images/icon_b.png')} style={styles.icon_b} />
                      </TouchableOpacity>
                      <View style={styles.up_line}></View>
                      <TouchableOpacity style={styles.up_box_a} onPress={()=>_this._NavgateRouter("MyVote",{router:"Mine"})}>
                          <View style={styles.up_box_b}>
                              <Image source={require('../../images/mine_l.png')} style={styles.mine_d} />
                              <Text style={styles.font}>我的投票</Text>
                          </View>
                          <Image source={require('../../images/icon_b.png')} style={styles.icon_b} />
                      </TouchableOpacity>
                  </View>

              </ScrollView>

        </View>

       )
     }
   }
