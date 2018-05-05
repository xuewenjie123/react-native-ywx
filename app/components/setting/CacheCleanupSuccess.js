'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator;

class CacheCleanupSuccess extends Component {
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
              <Image style={{width:22,height:22,}} source={require('../../images/login_f.png')}></Image>
              <Text style={{fontSize:13,color:'#999999',textAlign:'center'}}>共清理40.0M</Text>

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
    paddingTop:20,
    paddingBottom:20,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between'
  },
});

module.exports = CacheCleanupSuccess
