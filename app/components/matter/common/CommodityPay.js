'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
import { width, height } from '../../components/common/Dimensions';
var _navigator,_state,_this,_props;

export default class Pays extends Component {
  constructor(props) {
   super(props);
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
        <View style={styles.main}>
            <View style={[styles.title,{position:'relative'}]}>
              <View>
                  <Text style={{fontSize:15,color:'#303030',marginTop:15,textAlign:'center',lineHeight:16}}>支付方式</Text>
                  <TouchableOpacity onPress={()=>{_props.closeModal()}} style={{position:'absolute',top:15,right:20}} underlayColor='transparent'>
                      <Image style={{width: 15, height: 15,}} source={require('../../images/close.png')}></Image>
                  </TouchableOpacity>
              </View>
              <View>
                <View style={[{borderBottomWidth:1,borderColor: '#dddddd'},styles.pays]}>
                    <Image style={{width:25,height:25}} source={require('../../images/repair_j.png')}></Image>
                    <Text style={styles.payname}>微信</Text>
                    <TouchableOpacity style={{marginLeft:130}} underlayColor='transparent'>
                        <Image style={{width: 15, height: 15,}} source={require('../../images/icon_b.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={[{borderBottomWidth:1,borderColor: '#dddddd'},styles.pays]}>
                    <Image style={{width:25,height:25}} source={require('../../images/repair_k.png')}></Image>
                    <Text style={styles.payname}>支付宝</Text>
                    <TouchableOpacity style={{marginLeft:115}} underlayColor='transparent'>
                        <Image style={{width: 15, height: 15,}} source={require('../../images/icon_b.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={styles.pays}>
                    <Image style={{width:25,height:25}} source={require('../../images/pay.png')}></Image>
                    <Text style={styles.payname}>餐卡支付</Text>
                    <TouchableOpacity style={{marginLeft:100}} underlayColor='transparent'>
                        <Image style={{width: 15, height: 15,}} source={require('../../images/icon_b.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center',marginTop:15}}>
                  <Text style={{fontSize:14,color:'#999999'}}>请选择您的支付方式</Text>
                </View>
              </View>
          </View>
        </View>
      </Modal>
    );
  }
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    width:250,
    paddingBottom:20,
    backgroundColor: 'white',
    borderRadius : 10,
    position:'relative'
  },
  pays:{
    height:40,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
    paddingBottom:15,
    flexDirection:'row',
    alignItems:'center'
  },
  payname:{
    height:30,
    fontSize:15,
    color:'#999999',
    lineHeight:25,
    marginLeft:10
  },
  again: {
    position:'absolute',
    bottom:0,
    width: 250,
    height: 34,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#dddddd',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
    fontSize:15,
    color:'#5986ff',
    textAlign:'center',
  },
  button_box:{
    height:30,
    flex:1,
    borderLeftWidth:1,
    borderLeftColor:'#dddddd',
    borderStyle:'solid',
    justifyContent:'center',
    alignItems:'center',
  },
  button_box_a:{
    height:30,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  }
});
