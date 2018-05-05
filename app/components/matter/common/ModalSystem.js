'use strict';
import React, { Component, } from 'react';
import {StyleSheet,View,TouchableOpacity,Image,Text,Modal,ListView} from 'react-native';
import color from "../../constant/color"
import { width, height } from './Dimensions';
import GradientBox from './GradientBox'
var _navigator,_state,_this,_props;

export default class OrderModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
     }


     render(){
       _this=this;
       _state=this.state;
       _props=this.props;
       return(
         <Modal
           animationType="slide"
           transparent={true}
           visible={_props.visible}
           style={{alignItems:"center",justifyContent:"center",}}
           onRequestClose={() => {_props.closeModal()}}
           >
             <View style={{position: 'absolute', width: width, height: height, backgroundColor: "#000", opacity: .7,}}>
               <TouchableOpacity style={{flex:1}} onPress={() => {_props.closeModal()}}>
               </TouchableOpacity>
             </View>
              <View style={styles.main}>
                <View style={styles.box}>
                  <Text style={styles.text1}>提示</Text>
                  <Text style={styles.text2}>确定不选成员，由系统派单?</Text>
                   <View style={styles.box1}>
                     <TouchableOpacity onPress={() => {_props.closeModal()}}>
                          <View style={styles.cancel}><Text style={{color:color.font2C}}>取消</Text></View>
                     </TouchableOpacity>
                     <TouchableOpacity style={{marginLeft: 30*width/750}} onPress={() => {_props._orderYes()}}>
                        <GradientBox title="是的" styles={{width:150*width/750,height:50*width/750,borderRadius:10*width/750}}/>
                     </TouchableOpacity>
                   </View>
                  </View>
              </View>
          </Modal>

       )
     }
   }
   const styles = StyleSheet.create({
     main: {
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
     },
     text1:{
        fontSize:15,
        color:"#000",
        marginBottom:60*width/750,
     },
     text2:{
        fontSize:13,
        color:color.font2C,
        marginBottom:20,
     },
     cancel:{
        justifyContent:'center',
        alignItems:'center',
        width:150*width/750,
        height:50*width/750,
        backgroundColor:"#e4e6eb",
        borderRadius:10*width/750
     },
     box:{
       width:450*width/750,
       height:320*width/750,
       justifyContent: 'space-between',
       alignItems: 'center',
       backgroundColor: color.bar,
       paddingBottom:35*width/750,
       borderRadius:20*width/750,
       paddingTop:30*width/750,
       
     },
     box1: {
       width:334*width/750,
       height:50*width/750,
       flexDirection: 'row',
       alignItems: 'flex-end',
       justifyContent: 'center'
     },

   });
