'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, TouchableOpacity, Picker, Modal, } from 'react-native';
var Dimensions = require('Dimensions');
var { width, height } = Dimensions.get('window');
var _navigator,_this;

class Entering extends Component {
  constructor(props) {
   super(props);
   this.state={
     speaking:this.props.speaking,
     currentTime:this.props.currentTime,
   }
  }
  recording(){
    _this.setState({speaking:true})
      console.log(_this.state.currentTime);
    _this.props.record()

  }
  close(){
    _this.setState({speaking:false})
    _this.props.onClose()
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
          <TouchableOpacity style={{flex:1}} onPress={() => {_this.close()}}>
          </TouchableOpacity>
        </View>
        <View style={styles.main}>
            {_this.state.speaking?
              <View style={styles.title}>
                <Image style={{width:32,height:32}} source={require('../../images/apply_b.png')}></Image>
                <Text style={{fontSize:15,color:'#999999',textAlign:'center'}}>正在输入...</Text>
              </View>
              :null

            }
            {_this.state.speaking?
              <TouchableOpacity style={styles.button} onPress={()=>{_this.close()}}>
                  <View style={styles.speak}>
                    <Text style={{fontSize:15,color:'#303030',textAlign:'center'}}>结束  说话</Text>
                  </View>
              </TouchableOpacity>
              :
              <TouchableOpacity style={styles.button} onPress={()=>{_this.recording()}}>
                  <View style={styles.speak}>
                    <Text style={{fontSize:15,color:'#303030',textAlign:'center'}}>开始  说话</Text>
                  </View>
              </TouchableOpacity>
            }
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
    width:150,
    height: 100,
    backgroundColor: 'white',
    borderRadius : 10,
    paddingTop:15,
    paddingBottom:15,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:50
  },
  button:{
    position:'absolute',
    bottom:0,
    width:width,
    height:100*width/750,
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'center'
  },
  speak:{
    height:80*width/750,
    width:width-60*width/750,
    borderWidth:1,
    borderColor:'#dddddd',
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  }
});

module.exports = Entering
