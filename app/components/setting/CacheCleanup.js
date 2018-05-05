'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator;

class CacheCleanup extends Component {
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
              <Image style={{width:16,height:16,}} source={require('../../images/clear.gif')}></Image>
              <Text style={{fontSize:13,color:'#999999',textAlign:'center',lineHeight:14}}>缓存清理中...</Text>

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
    paddingTop:25,
    paddingBottom:20,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
  },
});

module.exports = CacheCleanup
