'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator;

class PromptModal extends Component {
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
              <Text style={{fontSize:15,color:'#303030',marginTop:15,textAlign:'center'}}>提示</Text>
              <Text style={{fontSize:13,color:'#303030',marginTop:12,textAlign:'left',width:117}}>积分不足，是否使用人民币支付</Text>
                <View style={styles.again}>
                    <View style={styles.button_box_a}>
                      <Text style={styles.button}>取消</Text>
                    </View>
                    <View style={styles.button_box}>
                      <Text style={styles.button}>是</Text>
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
    width:200,
    height: 135,
    backgroundColor: 'white',
    borderRadius : 10,
    position:'relative',
    alignItems:'center'
  },
  again: {
    position:'absolute',
    bottom:0,
    width: 200,
    height: 40,
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
    height:40,
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

module.exports = PromptModal
