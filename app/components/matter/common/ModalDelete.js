'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator,_state,_this,_props;

class Logout extends Component {
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
            <View style={styles.title}>
              <Text style={{fontSize:15,color:'#303030',marginTop:15,textAlign:'center',lineHeight:16}}>提示</Text>
              <Text style={{fontSize:13,color:'#999999',marginTop:20,textAlign:'center'}}>你确定要删除吗？</Text>
                <View style={styles.again}>
                    <TouchableOpacity style={styles.button_box_a} onPress={() => {_props.closeModal()}}>
                      <Text style={styles.button}>取消</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button_box} onPress={() => {_props.deleteRow()}}>
                      <Text style={styles.button}>确定</Text>
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
  },

  title: {
    width:201,
    height: 120,
    backgroundColor: 'white',
    borderRadius : 10,
    position:'relative'
  },
  again: {
    position:'absolute',
    bottom:0,
    width: 201,
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

module.exports = Logout
