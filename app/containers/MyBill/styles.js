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
list_box:{
  width:width-30,
  paddingTop:15,
  paddingRight:15,
  paddingLeft:15,
  backgroundColor:'#ffffff',
  flexDirection:'column',
  borderRadius:10,
  marginTop:10
},
list_font:{
  fontSize:15,
  color:'#999999',
  lineHeight:16,
},
list_font_a:{
  fontSize:15,
  color:'#303030',
  lineHeight:16,
},
list_font_b:{
  fontSize:12,
  color:'#999999',
  lineHeight:13,
  marginBottom:15
},
list_box_a:{
  flexDirection:'row',
  justifyContent:'space-between',
  alignItems:'center',
  marginTop:15,
  marginBottom:10
},
list_line:{
  borderBottomWidth:1,
  borderColor:'#dddddd',
},
load_img:{
  width:144,
  height:114,
  marginTop:150,
  marginBottom:15
},
repair_loadbox:{
  flexDirection: 'column',
  alignItems: 'center',
  width: width
},
load_text:{
  fontSize: 13,
  color: '#999999'
},



});

module.exports = styles
