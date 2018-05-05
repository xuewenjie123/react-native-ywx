'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator,_this;

class sexModal extends Component {
  constructor(props) {
   super(props);
   this.state={
     isChoose:props.sex,
   }
  }
  render() {
    _this = this;
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
              <View style={styles.text}>
              <TouchableOpacity  onPress={()=>{props.onClose()}}>
                  <Text style={{fontSize:17,color:'#999999'}}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => {props.sexAction(_this.state.isChoose)}}>
                  <Text style={{fontSize:17,color:'#5986ff'}}>完成</Text>
              </TouchableOpacity>
              </View>
              <View style={styles.sex}>
                <TouchableOpacity style={styles.list} onPress={()=>_this.setState({isChoose:"1"})}>
                <Text style={_this.state.isChoose=="1"?styles.font:styles.font_a}>男</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.list} onPress={()=>_this.setState({isChoose:"2"})}>
                <Text style={_this.state.isChoose=="2"?styles.font:styles.font_a}>女</Text>
                </TouchableOpacity>
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
    flexDirection:'column-reverse'
  },
  title: {
    width:width,
    height: 200,
    backgroundColor: 'white',
    flexDirection:'column',
    alignItems:'center',
  },
  text:{
    width:width,
    height:45,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    paddingLeft:15,
    paddingRight:15,
    borderWidth:0.5,
    borderColor:'#dddddd'
  },
  sex:{
    flex:1,
    width:width,
    justifyContent:'center',
    alignItems:'center'
  },
  list:{
    height:44,
    width:width,
    justifyContent:'center',
    alignItems:'center',
  },
  font:{
    fontSize:20,
    color:'#303030',
  },
  font_a:{
    fontSize:15,
    color:'#999999',
  }

});

module.exports = sexModal
