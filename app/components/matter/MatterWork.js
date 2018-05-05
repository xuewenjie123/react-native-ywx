'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');

var _navigator;

class MatterWork extends Component {
  constructor(props) {
   super(props);
  }
  render() {
    _navigator = this.props._navigator;
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
            <TouchableOpacity style={styles.close} onPress={() => {props.onClose()}}>
                <Image style={{height:12,width:12}} source={require('../../images/close.png')}></Image>
            </TouchableOpacity>
              <Text style={{fontSize:15,color:'#303030',textAlign:'center'}}>工作查看</Text>
              <View style={[styles.list,{marginTop:40}]}>
                  <TouchableOpacity style={styles.list_a} onPress={()=>{_navigator.navigate("RepairWorkDetail");props.onClose()}}>
                    <Image style={{width:35,height:35,}} source={require('../../images/matter_g.png')}></Image>
                    <Text style={{fontSize:13,color:'#303030',textAlign:'center'}}>报修</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.list_a} onPress={()=>{_navigator.navigate("ComplaintWorkDetail");props.onClose()}}>
                    <Image style={{width:35,height:35,}} source={require('../../images/matter_e.png')}></Image>
                    <Text style={{fontSize:13,color:'#303030',textAlign:'center'}}>投诉</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.list_a} onPress={()=>{_navigator.navigate("SuggestWorkDetail");props.onClose()}}>
                    <Image style={{width:35,height:35,}} source={require('../../images/matter_c.png')}></Image>
                    <Text style={{fontSize:13,color:'#303030',textAlign:'center'}}>建议</Text>
                  </TouchableOpacity>
              </View>
              <View style={[styles.list,{marginTop:15}]}>
                  <TouchableOpacity style={styles.list_a} onPress={()=>{_navigator.navigate("InquiriesWorkDetail");props.onClose()}}>
                    <Image style={{width:35,height:35,}} source={require('../../images/matter_f.png')}></Image>
                    <Text style={{fontSize:13,color:'#303030',textAlign:'center'}}>问询</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.list_a} onPress={()=>{_navigator.navigate("StatisticalReport");props.onClose()}}>
                    <Image style={{width:35,height:35,}} source={require('../../images/matter_d.png')}></Image>
                    <Text style={{fontSize:13,color:'#303030',textAlign:'center'}}>统计报单</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.list_a} onPress={()=>{_navigator.navigate("RepairCostList");props.onClose()}}>
                    <Image style={{width:35,height:35,}} source={require('../../images/matter_h.png')}></Image>
                    <Text style={{fontSize:13,color:'#303030',textAlign:'center'}}>维修结算单</Text>
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
    flexDirection:'column-reverse',
    alignItems:'center'
  },
  title: {
    width:width,
    height: 284,
    backgroundColor: 'white',
    paddingTop:50,
    flexDirection:'column',
    alignItems:'center',
    position:'relative'
  },
  list:{
    width:width-90,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  list_a:{
    justifyContent:'space-between',
    alignItems:'center',
    height:55,
    width:75,
  },
  close:{
    height:30,
    width:30,
    position:'absolute',
    flexDirection:'row-reverse',
    top:15,
    right:20,
  }
});

module.exports = MatterWork
