'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator;

class AccessCamera extends Component {
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
              <View >
                  <Text style={{fontSize:15,color:'#303030',textAlign:'center',}}>“易维修”想访问您的相机</Text>
                  <Text style={{fontSize:13,color:'#999999',textAlign:'center',marginTop:13}}>若不允许，你将无法在易维修</Text>
                  <Text style={{fontSize:13,color:'#999999',}}> 中拍摄照片</Text>
              </View>
                <View style={styles.again}>
                    <View style={styles.button_box_a}>
                      <Text style={styles.button}>不允许</Text>
                    </View>
                    <View style={styles.button_box}>
                      <Text style={styles.button}>好</Text>
                    </View>

                </View>
            </View>
            <View style={styles.down}>
                <View style={styles.down_a}>
                    <Text style={{fontSize:15,color:'#303030',textAlign:'center',}}>拍摄</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.down_a}>
                    <Text style={{fontSize:15,color:'#303030',textAlign:'center',}}>打开相册</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.down_a}>
                    <Text style={{fontSize:15,color:'#999999',textAlign:'center',}}>取消</Text>
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
    position:'relative'
  },

  title: {
    width:225,
    height: 130,
    backgroundColor: 'white',
    borderRadius : 10,
    position:'relative',
    alignItems:'center',
    paddingTop:13,
    marginBottom:50,
  },
  again: {
    position:'absolute',
    bottom:0,
    width: 225,
    height: 33,
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
  },
  down:{
    position:'absolute',
    bottom:0,
    left:0,
    right:0,
    height:122,
    backgroundColor:'#ffffff',
    alignItems:"center"
  },
  down_a:{
    width:250,
    height:40,
    justifyContent:'center',
    alignItems:'center',
  },
  line:{
    width:250,
    borderColor:'#dddddd',
    borderBottomWidth:1,
  }
});

module.exports = AccessCamera
