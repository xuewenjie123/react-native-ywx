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
up:{
  width:width,
  height:160,
  backgroundColor:'#ffffff',
  borderBottomWidth:1,
  borderColor:'#dddddd',
},
middle:{
  flex:1,
  width:width,
  backgroundColor:'#ffffff',
  padding:15
},
middle_a:{
  flex:4,
  flexDirection:'row',
  alignItems:'center',
  paddingLeft:15,
},
middle_b:{
  flex:3,
  paddingLeft:15,
  flexDirection:'row',
  alignItems:'center',
},
middle_list:{
  flexDirection:'row',
  marginBottom:15
},
down:{
  width:width,
  padding:15,
},
down_font:{
  fontSize:12,
  color:'#999999'
},
button:{
  width:width,
  height:49,
  backgroundColor:'#ffffff',
  flexDirection:'row',
  alignItems:'center',
  paddingLeft:15,
},
button_font_a:{
  fontSize:13,
  color:'#999999'
},
button_font:{
  fontSize:15,
  color:'#edaf37'
},
button_font_b:{
  fontSize:15,
  color:'#ffffff'
},
button_a:{
  flex:3,
  flexDirection:'row',
  alignItems:'center',
  height:49,
},
button_b:{
  flex:2,
  height:49,
  backgroundColor:'#5986ff'
},
middle_font:{
  fontSize:15,
  color:'#303030',
  marginBottom:25,
},
middle_font_a:{
  fontSize:13,
  color:'#999999'
},
middle_font_b:{
  fontSize:13,
  color:'#ffffff'
},

});

module.exports = styles
