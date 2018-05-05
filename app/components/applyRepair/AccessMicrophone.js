'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator;

class AccessMicrophone extends Component {
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
            props.onClose(false)
          }}>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
            <View style={styles.title}>
              <View >
                  <Text style={{fontSize:15,color:'#303030',textAlign:'center',}}>“易维修”想使用您的麦克风</Text>
                  <Text style={{fontSize:13,color:'#999999',textAlign:'center',marginTop:13}}>若不允许，你将无法在易维修</Text>
                  <Text style={{fontSize:13,color:'#999999',}}>    中使用语音输入功能</Text>
              </View>
                <View style={styles.again}>
                    <TouchableOpacity style={styles.button_box_a} onPress={()=>{props.onClose()}}>
                      <Text style={styles.button}>不允许</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_box} onPress={()=>{props.onOKPermission()}}>
                      <Text style={styles.button}>好</Text>
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
    marginBottom:50
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
    height:100,
    backgroundColor:'#ffffff',
  }
});

module.exports = AccessMicrophone
