'use strict';
import { StyleSheet, StatusBar} from 'react-native';
import Dimensions from 'Dimensions';
let { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  main: {
     flex: 1,
     flexDirection:'column',
     alignItems: 'center',
     width:width,
     height:height,
     backgroundColor:'#f7f8fc',
   },
   map: {
    width:width,
    height:height-70,
  },
  info:{
    position:'absolute',
    bottom:25,
    width:width,
    paddingLeft:15,
    paddingRight:15
  },
  home_p:{
    height:55,
    width:140,
  },
  home_n:{
    height:40,
    width:40
  },
  info_a:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  info_b:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
  },
  home_h:{
    height:17,
    width:17,
    marginLeft:5
  },
  mine_e:{
    height:17,
    width:17,
    marginRight:5
  },
  info_font:{
    fontSize:13,
    color:'#5986ff'
  },
  address:{
    position:'absolute',
    top:11,
    width:width,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row',
    height:42
  },
  address_a:{
    height:42,
    width:width-30,
    backgroundColor:'#ffffff',
    borderRadius:10,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    paddingLeft:15,
    paddingRight:15
  },
  address_b:{
    flexDirection:'row',
    alignItems:'center'
  },
  address_font:{
    fontSize:13 ,
    color:'#999999',
    width:500*width/750,
  },
  menu:{
    position:'absolute',
    top:width/2+60,
    right:-30
  },
  home_l:{
    height:60,
    width:60
  },
  home_i:{
    height:283,
    width:283
  },
  menu_a:{
    position:'absolute',
    top:width/2-45,
    right:-140
  },





});

module.exports = styles
