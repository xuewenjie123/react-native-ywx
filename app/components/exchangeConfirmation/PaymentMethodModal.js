'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator;

class PaymentMethodModal extends Component {
  constructor(props) {
   super(props);
  }
  render() {
    var props = this.props;
    var modalProps = {
      animationType: 'slide',
      transparent: true,
      visible: props.visible,
      onRequestClose:()=>{},
    }
    return (
      <Modal {...modalProps} >
        <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000000", opacity: .1,}}>
          <TouchableOpacity style={{flex:1}} onPress={() => {
            props.onClose()
          }}>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
            <View style={styles.title}>
                <View style={styles.one}>
                   <Image style={styles.close} source={require('../../images/icon_h.png')}></Image>
                   <Text style={{fontSize:15,color:'#303030',marginTop:15,textAlign:'center'}}>支付方式</Text>
                </View>
                <View style={styles.pay}>
                    <View style={styles.pay_a}>
                       <Image style={{width:30,height:30,marginRight:5}} source={require('../../images/repair_j.png')}></Image>
                       <Text style={{fontSize:15,color:'#999999'}}>微信</Text>
                    </View>
                    <Image style={{width:15,height:15}} source={require('../../images/icon_c.png')}></Image>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pay}>
                    <View style={styles.pay_a}>
                       <Image style={{width:30,height:30,marginRight:5}} source={require('../../images/repair_k.png')}></Image>
                       <Text style={{fontSize:15,color:'#999999'}}>支付宝</Text>
                    </View>
                    <Image style={{width:15,height:15}} source={require('../../images/icon_c.png')}></Image>
                </View>
                <View style={styles.line}></View>
                <View style={styles.pay}>
                    <View style={styles.pay_a}>
                       <Image style={{width:30,height:30,marginRight:5}} source={require('../../images/pay.png')}></Image>
                       <Text style={{fontSize:15,color:'#999999'}}>餐卡支付</Text>
                    </View>
                    <Image style={{width:15,height:15}} source={require('../../images/icon_c.png')}></Image>
                </View>
                <View style={styles.one}>
                   <Text style={{fontSize:13,color:'#999999',marginTop:15,textAlign:'center'}}>请选择您的支付方式</Text>
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
    backgroundColor: 'white',
    borderRadius : 10,
    position:'relative',
    alignItems:'center'
  },
  one:{
    height:50,
    width:250,
    position:'relative'
  },
  pay:{
    height:50,
    width:250,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15,
  },
  pay_a:{
    flexDirection:'row',
    alignItems:'center'
  },
  line:{
    borderBottomWidth:1,
    borderColor:'#dddddd',
    width:220,
  },
  close:{
    height:12,
    width:12,
    position:'absolute',
    top:10,
    right:15
  }


});

module.exports = PaymentMethodModal
