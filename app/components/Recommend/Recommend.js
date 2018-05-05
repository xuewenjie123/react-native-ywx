'use strict';
import React, { Component, } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, StatusBar, } from 'react-native';
import { width, height } from '../common/Dimensions';
var _this;
var list = [
  {imgurl: require('../../images/repair_f.png'),title:"约车一次",integral:"200积分"},
  {imgurl: require('../../images/repair_f.png'),title:"星巴克圣代",integral:"200积分"},
  {imgurl: require('../../images/repair_f.png'),title:"约车一次",integral:"200积分"},
  {imgurl: require('../../images/repair_f.png'),title:"约车一次",integral:"200积分"},
];

class Recommend extends Component {
  constructor(props) {
   super(props);
   this.state={
     list:list
   }
  }
  render() {
    _this=this;
    var _props = this.props;
    return(
      <View style={styles.list_middle_box}>
          <View style={styles.list_text}>
             <Text style={styles.list_font_d}>为你推荐</Text>
          </View>
          <View style={styles.list_info_box}>
          {_this.state.list.map((d,index)=>(
            <View key={index} style={styles.list_info}>
               <Image source={d.imgurl} style={styles.list_image} />
               <View style={styles.list_image_a}>
                  <Text style={styles.list_font_j}>{d.title}</Text>
                  <Text style={styles.list_font_g}>{d.integral}</Text>
               </View>
            </View>
          ))

          }
          </View>

      </View>
    )
  }
};

const styles = StyleSheet.create({
  list_middle_box:{
    width:width,
    backgroundColor:'#ffffff',
    paddingLeft:15,
    paddingRight:15,
    justifyContent:'center',
    paddingBottom:15,
    marginTop:10,
  },
  list_font_g:{
    fontSize:15,
    color:'#edaf37',
  },
  list_font_j:{
    fontSize:15,
    color:'#303030',
  },
  list_text:{
    width:width-30,
    flexDirection:'row',
    paddingBottom:15,
    paddingTop:15,
    borderBottomColor:'#dddddd',
    borderBottomWidth:1
  },
  list_font_d:{
    color:'#999999',
    fontSize:15
  },
  list_info_box:{
    width:width-30,
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'space-between',
  },
  list_info:{
    width:330*width/750,
  },
  list_image:{
    height:330*width/750,
    width:330*width/750,
    borderRadius:5,
    marginTop:15
  },
  list_image_a:{
    flex:1,
    flexDirection:'row',
    justifyContent:'space-between',
    width:330*width/750,
    marginTop:10,
  },
});

module.exports = Recommend
