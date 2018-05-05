'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator;

class PasswordFail extends Component {
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
              <Image style={{width:22,height:22,}} source={require('../../images/setting_d.png')}></Image>
              <View style={styles.text}>
              <Text style={{fontSize:15,color:'#999999',textAlign:'left',lineHeight:16}}>哎呀，连接中断</Text>
              <Text style={{fontSize:15,color:'#999999',textAlign:'left',lineHeight:16}}>请重新修改</Text>
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
    width:150,
    height: 100,
    backgroundColor: 'white',
    borderRadius : 10,
    paddingTop:15,
    paddingBottom:15,
    marginBottom:50,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
  },

});

module.exports = PasswordFail
