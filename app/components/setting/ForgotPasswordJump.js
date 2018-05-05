'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator;

class ForgotPasswordJump extends Component {
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
              <Image style={{width:22,height:22,marginTop:20}} source={require('../../images/login_f.png')}></Image>
              <Text style={{fontSize:15,color:'#999999',marginTop:10,textAlign:'center',lineHeight:16}}>设置成功！</Text>
              <Text style={{fontSize:12,color:'#999999',marginTop:8,textAlign:'center',lineHeight:13}}>正在跳转至首页...</Text>

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
    flexDirection:'column',
    alignItems:'center',
    marginBottom:50,
  },
});

module.exports = ForgotPasswordJump
