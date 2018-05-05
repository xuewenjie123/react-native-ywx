'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
import { width, height } from '../../components/common/Dimensions';
import LinearGradient from 'react-native-linear-gradient';
import GradientBox from '../../components/common/GradientBox';
var _navigator,_state,_this,_props;

export default class WorkConfirm extends Component {
  constructor(props) {
   super(props);
   this.state={
     imglist:[],
     loading:true,
     check:0,
     score:2.5
   }
  }
  componentDidMount(){
    _this._getimglist()
  }
  _getimglist(){
    var quan = Math.floor(_this.state.score);
    var ban =  _this.state.score-quan
    if (ban>0) {
      var kong = 4-quan
    }else {
      var kong = 5-quan
    }
    var imglist = [];
    if (quan>0) {
      for(var i = 0; i < quan; i++){
        imglist.push(<Image key={i} style={styles.repair_b} source={require('../../images/repair_d.png')}></Image>)
      }
    }
    if (ban>0) {
      imglist.push(<Image key={5} style={styles.repair_b} source={require('../../images/repair_c.png')}></Image>)
    }
    if (kong>0) {
      for(var y = 0; y < kong; y++){
        imglist.push(<Image key={6+y} style={styles.repair_b} source={require('../../images/repair_b.png')}></Image>)
      }
    }
    _this.setState({imglist:imglist})
    return imglist

  }
  check(checks){
    if(_this.state.check==checks){
      _this.setState({
        check:0
      })
    }else{
      _this.setState({
        check:checks,
      })
    }
  }
  prices(){
    _props.closeModal();
    _navigator.navigate('ChargesDetails')
  }
  render() {
    _this=this;
    _state=this.state;
    _props=this.props;
    _navigator=this.props._navigator;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={_props.visible}
        style={{alignItems:"center",justifyContent:"center",}}
        onRequestClose={() => {_props.closeModal()}}
        >
        <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000000", opacity: .3,}}>
          <TouchableOpacity style={{flex:1}} onPress={() => {
            _props.closeModal()
          }}>
          </TouchableOpacity>
        </View>
        <LinearGradient colors={['#5460ff','#5c99ff' ]} start={{x: 1.0, y: 1.0}} end={{x: 0.0, y: 0.0}} style={styles.list_img}>
            <Image style={styles.repair_f} source={require('../../images/repair_f.png')}></Image>
        </LinearGradient>
        <View style={styles.list_down_a}>
            <View style={styles.list_box_up}>
                <View style={styles.list_headImg}>
                </View>
                <View style={styles.list_right}>
                    <View style={styles.list_right_up}>
                       <Text style={styles.list_font_a}>彭于晏</Text>
                       <Text style={styles.list_font_b}>30级</Text>
                    </View>
                    <View style={styles.list_right_middle}>
                       <Text style={styles.list_font_d}>￥229</Text>
                    </View>
                    <View style={styles.list_right_down}>
                        <View style={styles.list_right_a}>
                          {_this.state.imglist.map((d,index)=>(
                            <View style={styles.require_c} key={index}>
                              {d}
                            </View>
                          ))}
                          <Text style={styles.list_font_e}>{_this.state.score}</Text>
                        </View>
                        <View>
                          <Text style={styles.list_font_f}>月成交量75单</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{flexDirection:'column'}}>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.list_font_a}>工  单  号：</Text>
                <Text style={{fontSize:13,color:'#999999'}}>GD123456</Text>
              </View>
              <View style={{flexDirection:'row'}}>
                <Text style={styles.list_font_a}>问题描述：</Text>
                <Text style={{fontSize:13,color:'#999999'}}>1小时</Text>
              </View>
              <View style={{alignItems:"center",marginTop:10}}>
                <Text style={{fontSize:30,color:"red"}}>20￥</Text>
                <TouchableOpacity onPress={()=>(_this.prices())}>
                  <Text style={{fontSize:13,color:'blue'}}>费用明细</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',justifyContent:'center'}}>
                <TouchableOpacity onPress={()=>_this.check("1")}>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:15,justifyContent:'center'}}>
                    {_this.state.check==1?
                    <Image style={{width:15,height:15}} source={require('../../images/address_a.png')}></Image>:
                    <Image style={{width:15,height:15}} source={require('../../images/address_b.png')}></Image>
                    }
                    <Image style={{width:25,height:25,marginLeft:10}} source={require('../../images/repair_j.png')}></Image>
                    <Text style={{marginLeft:5,color:'#999999'}}>微信</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style={{marginLeft:15}} onPress={()=>_this.check("2")}>
                  <View style={{flexDirection:'row',alignItems:'center',marginTop:15,justifyContent:'center'}}>
                    {_this.state.check==2?
                    <Image style={{width:15,height:15}} source={require('../../images/address_a.png')}></Image>:
                    <Image style={{width:15,height:15}} source={require('../../images/address_b.png')}></Image>
                    }
                    <Image style={{width:25,height:25,marginLeft:10}} source={require('../../images/repair_k.png')}></Image>
                    <Text style={{marginLeft:5,color:'#999999'}}>支付宝</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{alignItems:'center',marginTop:15}}>
                <GradientBox title='支付' styles={{width:width/2,height:40,borderRadius:40}}/>
              </TouchableOpacity>
            </View>
        </View>
      </Modal>
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

const styles = StyleSheet.create({
  bar:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'transparent',
    marginTop:150*width/750,
  },
  title: {
    fontSize: 13,
    color: "#999",
  },
  list_font_e:{
    fontSize:15,
    color:'#edaf37',
    margin:0,
    padding:0
  },
  require_c:{
    height:12,
    width:12,
    marginRight:5
  },
  repair_b:{
    height:12,
    width:12,
  },
  list_right_a:{
    height:15,
    flexDirection:'row',
    alignItems:'center',
  },
  list_right_down:{
    height:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:5
  },
  list_font_a:{
    fontSize:15,
    color:'#303030',
    margin:0,
    padding:0,
  },
  list_font_b:{
    fontSize:13,
    color:'#999999'
  },
  list_font_d:{
    fontSize:15,
    color:'#ef5b5b'
  },
  list_down_a:{
    width:width,
    backgroundColor:'#ffffff',
    flexDirection:'column',
    position:'absolute',
    bottom:0,
    padding:15,
    zIndex:50,
  },
  list_box_up:{
    flexDirection:'row',
  },
  repair_f:{
    height:85,
    width:85,
  },
  list_headImg:{
    width:90,
    height:70,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
  },
  list_img:{
    width:90,
    height:90,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:5,
    position:'absolute',
    left:15,
    bottom:485*width/750,
    zIndex:100,
  },
  list_right:{
    flexDirection:'column',
    width:width-130,
    marginLeft:10,
  },
  list_right_up:{
    height:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  list_right_middle:{
    height:15,
    flexDirection:'row',
    alignItems:'center',
    marginTop:5,
  },
  list_font_f:{
    fontSize:12,
    color:'#999999'
  },
});
