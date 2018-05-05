'use strict';
import React, { Component, } from 'react';
import { StatusBar,View, Text,Image, ScrollView, TouchableOpacity, ToastAndroid, InteractionManager,ListView} from 'react-native';
var styles =require('./styles');
import NavigatorTopBar from './../../components/NavigatorTopBar';
import { width, height } from './../../components/common/Dimensions'
import LinearGradient from 'react-native-linear-gradient';
import {paysuccess} from '../../services/myDetail';
import NavWait from '../../components/common/NavWait';

var _navigator,_this,_state,_props;

let list = {
  commodity:{
    name:'美国西北车厘子约900g',
    feilei:'新鲜水果',
    time:'2017-08-20 10:02:32',
  },
  user:{
    address:'北京市朝阳区',
    username:'彭于晏',
    tel:12131316541,
  },
  tuijian:[
    {pictureUrl:require('../../images/repair_f.png'),jifen:200,title:'约会一次'},
    {pictureUrl:require('../../images/repair_f.png'),jifen:300,title:'星巴克二代'},
    {pictureUrl:require('../../images/repair_f.png'),jifen:400,title:'巧克力'},
  ]
}
export default class PaySuccess extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:'',
      isClose:false,
      isGoHome:false,
      loading:true,
    }
  }
  componentDidMount(){
    paysuccess({page:1},_this.payList,_this.payListFail)
  }
  payList(result){
    if(result.success){
      _this.setState({
        data:result.data,
        loading:false,
      })
    }
  }
  payListFail(){
    _this.setState({
      data:list,
      loading:false,
    })
  }
  close(){
    _this.setState({isClose:!_this.state.isClose,isGoHome:false,})
    console.log(_this.state.isClose);
  }
  goHome(){
    _this.setState({isGoHome:!_this.state.isGoHome,isClose:false,})
  }
  render() {
    _this = this;
    _state = _this.state;
    _navigator = _this.props.navigation;
    let NavigatorTopBarProps = {
      visible: true,
      title: "提交成功",
      leftView: (
        <TouchableOpacity style={{flex: 1}}
          underlayColor='transparent'
          onPress={() => {_navigator.goBack()}}>
          <View style={{flex: 1, paddingLeft: 15,flexDirection: 'row',alignItems: 'center'}}>
            <Image style={{width: 22, height: 22,}} source={require('../../images/icon_d.png')}></Image>
          </View>
        </TouchableOpacity>
      ),
    }

    return (
          <View style={styles.main}>
              <NavigatorTopBar {...NavigatorTopBarProps}/>
              {_this.state.loading?<NavWait/>:
              <ScrollView>
                  <View style={styles.middle}>
                      <Image style={{width: 66, height: 66,}} source={require('../../images/repair_f.png')}></Image>
                      <View style={styles.middle_a}>
                          <View>
                              <Text numberOfLines={1} style={styles.middle_font}>美国西北车厘子 约908g</Text>
                              <Text numberOfLines={1} style={{fontSize:13,color:'#999999',marginTop:2}}>新鲜水果</Text>
                          </View>
                          <Text style={{fontSize:12,color:'#999999'}}>2017-08-20 10:02:32</Text>
                      </View>
                  </View>
                  <View style={styles.list_up_box}>
                        <Text numberOfLines={1} style={{fontSize:13,color:'#999999'}}>收货地址：北京市朝阳区</Text>
                        <Text numberOfLines={1} style={{fontSize:13,color:'#999999'}}>收  货  人：彭于晏</Text>
                        <Text numberOfLines={1} style={{fontSize:13,color:'#999999'}}>联系电话：1234567890</Text>
                        <View style={styles.list_up_a}>
                           <Image source={require('../../images/login_f.png')} style={{height:22,width:22,marginRight:5}} />
                           <Text style={{fontSize:15,color:'#999999'}}>支付成功</Text>
                        </View>
                        <View style={styles.list_up_b}>
                            <TouchableOpacity onPress={()=>{_this.close()}} style={_this.state.isClose?styles.list_up_d:styles.list_up_c}>
                                <Text style={_this.state.isClose?styles.list_button_font:styles.list_font_f}>取消工单</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>{_this.goHome()}} style={_this.state.isGoHome?styles.list_up_d:styles.list_up_c}>
                                <Text style={_this.state.isGoHome?styles.list_button_font:styles.list_font_f}>回首页</Text>
                            </TouchableOpacity>
                        </View>
                  </View>

                  <View style={styles.list_middle_box}>
                      <View style={[styles.list_text,{paddingBottom:15,paddingTop:15,borderBottomColor:'#dddddd',borderBottomWidth:1}]}>
                         <Text style={styles.list_font_d}>为你推荐</Text>
                      </View>
                      <View style={styles.list_info_box}>
                        {_this.state.data.tuijian.map((d,index)=>(
                          <TouchableOpacity  key={index} style={styles.list_info}>
                              <Image source={d.pictureUrl} style={styles.list_image} />
                              <View style={styles.list_image_a}>
                                  <Text style={styles.list_font_j}>{d.title}</Text>
                                  <Text style={styles.list_font_g}>{d.jifen}积分</Text>
                              </View>
                          </TouchableOpacity>
                        ))}
                      </View>

                  </View>
              </ScrollView>
            }
          </View>
    );
  }
};
